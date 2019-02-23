import { MainThunkType } from '../thunkComponent';
import myFetch from '../asyncs/myFetch';
import makeSignUpFormRequest from '../requests/signUpForm';
import { ISignUpUserForm } from '../../Hoc/withSignUpForm';

/**
 * main thunk: fetch initial state  
 *
 * 
 *
 **/

const signUpFormSubmittionMainThunk: MainThunkType = ( ...args ) => async ( dispatch, getState ) => {

  const testInput: ISignUpUserForm = {
    name: "satoshi",
    email: "sts@gmail.com",
    password: "password",
    confirm: "password"
  }

  const request = makeSignUpFormRequest<ISignUpUserForm>(testInput);

  const results = await myFetch(request);

  console.log(results);
  
  

}
export default signUpFormSubmittionMainThunk;











