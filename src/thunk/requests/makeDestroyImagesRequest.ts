import { getAccessTokenSession, getUserNameSession } from '../../util/sessionStorage';
import { IWord } from '../../domains/word';
//import makeWordsUpsertFormData from './formdata/makeWordsUpsertFormData'; 

const makeDestroyImagesRequest: ( input: IWord[] ) => any = ( input ) => {

  // login info
  const accessToken = getAccessTokenSession(); 
  const username = getUserNameSession(); 

  console.log(input);

  return {
    url: `${ process.env.VOCAB_API_URL }/user/${ username }/image`, 
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



