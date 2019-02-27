import { MainThunkType } from '../thunkComponent';

/**
 * main thunk: redirect to another page 
 *
 * @param { history.push } args[0] - history.push function
 * @param { string } args[1] - path
 **/

const redirectMainThunk: MainThunkType = ( ...args ) => ( dispatch, getState ) => {
  const historyPush: ( path: string ) => void = args[0];
  const path = args[1];

  historyPush(path);
}
export default redirectMainThunk;








