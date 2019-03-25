import getVocabsApiUrl from '../../util/getVocabsApiUrl';

const makeUserNameUniqueCheckRequest: ( input: string ) => Request = ( input ) => {

  const api_url = getVocabsApiUrl();

  return new Request(`${ api_url }/user/name?name=${ input }`, {
    method: 'GET',
    mode: "cors",
    headers: {
    }
  });
}
export default makeUserNameUniqueCheckRequest;


