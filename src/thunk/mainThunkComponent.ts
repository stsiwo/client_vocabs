import { toggleWordFormErrorActionCreator } from '../actions/index';
import { MainThunkComponentType } from './thunkComponent';


/**
 * this thunk for  that edit word action is ready or not 
 *  - this thunk is called when edit controller item in controller 
 **/

const mainThunkComponentWrapper: MainThunkComponentType = ( arg ) => ( dispatch, getState ) => {
  console.log("do something in thunk component 1");

  dispatch(toggleWordFormErrorActionCreator(true));
}
export default mainThunkComponentWrapper;







