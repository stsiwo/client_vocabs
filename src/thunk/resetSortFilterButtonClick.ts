import { AnyAction } from 'redux';
import { IState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import { Record, OrderedSet } from 'immutable';
import { resetSortFilterActionCreator } from '../actions/index';

/**
 *
 **/
export type resetSortFilterButtonClickThunkType = () => ThunkAction<void, Record<IState>, undefined, AnyAction>;

const resetSortFilterButtonClickThunk: resetSortFilterButtonClickThunkType = (  ) => ( dispatch, getState ) => {
  // get entities.words 
  const words = getState().getIn([ 'entities', 'words' ]);

  // assign default word list to sortedWordList and displayedWordList
  const defaultWordList = OrderedSet<string>(words.keys());

  // dispatch
  dispatch(resetSortFilterActionCreator(defaultWordList, defaultWordList));
  
}
export default resetSortFilterButtonClickThunk;



