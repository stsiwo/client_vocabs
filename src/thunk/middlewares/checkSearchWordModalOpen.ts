import { ThunkMiddlewareType } from '../thunkComponent';
import { toggleSearchWordModalActionCreator } from '../../actions/index';

/**
 * thunk middleware:
 * check word form error state 
 *  - if true, cancel main thunk or main action creator 
 *  - if false, pass to next middleware or main thunk  or main action creator
 **/

const checkSearchWordModalOpenThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => ( dispatch, getState ) => {

  // check search modal is opened
  if (getState().getIn([ 'ui', 'isSearchWordModalOpen' ]) === true) {
    // if open, close
    dispatch(toggleSearchWordModalActionCreator(false));
  } 
  // proceed to next middlewares or main thunk
  dispatch<any>(next(...args)); 

}
export default checkSearchWordModalOpenThunkMiddleware;







