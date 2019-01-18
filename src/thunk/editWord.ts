import { AnyAction } from 'redux';
import { INormalizedState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import { toggleSearchWordModalActionCreator, toggleSelectWarningModalActionCreator } from '../actions/index';
import history from '../routeHistory';

/**
 * this thunk for  that edit word action is ready or not 
 *  - this thunk is called when edit controller item in controller 
 **/
export type editWordWrapperThunkType = () => ThunkAction<void, INormalizedState, undefined, AnyAction>;

const editWordWrapperThunk: editWordWrapperThunkType = (  ) => ( dispatch, getState ) => {
  // get selectedWordList to  it's empty or not
  const { selectedWordList } = getState();
  // and isSearchWordModalOpen to  it's opened or not
  const { isSearchWordModalOpen } = getState().ui;
  // if search modal is opened, close it
  if (isSearchWordModalOpen) dispatch(toggleSearchWordModalActionCreator(false)); 
  //  selectedWordList is empty or not
  if (selectedWordList.length === 0) {
    // if so, show select warning modal
    dispatch(toggleSelectWarningModalActionCreator(true));
  } else {
    history.push('/word/detail'); 
  }
}
export default editWordWrapperThunk;





