import { AnyAction } from "redux";
import { IState } from '../state/type';
import { Record } from 'immutable';
/**********************************************
 * DON'T USE combineReducers when using immutablejs
 **********************************************/
/**
 * root Reducer
 **/
export declare const rootReducer: (state: Record<IState>, action: AnyAction) => Record<IState> & Readonly<IState>;
