import getVocabsApiUrl from '../../util/getVocabsApiUrl';
import * as qs from 'query-string';
import { getRefreshTokenSession } from '../../util/sessionStorage';

const makeRevokeTokenRequest: <I extends object = {}>( input?: I ) => Request = ( input ) => {
  const refreshToken = getRefreshTokenSession(); 
  const api_url = getVocabsApiUrl();

  return new Request(`${ api_url }/oauth/revoke`, {
    method: 'POST',
    mode: "cors",
    body: qs.stringify({ refreshToken: refreshToken }), 
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
}
export default makeRevokeTokenRequest;



