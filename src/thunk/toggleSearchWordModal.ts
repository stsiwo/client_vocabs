import { AnyAction } from 'redux';
import { INormalizedState } from "../state/type"; 
import { toggleSearchWordModalAction, changeDisplayedWordListAction } from '../actions/index';
import { ThunkAction } from 'redux-thunk';


/**
 * this thunk for toggle SearchWordModal and also change displayed wordList to sorted wordList (not searchedWordList) 
 * ( often need to invoke multiple actions so make this as thunk
 **/
export type toggleSearchWordModalWrapperThunkType = () => ThunkAction<void, INormalizedState, undefined, AnyAction>;

const toggleSearchWordModalWrapperThunk: toggleSearchWordModalWrapperThunkType = (  ) => ( dispatch, getState ) => {
  // get sortedWordList state to assign to displayedWordList
  const { sortedWordList } = getState();
  const { isSearchWordModalOpen } = getState().ui;

  // if isSearchWordModalOpen is true, need to close it and also change displayed wordList to sortedWordList
  if ( isSearchWordModalOpen ) {
    // dispatch changeDisplayedWordListAction with sortedWordList values
    dispatch(changeDisplayedWordListAction(sortedWordList));
  } 
  // dispatch toggleSearchWordModalAction with false
  dispatch(toggleSearchWordModalAction(!isSearchWordModalOpen));
}
export default toggleSearchWordModalWrapperThunk;


