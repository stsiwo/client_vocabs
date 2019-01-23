import { ThunkMiddlewareType } from './thunkComponent';

/**
 * thunk middleware base example: use this as template
 **/
const tc2ThunkComponentWrapper: ThunkMiddlewareType = ( next ) => ( ...args ) => ( dispatch, getState ) => {

  if (getState().ui.isSelectWarningModalOpen) {
    console.log("since isSelectWarningModalOpen is true, cancel the main thunk here");
  } else {
    dispatch<any>(next(...args)); 
  }

}
export default tc2ThunkComponentWrapper;





