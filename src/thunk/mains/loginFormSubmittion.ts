import { MainThunkType } from '../thunkComponent';
import myFetch from '../asyncs/myFetch';
import makeLoginFormRequest from '../requests/loginForm';

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
  
  

}
export default loginFormSubmittionMainThunk;












