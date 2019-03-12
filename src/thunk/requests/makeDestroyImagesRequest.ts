import { getAccessTokenSession, getUserNameSession } from '../../util/sessionStorage';
import { IWord } from '../../domains/word';
//import makeWordsUpsertFormData from './formdata/makeWordsUpsertFormData'; 

const makeDestroyImagesRequest: ( input: IWord[] ) => any = ( input ) => {

  // login info
  const accessToken = getAccessTokenSession(); 
  const username = getUserNameSession(); 

  return {
    url: `http://localhost:3000/user/${ username }/image`, 
    method: 'DELETE',
    body: JSON.stringify(input), 
    mode: "cors",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ accessToken }`
    }
  };
}
export default makeDestroyImagesRequest;



