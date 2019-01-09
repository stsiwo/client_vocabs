import { SORT_ORDER } from '../enums';
import { AnyAction } from 'redux';
import { INormalizedState } from "../state/type"; 
import { changeSortAction, changeFilterAction, searchKeyWordAction, changeSearchedWordListAction, changeSortedWordListAction, changeDisplayedWordListAction } from "../actions";
import { IWord } from "../domains/word";
import { IDef } from '../domains/def';
import { ThunkAction } from 'redux-thunk';
import { PosEnum } from '../../src/domains/pos';
import { getWordListItem } from './helper';
import * as fuzzysort from 'fuzzysort';
const uniq = require('lodash/uniq');
//: ThunkAction<void, INormalizedState, undefined, AnyAction> 

type changeSortWrapperThunkType = (newSort: SORT_ORDER) => ThunkAction<void, INormalizedState, undefined, AnyAction>;

export const changeSortWrapperThunk: changeSortWrapperThunkType = ( newSort ) => ( dispatch, getState ) => {
  // get words state
  const wordList = Object.values(getState().entities.words);
  // sort with handler
  wordList.sort(sortHandlers[newSort]); 
  // extract only id 
  const wordIdList = wordList.map(( word ) => word.id );
  // dispatch change sort action
  dispatch(changeSortedWordListAction(wordIdList));
  dispatch(changeDisplayedWordListAction(wordIdList));
  dispatch(changeSortAction(newSort));
}

type CompareFunctionType = (a: IWord, b: IWord) => number;

//type ValueOf<T> = T[keyof T];
  
// key must be enum of SORT_ORDER to map it to compare hander function
interface ISortHandler {
  [P: number]: CompareFunctionType;
}

// might need to refactor to implement more efficient sorting algorithm (Schwartzian transform)
export const sortHandlers: ISortHandler = {
  [SORT_ORDER.ALPHA_ASC]: (first_word, second_word) => {
    const nameA = first_word.name.toUpperCase(); // ignore upper and lowercase
    const nameB = second_word.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  },
  [SORT_ORDER.ALPHA_DESC]: (first_word, second_word) => {
    const nameA = first_word.name.toUpperCase(); // ignore upper and lowercase
    const nameB = second_word.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    // names must be equal
    return 0;
  },
  [SORT_ORDER.DATE_NEWER]: (first_word, second_word) => {
    return +new Date(second_word.createDate) - +new Date(first_word.createDate);
  },
  [SORT_ORDER.DATE_OLDER]: (first_word, second_word) => {
    return +new Date(first_word.createDate) - +new Date(second_word.createDate);
  },
}
    
type changeFilterWrapperThunkType = (newFilter: PosEnum[]) => ThunkAction<void, INormalizedState, undefined, AnyAction>;

export const changeFilterWrapperThunk: changeFilterWrapperThunkType = ( newFilter ) => ( dispatch, getState ) => {

  // get defs state
  const defList = Object.values(getState().entities.defs);
  // filter with handler
  const filteredDef = defList.filter(( def ) => newFilter.includes(def.pos));
  // extract only id 
  const wordIdList = filteredDef.map(( def: IDef ) => def._wordId );
  // remove duplicate word id 
  const duplFreeWordIdList = uniq(wordIdList);
  // dispatch change sort action
  dispatch(changeSortedWordListAction(duplFreeWordIdList));
  dispatch(changeDisplayedWordListAction(duplFreeWordIdList));
  dispatch(changeFilterAction(newFilter));
}

type changeSearchKeyWordWrapperThunkType = (nextSearchKey: string) => ThunkAction<void, INormalizedState, undefined, AnyAction>;

export const changeSearchKeyWordWrapperThunk: changeSearchKeyWordWrapperThunkType = ( nextSearchKey ) => ( dispatch, getState ) => {
  // should i use sync or async? (async is better?)
  // if nextSearchKey is empty, list default words (sortedWordList)
  if (!nextSearchKey) {
    const { sortedWordList } = getState();
    // change displayedWordList to sortedWordList
    dispatch(changeDisplayedWordListAction(sortedWordList));
    dispatch(searchKeyWordAction(nextSearchKey));
  } else {
    // get sortedWordList 
    const { displayedWordList ,selectedWordList, entities } = getState();
    // convert into IWordListItem 
    const wordListItem = getWordListItem(displayedWordList, selectedWordList, entities);
    // fuzzy string matching using newSearchKey and sortedWordList
    const fuzzyResult = fuzzysort.go(nextSearchKey, wordListItem, { key: 'name' });

    // get result ( list of matching word name ) and put them into sortedWordList 
    const nextSearchedWordList = fuzzyResult.map(( result ) => result.obj.id );
    // dispatch action for sortedWordList and action for searchKeyWord
    dispatch(changeSearchedWordListAction(nextSearchedWordList));
    dispatch(changeDisplayedWordListAction(nextSearchedWordList));
    dispatch(searchKeyWordAction(nextSearchKey));
  }
}


