import { ThunkMiddlewareType } from './thunkComponent';


/**
 * this thunk for  that edit word action is ready or not 
 *  - this thunk is called when edit controller item in controller 
 **/

const tc1ThunkComponentWrapper: ThunkMiddlewareType = ( next ) => ( ...args ) => ( dispatch, getState ) => {

  if (getState().ui.isSearchWordModalOpen) {
    console.log("since isSearchWordModalOpen is true, cancel the main thunk here");
  } else {
    dispatch<any>(next(...args)); 
  }

}
export default tc1ThunkComponentWrapper;






