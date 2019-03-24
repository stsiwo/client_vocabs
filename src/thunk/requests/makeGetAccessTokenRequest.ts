import * as qs from 'query-string';
import '../../env';

const makeGetAccessTokenRequest: ( input: object ) => Request = ( input ) => {
  return new Request(`${ process.env.VOCAB_API_URL }/oauth/token`, {
    method: 'POST',
    body: qs.stringify(input), 
    mode: "cors",
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
}
export default makeGetAccessTokenRequest;

