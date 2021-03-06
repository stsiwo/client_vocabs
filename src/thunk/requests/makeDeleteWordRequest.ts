import * as qs from 'query-string';
import { getAccessTokenSession } from '../../util/sessionStorage';


const makeDeleteWordRequest: <I extends object = {}>( input?: I ) => Request = ( input ) => {
  const accessToken = getAccessTokenSession(); 
  return new Request(`${ process.env.VOCAB_API_URL }/word`, {
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



