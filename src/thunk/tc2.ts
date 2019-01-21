import { AnyAction } from 'redux';
import { INormalizedState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import { toggleSelectWarningModalActionCreator } from '../actions/index';
import { ThunkComponentType } from './thunkComponent';

/**
 * this thunk for  that edit word action is ready or not 
 *  - this thunk is called when edit controller item in controller 
 **/
export type tc2WrapperThunkType = ThunkComponentType<[string]>; 

const tc2WrapperThunk: tc2WrapperThunkType = ( next ) => ( arg ) => ( dispatch, getState ) => {
  console.log("do something in thunk component 2");

  dispatch(toggleSelectWarningModalActionCreator(true));

  dispatch(next(arg)); 
}
export default tc2WrapperThunk;







