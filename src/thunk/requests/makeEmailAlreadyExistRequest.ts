import '../../env';
const makeEmailAlreadyExistRequest: ( input: string ) => Request = ( input ) => {
  return new Request(`${ process.env.VOCAB_API_URL }/user/email?email=${ input }`, {
    method: 'GET',
  });
}
export default makeEmailAlreadyExistRequest;



