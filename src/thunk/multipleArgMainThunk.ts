import { changeSearchKeyWordActionCreator } from '../actions/index';
import { MainThunkType } from './thunkComponent';


/**
 * this thunk for  that edit word action is ready or not 
 *  - this thunk is called when edit controller item in controller 
 **/

const multipleArgMainThunkComponentWrapper: MainThunkType = ( ...args ) => ( dispatch, getState ) => {
  dispatch(changeSearchKeyWordActionCreator(args[0], args[1]));
}
export default multipleArgMainThunkComponentWrapper;








