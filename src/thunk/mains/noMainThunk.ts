import { MainThunkType } from '../thunkComponent';

/**
 * main thunk: empty main thunk 
 *  - use when you don't need any main thunk but only middlewares
 **/

const noMainThunk: MainThunkType = ( ...args ) => ( dispatch, getState ) => {

}
export default noMainThunk;









