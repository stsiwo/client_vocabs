import { AnyAction } from 'redux';
import { IState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import { toggleSearchWordModalActionCreator, toggleSelectWarningModalActionCreator, toggleDeleteConfirmModalActionCreator } from '../actions/index';
import { Record } from 'immutable';
/**
 * this thunk for check that delete word action is ready or not 
 *  - this thunk is called when delete controller item in controller 
 **/
export type checkDeleteWordWrapperThunkType = () => ThunkAction<void, Record<IState>, undefined, AnyAction>;

const checkDeleteWordWrapperThunk: checkDeleteWordWrapperThunkType = (  ) => ( dispatch, getState ) => {
  // get selectedWordList to check it's empty or not
  const selectedWordList = getState().get('selectedWordList');
  // and isSearchWordModalOpen to check it's opened or not
  const isSearchWordModalOpen = getState().get('ui').get('isSearchWordModalOpen');
  // if search modal is opened, close it
  if (isSearchWordModalOpen) dispatch(toggleSearchWordModalActionCreator(false)); 
  // check selectedWordList is empty or not
  if (selectedWordList.isEmpty()) {
    // if so, show select warning modal
    dispatch(toggleSelectWarningModalActionCreator(true));
  } else {
    // if not, proceed to confirmation modal
    dispatch(toggleDeleteConfirmModalActionCreator(true));
  }
}
export default checkDeleteWordWrapperThunk;




