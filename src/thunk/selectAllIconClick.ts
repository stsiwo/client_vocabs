import { AnyAction } from 'redux';
import { IState } from "../state/type"; 
import { selectAllSelectedWordListActionCreator } from '../actions/index';
import { ThunkAction } from 'redux-thunk';
import toggleSearchWordModalWrapperThunk from '../thunk/toggleSearchWordModal';
import { Record } from 'immutable';

/**
 * this thunk for toggle select all icon clicked. close search word modal if it is opened otherwise just dispatch select all action  
 * ( often need to invoke multiple actions so make this as thunk
 **/
export type selectAllIconClickWrapperThunkType = () => ThunkAction<void, Record<IState>, undefined, AnyAction>;

const selectAllIconClickWrapperThunk: selectAllIconClickWrapperThunkType = (  ) => ( dispatch, getState ) => {
  // get sortedWordList state to assign to displayedWordList
  const sortedWordList = getState().get('sortedWordList');
  const isSearchWordModalOpen = getState().get("ui").get('isSearchWordModalOpen');

  // if isSearchWordModalOpen is true, need to close it and also change displayed wordList to sortedWordList
  if ( isSearchWordModalOpen ) {
    // dispatch toggleSearchWordModalWrapperThunk
    dispatch(toggleSearchWordModalWrapperThunk());
  } 
  // dispatch selectAllWordActionCreator with sortedWordList 
  dispatch(selectAllSelectedWordListActionCreator(sortedWordList));
}
export default selectAllIconClickWrapperThunk;



