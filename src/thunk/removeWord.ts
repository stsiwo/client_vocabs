import { AnyAction } from 'redux';
import { INormalizedState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import { removeWordActionCreator } from '../actions/index';

/**
 * this thunk for removing words and those corresponding defs (multiple words) 
 *  - this thunk is called when delete modal confirm button is clicked 
 *  - precondition exists such as selectedWordList is not empty (made sure in DeleteControllerItem click event handler)
 **/
export type removeWordWrapperThunkType = () => ThunkAction<void, INormalizedState, undefined, AnyAction>;

const removeWordWrapperThunk: removeWordWrapperThunkType = (  ) => ( dispatch, getState ) => {
  // get selectedWordList to remove
  const { selectedWordList } = getState();
  // dispatch removeWordActionCreator for each in selectedWordList
  selectedWordList.forEach(( deleteWordId ) => dispatch(removeWordActionCreator(deleteWordId)));
}
export default removeWordWrapperThunk;


