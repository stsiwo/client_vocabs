import { ThunkComponentWrapperType } from './thunkComponent';

/**
 * this thunk for  that edit word action is ready or not 
 *  - this thunk is called when edit controller item in controller 
 **/
const tc2ThunkComponentWrapper: ThunkComponentWrapperType = ( next ) => ( ...args ) => ( dispatch, getState ) => {

  if (getState().ui.isSelectWarningModalOpen) {
    console.log("since isSelectWarningModalOpen is true, cancel the main thunk here");
  } else {
    dispatch<any>(next(...args)); 
  }

}
export default tc2ThunkComponentWrapper;





