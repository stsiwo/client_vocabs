const makeEmailAlreadyExistRequest: ( input: string ) => Request = ( input ) => {
  return new Request(`http://localhost:3000/user/email?email=${ input }`, {
    method: 'GET',
  });
}
export default makeEmailAlreadyExistRequest;



