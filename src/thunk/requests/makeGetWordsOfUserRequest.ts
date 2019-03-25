import { getAccessTokenSession, getUserNameSession } from '../../util/sessionStorage';
import getVocabsApiUrl from '../../util/getVocabsApiUrl';
/**
 * don't put declaration of accessToken and username variables outside function. 
 *  - it sometimes returns null even though you define sessionStorage
 **/
const makeGetWordsOfUserRequest: <I extends object = {}>( input?: I ) => Request = ( input ) => {

  const accessToken = getAccessTokenSession();
  const username = getUserNameSession(); 
  const api_url = getVocabsApiUrl();

  return new Request(`${ api_url }/user/${ username }/word`, {
    method: 'GET',
    mode: "cors",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${ accessToken }`
    }
  });
}
export default makeGetWordsOfUserRequest;


