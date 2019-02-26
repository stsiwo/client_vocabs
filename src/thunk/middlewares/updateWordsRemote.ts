import { ThunkMiddlewareType } from '../thunkComponent';

/**
 * update words in remote 
 *
 * - 
 *
 * @param { IWord[] } - args[0] : words to be updated 
 *  
 **/
const updateWordsRemoteThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => async ( dispatch, getState ) => {

    

  // call next thunk with result  
  dispatch<any>(next(...args)); 

}
export default updateWordsRemoteThunkMiddleware;


