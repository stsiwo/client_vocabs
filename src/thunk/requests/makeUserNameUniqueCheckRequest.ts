const makeUserNameUniqueCheckRequest: ( input: string ) => Request = ( input ) => {
  return new Request(`http://localhost:3000/user?userName=${ input }`, {
    method: 'GET',
    credentials: 'include',
    mode: "cors",
    headers: {
    }
  });
}
export default makeUserNameUniqueCheckRequest;


