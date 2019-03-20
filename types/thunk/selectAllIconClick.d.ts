import { AnyAction } from 'redux';
import { IState } from "../state/type";
import { ThunkAction } from 'redux-thunk';
import { Record } from 'immutable';
/**
 * this thunk for toggle select all icon clicked.
 *
 *
 **/
export declare type selectAllIconClickWrapperThunkType = () => ThunkAction<void, Record<IState>, undefined, AnyAction>;
declare const selectAllIconClickWrapperThunk: selectAllIconClickWrapperThunkType;
export default selectAllIconClickWrapperThunk;
