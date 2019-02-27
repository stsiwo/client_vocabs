const accessToken = sessionStorage.getItem('access_token');
const username = sessionStorage.getItem('username');

const makeGetWordsOfUserRequest: <I extends object = {}>( input?: I ) => Request = ( input ) => {
  return new Request(`http://localhost:3000/user/${ username }/word`, {
    method: 'GET',
    credentials: 'include',
    mode: "cors",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${ accessToken }`
    }
  });
}
export default makeGetWordsOfUserRequest;


