import * as qs from 'query-string';

const makeGetAccessTokenRequest: ( input: object ) => Request = ( input ) => {
  return new Request("http://localhost:3000/oauth/token", {
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
export default makeGetAccessTokenRequest;

