import * as qs from 'query-string';
import { getAccessTokenSession } from '../../util/sessionStorage';
import getVocabsApiUrl from '../../util/getVocabsApiUrl';


const makeDeleteWordRequest: <I extends object = {}>( input?: I ) => Request = ( input ) => {

  const accessToken = getAccessTokenSession(); 
  const api_url = getVocabsApiUrl();

  return new Request(`${ api_url }/word`, {
    method: 'DELETE',
    body: qs.stringify(input, { arrayFormat: 'index' }), 
    mode: "cors",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${ accessToken }`
    }
  });
}
export default makeDeleteWordRequest;



