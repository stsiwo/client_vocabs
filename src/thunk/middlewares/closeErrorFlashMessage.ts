import { ThunkMiddlewareType } from '../thunkComponent';
import { toggleErrorFlashMessageActionCreator } from '../../actions/index';


/**
 * thunk middleware:
 *   close isErrorFlashMessageOpen state if opened 
 **/

const closeErrorFlashMessageThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => ( dispatch, getState ) => {

  if (getState().getIn([ 'ui', 'isErrorFlashMessageOpen' ])) {
    dispatch(toggleErrorFlashMessageActionCreator(false));
  } else {
    dispatch<any>(next(...args)); 
  }

  // send next middleware or main thunk
  dispatch<any>(next(...args)); 

}
export default closeErrorFlashMessageThunkMiddleware;






