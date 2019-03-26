import getVocabsApiUrl from '../../util/getVocabsApiUrl';

/**
 * is that safe to fetch user sensitive info without authentication and GET method
 *  - it is ok because server side set 'Access-Control-Allow-Origin' to allow only this client can interact with the back end api 
 **/
const makeEmailAlreadyExistRequest: ( input: string ) => Request = ( input ) => {

  const api_url = getVocabsApiUrl();

  return new Request(`${ api_url }/user/email?email=${ input }`, {
    method: 'GET',
  });
}
export default makeEmailAlreadyExistRequest;



