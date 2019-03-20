import { AnyAction } from 'redux';
import { IState } from "../state/type";
import { ThunkAction } from 'redux-thunk';
import { Record } from 'immutable';
/**
 *
 **/
export declare type resetSortFilterButtonClickThunkType = () => ThunkAction<void, Record<IState>, undefined, AnyAction>;
declare const resetSortFilterButtonClickThunk: resetSortFilterButtonClickThunkType;
export default resetSortFilterButtonClickThunk;
