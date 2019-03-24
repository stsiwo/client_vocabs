import { AnyAction } from 'redux';
import { IState } from "../state/type";
import { ThunkAction } from 'redux-thunk';
import { ArrayHelpers } from 'formik';
/**
 * this thunk for creating new def form when user click new icon
 **/
export declare type removeDefFormThunkType = (arrayHelpers: ArrayHelpers, wordIndex: number, defIndex: number) => ThunkAction<void, IState, undefined, AnyAction>;
declare const removeDefFormThunk: removeDefFormThunkType;
export default removeDefFormThunk;
