import { getAccessTokenSession, getUserNameSession } from '../../util/sessionStorage';
import getVocabsApiUrl from '../../util/getVocabsApiUrl';

const makeUpsertWordsRequest: ( input: any ) => Request = ( input ) => {

  // login info
  const accessToken = getAccessTokenSession(); 
  const username = getUserNameSession(); 
  const api_url = getVocabsApiUrl();

  // form data
  //const formData: FormData = makeWordsUpsertFormData(input);

  return new Request(`${ api_url }/user/${ username }/word`, {
    method: 'POST',
    body: JSON.stringify(input), 
    mode: "cors",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ accessToken }`
    }
  });
}
export default makeUpsertWordsRequest;



