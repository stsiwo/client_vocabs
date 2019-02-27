import { ThunkMiddlewareType } from '../thunkComponent';
import { toggleDefineWarningModalActionCreator } from '../../actions/index';


/**
 * thunk middleware:
 * check word form error state 
 *  - if true, cancel main thunk or main action creator 
 *  - if false, pass to next middleware or main thunk  or main action creator
 **/

const checkWordFormErrorThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => ( dispatch, getState ) => {

  if (getState().get('wordFormError')) {
    // since word form has errors cancel dispatch main thunk or action creator
    // and display DefineWord Warning modal
    dispatch(toggleDefineWarningModalActionCreator(true));
  } else {
    dispatch<any>(next(...args)); 
  }

}
export default checkWordFormErrorThunkMiddleware;





