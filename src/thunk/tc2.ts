import { toggleSelectWarningModalActionCreator } from '../actions/index';
import { ThunkComponentWrapperType } from './thunkComponent';

/**
 * this thunk for  that edit word action is ready or not 
 *  - this thunk is called when edit controller item in controller 
 **/
const tc2ThunkComponentWrapper: ThunkComponentWrapperType = ( next ) => ( arg ) => ( dispatch, getState ) => {
  console.log("do something in thunk component 2");

  dispatch(toggleSelectWarningModalActionCreator(true));

  dispatch<any>(next(arg)); 
}
export default tc2ThunkComponentWrapper;





