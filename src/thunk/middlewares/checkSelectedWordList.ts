import { ThunkMiddlewareType } from '../thunkComponent';
import { toggleSelectWarningModalActionCreator } from '../../actions/index';


/**
 * thunk middleware:
 * check word form error state 
 *  - if true, cancel main thunk or main action creator 
 *  - if false, pass to next middleware or main thunk  or main action creator
 **/

const checkSelectedWordListThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => ( dispatch, getState ) => {

  if (getState().get('selectedWordList').isEmpty()) {
    // since no word is selected  
    // and display select warning modal 
    dispatch(toggleSelectWarningModalActionCreator(true));
  } else {
    dispatch<any>(next(...args)); 
  }

}
export default checkSelectedWordListThunkMiddleware;






