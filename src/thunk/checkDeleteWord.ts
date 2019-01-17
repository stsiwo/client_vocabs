import { AnyAction } from 'redux';
import { INormalizedState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import { toggleSearchWordModalActionCreator, toggleSelectWarningModalActionCreator, toggleDeleteConfirmModalActionCreator } from '../actions/index';

/**
 * this thunk for check that delete word action is ready or not 
 *  - this thunk is called when delete controller item in controller 
 **/
export type checkDeleteWordWrapperThunkType = () => ThunkAction<void, INormalizedState, undefined, AnyAction>;

const checkDeleteWordWrapperThunk: checkDeleteWordWrapperThunkType = (  ) => ( dispatch, getState ) => {
  // get selectedWordList to check it's empty or not
  const { selectedWordList } = getState();
  // and isSearchWordModalOpen to check it's opened or not
  const { isSearchWordModalOpen } = getState().ui;
  // if search modal is opened, close it
  if (isSearchWordModalOpen) dispatch(toggleSearchWordModalActionCreator(false)); 
  // check selectedWordList is empty or not
  if (selectedWordList.length === 0) {
    // if so, show select warning modal
    dispatch(toggleSelectWarningModalActionCreator(true));
  } else {
    // if not, proceed to confirmation modal
    dispatch(toggleDeleteConfirmModalActionCreator(true));
  }
  



      
  
}
export default checkDeleteWordWrapperThunk;




