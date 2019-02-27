import { AnyAction } from 'redux';
import { IState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import { toggleDefineWarningModalActionCreator } from '../actions/index';

/**
 * this thunk for checking any validation error if error, open warning modal. if not, redirect to "/word" 
 *  - this thunk is called when back controller item in controller 
 **/
export type wordFormErrorCheckWrapperThunkType = (callback: () => void) => ThunkAction<void, IState, undefined, AnyAction>;

const wordFormErrorCheckWrapperThunk: wordFormErrorCheckWrapperThunkType = ( callback ) => ( dispatch, getState ) => {

  const { wordFormError } = getState();
  
  // if wordFormError exists, display warning modal
  if (wordFormError) {
    dispatch(toggleDefineWarningModalActionCreator(true));
  } else {
    callback();
  }
}
export default wordFormErrorCheckWrapperThunk;





