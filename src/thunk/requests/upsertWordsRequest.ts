import { getAccessTokenSession, getUserNameSession } from '../../util/sessionStorage';
import makeWordsUpsertFormData from './formdata/makeWordsUpsertFormData'; 

const makeUpsertWordsRequest: ( input: any ) => Request = ( input ) => {

  // login info
  const accessToken = getAccessTokenSession(); 
  const username = getUserNameSession(); 

  // form data
  const formData: FormData = makeWordsUpsertFormData(input);
  console.log(formData);

  return new Request(`http://localhost:3000/user/${ username }/word`, {
    method: 'POST',
    body: formData, 
    mode: "cors",
    headers: {
      //'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW----',
      'Authorization': `Bearer ${ accessToken }`
    }
  });
}
export default makeUpsertWordsRequest;



