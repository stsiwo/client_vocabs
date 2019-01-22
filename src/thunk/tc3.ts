import { toggleDefineWarningModalActionCreator } from '../actions/index';
import { ThunkComponentWrapperType } from './thunkComponent';

/**
 * this thunk for  that edit word action is ready or not 
 *  - this thunk is called when edit controller item in controller 
 **/

const tc3ThunkComponentWrapper: ThunkComponentWrapperType = ( next ) => ( arg ) => ( dispatch, getState ) => {
  console.log("do something in thunk component 3");

  dispatch(toggleDefineWarningModalActionCreator(true));

  dispatch<any>(next(arg)); 
}
export default tc3ThunkComponentWrapper;






