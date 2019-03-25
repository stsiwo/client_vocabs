import * as qs from 'query-string';
import { ISignUpUserForm } from '../../Hoc/withSignUpForm';
import getVocabsApiUrl from '../../util/getVocabsApiUrl';

const makeSignUpFormRequest: ( input: ISignUpUserForm ) => Request = ( input ) => {
  const api_url = getVocabsApiUrl();

  return new Request(`${ api_url }/user`, {
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
