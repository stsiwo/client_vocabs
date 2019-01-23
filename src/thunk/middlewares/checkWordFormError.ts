import { ThunkMiddlewareType } from '../thunkComponent';


/**
 * thunk middleware:
 * check word form error state 
 *  - if true, cancel main thunk or main action creator 
 *  - if false, pass to next middleware or main thunk  or main action creator
 **/

const checkWordFormErrorThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => ( dispatch, getState ) => {

  if (getState().wordFormError) {
    // since word form has errors cancel dispatch main thunk or action creator
  } else {
    dispatch<any>(next(...args)); 
  }

}
export default checkWordFormErrorThunkMiddleware;





