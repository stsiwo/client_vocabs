import { changeSearchKeyWordActionCreator  } from '../actions/index';
import { MainThunkType } from './thunkComponent';


/**
 * this thunk for  that edit word action is ready or not 
 *  - this thunk is called when edit controller item in controller 
 **/

const searchKeyWordChangeMainThunkComponentWrapper: MainThunkType = ( arg ) => ( dispatch, getState ) => {
  dispatch(changeSearchKeyWordActionCreator(arg, []));
}
export default searchKeyWordChangeMainThunkComponentWrapper;








