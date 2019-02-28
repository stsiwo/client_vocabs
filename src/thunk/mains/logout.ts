import { MainThunkType } from '../thunkComponent';
import myFetch from '../asyncs/myFetch';
import makeRevokeTokenRequest from '../requests/makeRevokeTokenRequest';
import { history } from '../../routeHistory';
import { toggleLoginActionCreator } from '../../actions/index';

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
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("refresh_token");
  sessionStorage.removeItem("username");

  // to change state 
  dispatch(toggleLoginActionCreator(false));

  // redirect to home
  history.push("/");

}
export default logoutMainThunk;













