import * as qs from 'query-string';
import getVocabsApiUrl from '../../util/getVocabsApiUrl';

const makeGetAccessTokenRequest: ( input: object ) => Request = ( input ) => {

  const api_url = getVocabsApiUrl();

  return new Request(`${ api_url }/oauth/token`, {
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

