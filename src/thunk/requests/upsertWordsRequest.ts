import { getAccessTokenSession, getUserNameSession } from '../../util/sessionStorage';
//import makeWordsUpsertFormData from './formdata/makeWordsUpsertFormData'; 

const makeUpsertWordsRequest: ( input: any ) => Request = ( input ) => {

  // login info
  const accessToken = getAccessTokenSession(); 
  const username = getUserNameSession(); 

  // form data
  //const formData: FormData = makeWordsUpsertFormData(input);

  return new Request(`http://localhost:3000/user/${ username }/word`, {
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



