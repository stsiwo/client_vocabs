import { ThunkMiddlewareType } from '../thunkComponent';
import { toggleLoginModalActionCreator } from '../../actions/index';

/**
 * toggle Login modal (this might not be needed, just use the action?) 
 *
 **/
const toggleLoginModalThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => async ( dispatch, getState ) => {

  // get isLoginModalOpen 
  const isLoginModalOpen = getState().getIn([ 'ui', 'isLoginModalOpen' ])

  // dispatch the action
  dispatch(toggleLoginModalActionCreator(!isLoginModalOpen));

  // send next middleware or main thunk
  dispatch<any>(next(...args)); 

}
export default toggleLoginModalThunkMiddleware;






