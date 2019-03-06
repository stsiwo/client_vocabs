/**
 * don't put declaration of accessToken and username variables outside function. 
 *  - it sometimes returns null even though you define sessionStorage
 **/
const makeGetWordsOfUserRequest: <I extends object = {}>( input?: I ) => Request = ( input ) => {

  const accessToken = sessionStorage.getItem('access_token');
  const username = sessionStorage.getItem('username');

  return new Request(`http://localhost:3000/user/${ username }/word`, {
    method: 'GET',
    mode: "cors",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${ accessToken }`
    }
  });
}
export default makeGetWordsOfUserRequest;


