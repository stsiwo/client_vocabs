import { AnyAction } from 'redux';
import { IState } from "../state/type"; 
import { selectAllSelectedWordListActionCreator, emptySelectedWordListActionCreator } from '../actions/index';
import { ThunkAction } from 'redux-thunk';
import { Record } from 'immutable';

/**
 * this thunk for toggle select all icon clicked. 
 * 
 *   
 **/
export type selectAllIconClickWrapperThunkType = () => ThunkAction<void, Record<IState>, undefined, AnyAction>;

const selectAllIconClickWrapperThunk: selectAllIconClickWrapperThunkType = (  ) => ( dispatch, getState ) => {
  // get necessary state
  const selectedWordList = getState().get('selectedWordList');
  const displayedWordList = getState().get('displayedWordList');

  if (selectedWordList.size === 0) {
    // if size = 0, means first time to click select all controller
    dispatch(selectAllSelectedWordListActionCreator(displayedWordList));
  } else {
    // if size != 0, means second time to click select all controller
    dispatch(emptySelectedWordListActionCreator());
  }
}
export default selectAllIconClickWrapperThunk;



