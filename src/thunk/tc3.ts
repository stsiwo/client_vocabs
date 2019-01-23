import { ThunkComponentWrapperType } from './thunkComponent';

/**
 * this thunk for  that edit word action is ready or not 
 *  - this thunk is called when edit controller item in controller 
 **/

const tc3ThunkComponentWrapper: ThunkComponentWrapperType = ( next ) => ( arg ) => ( dispatch, getState ) => {
  
  if (getState().ui.isDefineWarningModalOpen) {
    console.log("since isDefineWarningModalOpen is true, cancel the main thunk here");
  } else {
    dispatch<any>(next(arg)); 
  }

}
export default tc3ThunkComponentWrapper;






