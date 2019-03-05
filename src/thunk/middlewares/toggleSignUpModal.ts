import { ThunkMiddlewareType } from '../thunkComponent';
import { toggleSignUpModalActionCreator } from '../../actions/index';

/**
 * toggle SignUp modal (this might not be needed, just use the action?) 
 *
 **/
const toggleSignUpModalThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => async ( dispatch, getState ) => {

  // get isSignUpModalOpen 
  const isSignUpModalOpen = getState().getIn([ 'ui', 'isSignUpModalOpen' ])

  // dispatch the action
  dispatch(toggleSignUpModalActionCreator(!isSignUpModalOpen));

  // send next middleware or main thunk
  dispatch<any>(next(...args)); 

}
export default toggleSignUpModalThunkMiddleware;





