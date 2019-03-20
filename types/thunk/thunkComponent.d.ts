import { IState } from "../state/type";
import { IActionCreatorBaseType } from '../actions/index';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Record } from 'immutable';
/*****************************************************************************
 * thunk middleware
 * this is new concept i introduced. often i find myself to be better to separate thunk function rather than mixing all logic into one thunk function.
 * this thunk component facilitate separation of concenrn, avoid duplication of same codes, and so on
 * use this like combining components together to meet specific use case or functionality. for example, deletion of word feature requires not only deleting words but also ... later lol
 ******************************************************************************/
/*******************************************************************************
 * when define type of generic function, please do following:
 * type MyType<T extends any[]> = (...) => void;
 *
 * related error TS2315: Type 'ThunkMiddlewareType' is not generic.
 *
 * on the other hand, if you want to define type directly with function definition
 * you have to do in the opposite way like below:
 * const myFunc = <T extends any[]>(arg: T): T => arg;
 *
 *******************************************************************************/
/*******************************************************************************
 * type of function returned by ThunkComponentWrapper
 *******************************************************************************/
export declare type ThunkType = (...args: any[]) => ThunkAction<void, Record<IState>, undefined, AnyAction>;
export declare type ThunkMiddlewareType = (next: ThunkType) => ThunkType;
export declare type MainThunkType = ThunkType;
export declare type MainActionType = IActionCreatorBaseType;
declare type applyThunkMiddlewareType = (...tcw: ThunkMiddlewareType[]) => (mainThunkComponent: MainThunkType | MainActionType) => ThunkType;
/*******************************************************************************
 * use apply method when you have an array of arguments and assign each element as input of another function:
 * function(...args) {
 *  anotherFunction.apply(void 0, args);
 *  // this function receive args like anotherFunction( args[0], args[1], args[2], ...)
 * }
 *******************************************************************************/
declare const applyThunkMiddleware: applyThunkMiddlewareType;
export default applyThunkMiddleware;
