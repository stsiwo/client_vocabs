import { ThunkMiddlewareType } from '../thunkComponent';
import { bulkUpdateWordActionCreator } from '../../actions/index';

/**
 * update words in remote 
 *
 * - 
 *
 * @param { IWord[] } - args[0] : words to be updated 
 *  
 **/
const updateWordsThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => async ( dispatch, getState ) => {

  // dispatch bulkUpdateWordActionCreator 
  dispatch(bulkUpdateWordActionCreator(args[0]));

  // call next thunk with result  
  dispatch<any>(next(...args)); 

}
export default updateWordsThunkMiddleware;


