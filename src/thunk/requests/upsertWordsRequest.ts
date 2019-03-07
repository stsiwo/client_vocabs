import { getAccessTokenSession, getUserNameSession } from '../../util/sessionStorage';

const makeUpsertWordsRequest: <I extends object = {}>( input?: I ) => Request = ( input ) => {

  const accessToken = getAccessTokenSession(); 
  const username = getUserNameSession(); 

  return new Request(`http://localhost:3000/user/${ username }/word`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(input), 
    mode: "cors",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ accessToken }`
    }
  });
}
export default makeUpsertWordsRequest;



