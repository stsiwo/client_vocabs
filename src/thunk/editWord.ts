import { AnyAction } from 'redux';
import { IState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import { toggleSearchWordModalActionCreator, toggleSelectWarningModalActionCreator } from '../actions/index';
import history from '../routeHistory';
import { Record } from 'immutable';

/**
 * this thunk for  that edit word action is ready or not 
 *  - this thunk is called when edit controller item in controller 
 **/
export type editWordWrapperThunkType = () => ThunkAction<void, Record<IState>, undefined, AnyAction>;

const editWordWrapperThunk: editWordWrapperThunkType = (  ) => ( dispatch, getState ) => {
  // get selectedWordList to  it's empty or not
  const selectedWordList = getState().get('selectedWordList');
  // and isSearchWordModalOpen to  it's opened or not
  const isSearchWordModalOpen = getState().get( "ui" ).get('isSearchWordModalOpen');
  // if search modal is opened, close it
  if (isSearchWordModalOpen) dispatch(toggleSearchWordModalActionCreator(false)); 
  //  selectedWordList is empty or not
  if (selectedWordList.isEmpty) {
    // if so, show select warning modal
    dispatch(toggleSelectWarningModalActionCreator(true));
  } else {
    history.push('/word/detail'); 
  }
}
export default editWordWrapperThunk;





