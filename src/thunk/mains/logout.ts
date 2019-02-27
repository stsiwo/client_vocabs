import { MainThunkType } from '../thunkComponent';
import myFetch from '../asyncs/myFetch';
import makeRevokeTokenRequest from '../requests/makeRevokeTokenRequest';
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

  dispatch<any>(toggleLoginActionCreator(false));

}
export default logoutMainThunk;













