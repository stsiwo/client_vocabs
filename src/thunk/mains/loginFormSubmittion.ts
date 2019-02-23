import { MainThunkType } from '../thunkComponent';
import myFetch from '../asyncs/myFetch';
import makeLoginFormRequest from '../requests/loginForm';
import { ILoginUserForm } from '../../Hoc/withLoginForm';

/**
 * main thunk: fetch initial state  
 *
 * 
 *
 **/

const loginFormSubmittionMainThunk: MainThunkType = ( ...args ) => async ( dispatch, getState ) => {

  const testInput: ILoginUserForm = {
    name: "satoshi",
    email: "sts@gmail.com",
    password: "password"
  }

  const request = makeLoginFormRequest<ILoginUserForm>(testInput);

  const results = await myFetch(request);

  console.log(results);
  
  

}
export default loginFormSubmittionMainThunk;












