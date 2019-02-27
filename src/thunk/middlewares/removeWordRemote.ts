import { ThunkMiddlewareType } from '../thunkComponent';
import myFetch from '../asyncs/myFetch';
import makeDeleteWordRequest from '../requests/makeDeleteWordRequest';


/**
 * remove word middlware thunk
 *
 * - see detail thunk/removeWordControllerClick 
 **/
const removeWordThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => async ( dispatch, getState ) => {

  // get selected words to be deleted
  const wordListToDelete = getState().get('selectedWordList');

  // make request
  const request = makeDeleteWordRequest(wordListToDelete);

  // async to fetch delete request 
  await myFetch(request); 


  // send next middleware or main thunk
  dispatch<any>(next(...args)); 

}
export default removeWordThunkMiddleware;




