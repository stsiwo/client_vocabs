import { ThunkMiddlewareType } from '../thunkComponent';
/**
 * thunk middleware:
 * check word form error state
 *  - if true, cancel main thunk or main action creator
 *  - if false, pass to next middleware or main thunk  or main action creator
 **/
declare const checkSelectedWordListThunkMiddleware: ThunkMiddlewareType;
export default checkSelectedWordListThunkMiddleware;
