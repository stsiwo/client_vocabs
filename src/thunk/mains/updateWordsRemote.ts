import { MainThunkType } from '../thunkComponent';
import makeUpsertWordsRequest from '../requests/upsertWordsRequest';
import myFetch from '../asyncs/myFetch';

/**
 * main thunk: update (or create) words (entities) in redux state  
 *
 * @param {IWord[]} args[0] - words from body of response  
 *
 **/

const updateWordsRemoteMainThunk: MainThunkType = ( ...args ) => async ( dispatch, getState ) => {

  const request = makeUpsertWordsRequest(args[0]);

  await myFetch(request); 

}
export default updateWordsRemoteMainThunk;









