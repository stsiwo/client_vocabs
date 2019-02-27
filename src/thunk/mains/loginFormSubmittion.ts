import { MainThunkType } from '../thunkComponent';
import myFetch from '../asyncs/myFetch';
import makeLoginFormRequest from '../requests/loginForm';
//import cookie from '../../cookie';

/**
 * main thunk: fetch initial state  
 *
 * 
 *
 **/
interface IRequestContent {
    username: string, 
    email: string,
    password: string,
    client_id: string,
    grant_type: string
}

const loginFormSubmittionMainThunk: MainThunkType = ( ...args ) => async ( dispatch, getState ) => {

  const testInput: IRequestContent  = {
    username: "sample_name1",
    email: "sts@gmail.com",
    password: "sample_password1",
    client_id: "sample_cid",
    grant_type: "password"
  }

  sessionStorage.setItem("username", testInput.username);

  const request = makeLoginFormRequest<IRequestContent>(testInput);

  const tokens = await myFetch(request);

  console.log(tokens);

  sessionStorage.setItem("access_token", tokens.access_token);
  sessionStorage.setItem("refresh_token", tokens.refresh_token);

  

}
export default loginFormSubmittionMainThunk;












