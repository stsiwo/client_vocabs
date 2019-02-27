const accessToken = sessionStorage.getItem('access_token');

const makeDeleteWordRequest: <I extends object = {}>( input?: I ) => Request = ( input ) => {
  return new Request(`http://localhost:3000/word`, {
    method: 'DELETE',
    credentials: 'include',
    body: JSON.stringify(input),
    mode: "cors",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ accessToken }`
    }
  });
}
export default makeDeleteWordRequest;



