import * as qs from 'query-string';

const makeSignUpFormRequest: <I extends object>( input?: I ) => Request = ( input ) => {
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
