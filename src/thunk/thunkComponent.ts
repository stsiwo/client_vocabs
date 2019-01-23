import { INormalizedState } from "../state/type"; 
import { IActionCreatorBaseType } from '../actions/index';
import { AnyAction, compose } from 'redux';
import { ThunkAction } from 'redux-thunk';

/*****************************************************************************
 * thunk component type
 * thunk component: this is new concept i introduced. often i find myself to be better to separate thunk function rather than mixing all logic into one thunk function.
 * this thunk component facilitate separation of concenrn, avoid duplication of same codes, and so on
 * use this like combining components together to meet specific use case or functionality. for example, deletion of word feature requires not only deleting words but also ... later lol 
 ******************************************************************************/
//export interface ThunkComponentType<T extends any{}> {
  //(...args: T): ThunkAction<void, INormalizedState, undefined, AnyAction>
//}

/*******************************************************************************
 * when define type of generic function, please do following:
 * type MyType<T extends any[]> = (...) => void;
 *
 * related error TS2315: Type 'ThunkComponentWrapperType' is not generic.
 *
 * on the other hand, if you want to define type directly with function definition
 * you have to do in the opposite way like below:
 * const myFunc = <T extends any[]>(arg: T): T => arg; 
 *
 *******************************************************************************/
//export type ThunkComponentType<T extends any[] = any[]> = (...args: T) => ThunkAction<void, INormalizedState, undefined, AnyAction>;

/*******************************************************************************
 * type of function returned by ThunkComponentWrapper
 *******************************************************************************/
export type ThunkComponentType = ( ...args: any[] ) => ThunkAction<void, INormalizedState, undefined, AnyAction>; 

//export interface ThunkComponentWrapperType<T extends any{}> {
  //( next: ThunkComponentType<T> ): ThunkComponentType<T>;
//}

//export type ThunkComponentWrapperType<T extends any[] = any[]> = ( next: ThunkComponentType<T> ) => ThunkComponentType<T>; 

export type ThunkComponentWrapperType = ( next: ThunkComponentType ) => ThunkComponentType;

export type MainThunkComponentType = ThunkComponentType;

export type MainActionComponentType = IActionCreatorBaseType;

//const thunkArg = <T extends any[] = any[]>( ...args: T ): ThunkAction<void, INormalizedState, undefined, AnyAction> => ( dispatch, getState ) => {} ;  

// type of below function
//type applyThunkComponentsType<T extends any[] = any[]> = ( ...tcs: ThunkComponentType<T>[] ) => ThunkAction<void, INormalizedState, undefined, AnyAction>; 

// compose a list of thunk component and return thunk action composed those thunk component
//const applyThunkComponents = <T extends any[] = any[]>( ...tcs: ThunkComponentWrapperType<T>[] ): ThunkAction<void, INormalizedState, undefined, AnyAction> => compose<>( ...tcs )(thunkArg);
type applyThunkConditionsType = ( ...tcw: ThunkComponentWrapperType[] ) => ( mainThunkComponent: MainThunkComponentType | MainActionComponentType ) => ThunkComponentType; 

/*******************************************************************************
 * use apply method when you have an array of arguments and assign each element as input of another function:
 * function(...args) {
 *  anotherFunction.apply(void 0, args);
 *  // this function receive args like anotherFunction( args[0], args[1], args[2], ...)
 * }
 *******************************************************************************/
const applyThunkConditions: applyThunkConditionsType = ( ...tcw  ) => ( mainThunkComponent ) => {
  return compose.apply(void 0, tcw )( mainThunkComponent ); 
}

export default applyThunkConditions;


