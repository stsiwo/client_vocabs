import * as qs from 'query-string';

const accessToken = sessionStorage.getItem('access_token');

const makeDeleteWordRequest: <I extends object = {}>( input?: I ) => Request = ( input ) => {
  return new Request(`http://localhost:3000/word`, {
    method: 'DELETE',
    credentials: 'include',
    body: qs.stringify(input, { arrayFormat: 'index' }), 
    mode: "cors",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${ accessToken }`
    }
  });
}
export default makeDeleteWordRequest;



