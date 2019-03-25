import { getAccessTokenSession, getUserNameSession } from '../../util/sessionStorage';
import { IWord } from '../../domains/word';
import getVocabsApiUrl from '../../util/getVocabsApiUrl';

const makeDestroyImagesRequest: ( input: IWord[] ) => any = ( input ) => {

  // login info
  const accessToken = getAccessTokenSession(); 
  const username = getUserNameSession(); 
  const api_url = getVocabsApiUrl();

  return {
    url: `${ api_url }/user/${ username }/image`, 
    method: 'DELETE',
    // be sure property is "data" not "body"
    data: JSON.stringify(input), 
    mode: "cors",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ accessToken }`
    }
  };
}
export default makeDestroyImagesRequest;



