import * as qs from 'query-string';
import { ISignUpUserForm } from '../../Hoc/withSignUpForm';

const makeSignUpFormRequest: ( input: ISignUpUserForm ) => Request = ( input ) => {
  return new Request(`${ process.env.VOCAB_API_URL }/user`, {
    method: 'POST',
    body: qs.stringify(input), 
    mode: "cors",
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
}
export default makeSignUpFormRequest;
