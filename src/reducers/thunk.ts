import { AnyAction } from 'redux';
import { IState } from "../state/type"; 
import { changeSearchKeyWordActionCreator, changeDisplayedWordListActionCreator } from "../actions";
import { IWordListItem } from "../domains/word";
import { ThunkAction } from 'redux-thunk';
import { getWordListItem } from './helper';
import * as fuzzysort from 'fuzzysort';
import { OrderedSet } from 'immutable';
//const flatten = require('lodash/flatten');
//: ThunkAction<void, IState, undefined, AnyAction> 
// apply immutablejs for sorting
//type changeSortWrapperThunkType = (newSort: SORT_ORDER) => ThunkAction<void, IState, undefined, AnyAction>;

//export const changeSortWrapperThunk: changeSortWrapperThunkType = ( newSort ) => ( dispatch, getState ) => {
  //// get sortedWordList and denormalized to sort
  //const { sortedWordList, entities } = getState();
  //// get list with its word name to sort
  //const wordList: OrderedSet<IWordNameList> = getWordNameList(sortedWordList, entities); 
  //// sort with handler
  //wordList.sort( sortHandlers[newSort] ); 
  //// extract only id 
  //const wordIdList = wordList.map(( word: IWord ) => word.id );
  //// dispatch change sort action
  //dispatch(changeSortActionCreator(newSort, wordIdList));
  //dispatch(changeDisplayedWordListActionCreator(wordIdList));
//}

//type CompareFunctionType = (a: IWord, b: IWord) => number;

////type ValueOf<T> = T[keyof T];
  
//// key must be enum of SORT_ORDER to map it to compare hander function
//interface ISortHandler {
  //[P: number]: CompareFunctionType;
//}

//// might need to refactor to implement more efficient sorting algorithm (Schwartzian transform)
//export const sortHandlers: ISortHandler = {
  //[SORT_ORDER.ALPHA_ASC]: (first_word, second_word) => {
    //const nameA = first_word.name.toUpperCase(); // ignore upper and lowercase
    //const nameB = second_word.name.toUpperCase(); // ignore upper and lowercase
    //if (nameA < nameB) {
      //return -1;
    //}
    //if (nameA > nameB) {
      //return 1;
    //}

    //// names must be equal
    //return 0;
  //},
  //[SORT_ORDER.ALPHA_DESC]: (first_word, second_word) => {
    //const nameA = first_word.name.toUpperCase(); // ignore upper and lowercase
    //const nameB = second_word.name.toUpperCase(); // ignore upper and lowercase
    //if (nameA < nameB) {
      //return 1;
    //}
    //if (nameA > nameB) {
      //return -1;
    //}

    //// names must be equal
    //return 0;
  //},
  //[SORT_ORDER.DATE_NEWER]: (first_word, second_word) => {
    //return +new Date(second_word.createDate) - +new Date(first_word.createDate);
  //},
  //[SORT_ORDER.DATE_OLDER]: (first_word, second_word) => {
    //return +new Date(first_word.createDate) - +new Date(second_word.createDate);
  //},
//}
    
//type changeFilterWrapperThunkType = (newFilter: PosEnum[]) => ThunkAction<void, IState, undefined, AnyAction>;

//export const changeFilterWrapperThunk: changeFilterWrapperThunkType = ( newFilter ) => ( dispatch, getState ) => {

  //// get displayedWordList (not sortedWordList: since can't get retrieve original list after filterd)
  //const { displayedWordList, entities } = getState();

  //// filter words with newFilter so it only contains words whose def's pos match with newFilter 
  //const filteredWordList: OrderedSet<string> = filter(displayedWordList, entities, newFilter); 

  //dispatch(changeFilterActionCreator(newFilter, filteredWordList));
  //dispatch(changeDisplayedWordListActionCreator(filteredWordList));
//}

type changeSearchKeyWordWrapperThunkType = (nextSearchKey: string) => ThunkAction<void, IState, undefined, AnyAction>;

export const changeSearchKeyWordWrapperThunk: changeSearchKeyWordWrapperThunkType = ( nextSearchKey ) => ( dispatch, getState ) => {
  // should i use sync or async? (async is better?)
  // if nextSearchKey is empty, list default words (sortedWordList)
  if (!nextSearchKey) {
    // search key is empty =======================================
    const { sortedWordList } = getState();
    // change displayedWordList to sortedWordList
    // empty  searchedWordList when search key is empty (called inside changeSearchKeyWordActionCreator)
    dispatch(changeSearchKeyWordActionCreator(nextSearchKey, []));
    dispatch(changeDisplayedWordListActionCreator(sortedWordList));
    // search key is empty =======================================
  } else {
    // search key is not empty ===================================
    // get sortedWordList 
    const { displayedWordList ,selectedWordList, entities } = getState();
    // convert into IWordListItem 
    const wordListItem = getWordListItem(displayedWordList, selectedWordList, entities);

    // for now, use toArray (expensive in Immutablejs) for fuzzy string: i don't have an idea how to achieve fuzzy string search using immutablejs
    // need to fix this one (at least don't use expensive function in immutablejs like toJS, toArray, toObject)
    const wordListItemArray: IWordListItem[] = wordListItem.toArray();

    // fuzzy string matching using newSearchKey and sortedWordList
    const fuzzyResult = fuzzysort.go(nextSearchKey, wordListItemArray, { key: 'name' });

    // get result ( list of matching word name ) and put them into sortedWordList 
    const nextSearchedWordList = fuzzyResult.map(( result ) => result.obj.id );
    // dispatch follows:
    dispatch(changeSearchKeyWordActionCreator(nextSearchKey, nextSearchedWordList));
    dispatch(changeDisplayedWordListActionCreator(OrderedSet<string>(nextSearchedWordList)));
    // search key is not empty ===================================
  }
}


