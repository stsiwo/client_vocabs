import { AnyAction } from 'redux';
import { INormalizedState } from "../state/type"; 
import { selectAllWordActionCreator } from '../actions/index';
import { ThunkAction } from 'redux-thunk';
import toggleSearchWordModalWrapperThunk from '../thunk/toggleSearchWordModal';

/**
 * this thunk for toggle select all icon clicked. close search word modal if it is opened otherwise just dispatch select all action  
 * ( often need to invoke multiple actions so make this as thunk
 **/
export type selectAllIconClickWrapperThunkType = () => ThunkAction<void, INormalizedState, undefined, AnyAction>;

const selectAllIconClickWrapperThunk: selectAllIconClickWrapperThunkType = (  ) => ( dispatch, getState ) => {
  // get sortedWordList state to assign to displayedWordList
  const { sortedWordList } = getState();
  const { isSearchWordModalOpen } = getState().ui;

  // if isSearchWordModalOpen is true, need to close it and also change displayed wordList to sortedWordList
  if ( isSearchWordModalOpen ) {
    // dispatch toggleSearchWordModalWrapperThunk
    dispatch(toggleSearchWordModalWrapperThunk());
  } 
  // dispatch selectAllWordActionCreator with sortedWordList 
  dispatch(selectAllWordActionCreator(sortedWordList));
}
export default selectAllIconClickWrapperThunk;



