import { MainThunkType } from '../thunkComponent';
import myFetch from '../asyncs/myFetch';
import makeRevokeTokenRequest from '../requests/makeRevokeTokenRequest';
import { history } from '../../routeHistory';
import { toggleLoginActionCreator } from '../../actions/index';
import { clearLoginSession } from '../../util/sessionStorage';

/**
 * main thunk: fetch initial state  
 *
 * 
 *
 **/

const logoutMainThunk: MainThunkType = ( ...args ) => async ( dispatch, getState ) => {

  const request = makeRevokeTokenRequest();
   
  await myFetch(request);

  // delete session storage
  clearLoginSession();

  // to change state 
  dispatch(toggleLoginActionCreator(false));

  // redirect to home
  history.push("/");

}
export default logoutMainThunk;













