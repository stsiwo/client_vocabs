import { getAccessTokenSession, getUserNameSession } from '../../util/sessionStorage';
/**
 * don't put declaration of accessToken and username variables outside function. 
 *  - it sometimes returns null even though you define sessionStorage
 **/
const makeGetWordsOfUserRequest: <I extends object = {}>( input?: I ) => Request = ( input ) => {

  const accessToken = getAccessTokenSession();
  const username = getUserNameSession(); 

  return new Request(`${ process.env.VOCAB_API_URL }/user/${ username }/word`, {
    method: 'GET',
    mode: "cors",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${ accessToken }`
    }
  });
}
export default makeGetWordsOfUserRequest;


