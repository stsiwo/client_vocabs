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

  const request = makeLoginFormRequest<IRequestContent>(testInput);

  const results = await myFetch(request);

  console.log(results);

  sessionStorage.setItem("access_token", results.access_token);
  sessionStorage.setItem("refresh_token", results.refresh_token);

  //cookie.set("access_token", results.access_token, { 
    //path: "http://localhost:3000/",
    //maxAge: results.expires_in,
    //httpOnly: true  
  //});
  
  //cookie.set("refresh_token", results.refresh_token, { 
    //path: "http://localhost:3000/",
    //httpOnly: true  
  //});

}
export default loginFormSubmittionMainThunk;












