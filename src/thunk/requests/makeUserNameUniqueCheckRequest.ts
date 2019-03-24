const makeUserNameUniqueCheckRequest: ( input: string ) => Request = ( input ) => {
  return new Request(`${ process.env.VOCAB_API_URL }/user/name?name=${ input }`, {
    method: 'GET',
    mode: "cors",
    headers: {
    }
  });
}
export default makeUserNameUniqueCheckRequest;


