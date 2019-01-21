import { AnyAction } from 'redux';
import { INormalizedState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import { toggleDefineWarningModalActionCreator } from '../actions/index';
import { ThunkComponentType } from './thunkComponent';

/**
 * this thunk for  that edit word action is ready or not 
 *  - this thunk is called when edit controller item in controller 
 **/
export type tc3WrapperThunkType = ThunkComponentType<[string]>; 

const tc3WrapperThunk: tc3WrapperThunkType = ( next ) => ( arg ) => ( dispatch, getState ) => {
  console.log("do something in thunk component 3");
  console.log(arg);

  dispatch(toggleDefineWarningModalActionCreator(true));

  dispatch(next(arg)); 
}
export default tc3WrapperThunk;








