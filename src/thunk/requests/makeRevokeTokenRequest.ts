import * as qs from 'query-string';

const refreshToken = sessionStorage.getItem('refresh_token');

const makeRevokeTokenRequest: <I extends object = {}>( input?: I ) => Request = ( input ) => {
  return new Request(`http://localhost:3000/oauth/revoke`, {
    method: 'POST',
    credentials: 'include',
    mode: "cors",
    body: qs.stringify({ refreshToken: refreshToken }), 
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
}
export default makeRevokeTokenRequest;



