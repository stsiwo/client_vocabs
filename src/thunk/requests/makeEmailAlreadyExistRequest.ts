import getVocabsApiUrl from '../../util/getVocabsApiUrl';

/**
 * is that safe to fetch user sensitive info without authentication and GET method
 * #REFACTOR
 **/
const makeEmailAlreadyExistRequest: ( input: string ) => Request = ( input ) => {

  const api_url = getVocabsApiUrl();

  return new Request(`${ api_url }/user/email?email=${ input }`, {
    method: 'GET',
  });
}
export default makeEmailAlreadyExistRequest;



