import { AnyAction } from 'redux';
import { IState } from "../state/type"; 
import { changeSearchKeyWordActionCreator, changeDisplayedWordListActionCreator } from "../actions";
import { IWordListItem } from "../domains/word";
import { ThunkAction } from 'redux-thunk';
import { getWordListItem } from '../reducers/helper';
import * as fuzzysort from 'fuzzysort';
import { OrderedSet, Record } from 'immutable';

/**
 * should display no result message when there is no result...
 * #REFACTOR. (ticket#7)
 **/
type searchKeyWordChangeThunkType = (nextSearchKey: string) => ThunkAction<void, Record<IState>, undefined, AnyAction>;

const searchKeyWordChangeThunk: searchKeyWordChangeThunkType = ( nextSearchKey ) => ( dispatch, getState ) => {
  // 1. do fuzzy search 
  //  1.1 gather necessary state
  const sortedWordList = getState().get('sortedWordList');
  const entities = getState().get('entities');
  const selectedWordList = getState().get('selectedWordList');

  //  1.2 convert sortedWordList to word list item
  const wordListItem = getWordListItem(sortedWordList, selectedWordList, entities);

  //  1.3 convert into plain array
  // for now, use toArray (expensive in Immutablejs) for fuzzy string: i don't have an idea how to achieve fuzzy string search using immutablejs
  // need to fix this one (at least don't use expensive function in immutablejs like toJS, toArray, toObject)
  const wordListItemArray: IWordListItem[] = wordListItem.toArray();

  //  1.4 do fuzzy search 
  const fuzzyResult = fuzzysort.go(nextSearchKey, wordListItemArray, { key: 'name' });
  
  //  1.5 extract only word id 
  const nextSearchedWordList = fuzzyResult.map(( result ) => result.obj.id );

  // 2 change state
  dispatch(changeSearchKeyWordActionCreator(nextSearchKey, nextSearchedWordList));
  dispatch(changeDisplayedWordListActionCreator(OrderedSet<string>(nextSearchedWordList)));
}
export default searchKeyWordChangeThunk;
