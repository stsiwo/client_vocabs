import { AnyAction } from 'redux';
import { IState } from "../state/type";
import { ThunkAction } from 'redux-thunk';
/**
 * this thunk for creating new Word form when user click new icon
 **/
export declare type addNewWordFormThunkType = (callback: (obj: any) => void) => ThunkAction<void, IState, undefined, AnyAction>;
declare const addNewWordFormThunk: addNewWordFormThunkType;
export default addNewWordFormThunk;
