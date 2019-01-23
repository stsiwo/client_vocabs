import { MainThunkType } from '../thunkComponent';
import history from '../../routeHistory'; 

/**
 * main thunk: redirect to another page (path: arg) 
 **/

const redirectMainThunk: MainThunkType = ( ...args ) => ( dispatch, getState ) => history.push(args[0]); 
export default redirectMainThunk;








