import * as qs from 'query-string';
import { ISignUpUserForm } from '../../Hoc/withSignUpForm';

const makeSignUpFormRequest: ( input: ISignUpUserForm ) => Request = ( input ) => {
  return new Request("http://localhost:3000/user", {
    method: 'POST',
    body: qs.stringify(input), 
    credentials: 'include',
    mode: "cors",
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
}
export default makeSignUpFormRequest;
