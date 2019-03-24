import * as qs from 'query-string';
import { getRefreshTokenSession } from '../../util/sessionStorage';

const makeRevokeTokenRequest: <I extends object = {}>( input?: I ) => Request = ( input ) => {
  const refreshToken = getRefreshTokenSession(); 
  return new Request(`${ process.env.VOCAB_API_URL }/oauth/revoke`, {
    method: 'POST',
    mode: "cors",
    body: qs.stringify({ refreshToken: refreshToken }), 
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
}
export default makeRevokeTokenRequest;



