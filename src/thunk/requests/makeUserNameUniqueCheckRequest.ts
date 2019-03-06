const makeUserNameUniqueCheckRequest: ( input: string ) => Request = ( input ) => {
  return new Request(`http://localhost:3000/user/name?name=${ input }`, {
    method: 'GET',
    mode: "cors",
    headers: {
    }
  });
}
export default makeUserNameUniqueCheckRequest;


