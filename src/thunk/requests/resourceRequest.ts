const accessToken = sessionStorage.getItem('access_token');

const makeResourceRequest: <I extends object = {}>( input?: I ) => Request = ( input ) => {
  return new Request("http://localhost:3000/user", {
    method: 'GET',
    credentials: 'include',
    mode: "cors",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${ accessToken }`
    }
  });
}
export default makeResourceRequest;


