import { toggleWordFormErrorActionCreator } from '../actions/index';
import { MainThunkComponentType } from './thunkComponent';


/**
 * this thunk for  that edit word action is ready or not 
 *  - this thunk is called when edit controller item in controller 
 **/

const mainThunkComponentWrapper: MainThunkComponentType = ( arg ) => ( dispatch, getState ) => {
  dispatch(toggleWordFormErrorActionCreator(true));
}
export default mainThunkComponentWrapper;







