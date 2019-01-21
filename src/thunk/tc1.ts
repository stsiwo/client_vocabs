import { toggleSearchWordModalActionCreator } from '../actions/index';
import { ThunkComponentType } from './thunkComponent';

/**
 * this thunk for  that edit word action is ready or not 
 *  - this thunk is called when edit controller item in controller 
 **/
export type tc1WrapperThunkType = ThunkComponentType<[string]>; 

const tc1WrapperThunk: tc1WrapperThunkType = ( next ) => ( arg ) => ( dispatch, getState ) => {
  console.log("do something in thunk component 1");

  dispatch(toggleSearchWordModalActionCreator(true));

  dispatch(next(arg)); 
}
export default tc1WrapperThunk;






