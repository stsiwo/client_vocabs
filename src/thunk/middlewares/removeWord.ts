import { ThunkMiddlewareType } from '../thunkComponent';
import { removeWordActionCreator } from '../../actions/index';

/**
 * remove word middlware thunk
 *
 * - see detail thunk/removeWordControllerClick 
 **/
const removeWordThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => ( dispatch, getState ) => {
  // dispatch removeWordActionCreator for each in selectedWordList
  getState().get('selectedWordList').forEach(( deleteWordId ) => dispatch(removeWordActionCreator(deleteWordId)));

  dispatch<any>(next(...args)); 

}
export default removeWordThunkMiddleware;



