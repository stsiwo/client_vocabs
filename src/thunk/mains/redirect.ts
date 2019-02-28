import { MainThunkType } from '../thunkComponent';
import { history } from '../../routeHistory';

/**
 * main thunk: redirect to another page 
 *
 * @param { string } args[0] - path 
 **/

const redirectMainThunk: MainThunkType = ( ...args ) => ( dispatch, getState ) => {

  const nextPath = args[0];

  history.push(nextPath);
}
export default redirectMainThunk;








