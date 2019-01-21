import { INormalizedState } from "../state/type"; 
import { AnyAction, compose } from 'redux';
import { ThunkAction } from 'redux-thunk';

/*****************************************************************************
 * thunk component type
 * thunk component: this is new concept i introduced. often i find myself to be better to separate thunk function rather than mixing all logic into one thunk function.
 * this thunk component facilitate separation of concenrn, avoid duplication of same codes, and so on
 * use this like combining components together to meet specific use case or functionality. for example, deletion of word feature requires not only deleting words but also ... later lol 
 ******************************************************************************/
export type ThunkComponentType = <T extends any[]>( next: ThunkComponent ) => ( ...args: T ) => ThunkAction<void, INormalizedState, undefined, AnyAction>;

//  this function is necessary to make thunkComponents return ThunkAction type 
//  see my note more defail
const thunkArg: ( ...args: any[] ) => ThunkAction<void, INormalizedState, undefined, AnyAction> = ( ...args ) => ( dispatch, getState ) => {} ;  

// type of below function
type ThunkComponentsType = ( ...tcs: ThunkComponent[] ) => ThunkAction<void, INormalizedState, undefined, AnyAction>; 

// compose a list of thunk component and return thunk action composed those thunk component
const thunkComponents: ThunkComponentsType = ( ...tcs ) => compose( ...tcs )(thunkArg);

export default thunkComponents;


