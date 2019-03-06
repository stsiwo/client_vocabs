import { ThunkMiddlewareType } from '../thunkComponent';
import makeGetAccessTokenRequest from '../requests/makeGetAccessTokenRequest';
import myFetch from '../asyncs/myFetch';
import { toggleErrorFlashMessageActionCreator } from '../../actions/index';

interface IAccessTokenRequestContent {
    username: string, 
    email: string,
    password: string,
    client_id: string,
    grant_type: string
}


/**
 * request to get access token 
 *
 * @param { ISignUpUserForm } - args[0] : user's name and password to get access token 
 *  
 **/
const getAccessTokenThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => async ( dispatch, getState ) => {

  // prep data for request
  const accessTokenForm: IAccessTokenRequestContent = {
    username: args[0].name,
    email: args[0].email,
    password: args[0].password,
    client_id: "sample_cid",
    grant_type: "password"
  };


  const request = makeGetAccessTokenRequest(accessTokenForm);

  const tokens = await myFetch(request);

  if (tokens.isOk) {
    // if success
    sessionStorage.setItem("username", accessTokenForm.username);
    sessionStorage.setItem("access_token", tokens.access_token);
    sessionStorage.setItem("refresh_token", tokens.refresh_token);

    // assign path to args[0]; this is for next "redirect" thunk
    args[0] = '/word'

    // call next thunk
    dispatch<any>(next(...args)); 
  } else {
    dispatch(toggleErrorFlashMessageActionCreator(true));
  }
}
export default getAccessTokenThunkMiddleware;




