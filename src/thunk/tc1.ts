import { ThunkMiddlewareType } from './thunkComponent';


/**
 * thunk middleware base example: use this as template
 **/

const tc1ThunkComponentWrapper: ThunkMiddlewareType = ( next ) => ( ...args ) => ( dispatch, getState ) => {

  if (getState().get('ui').get('isSearchWordModalOpen')) {
    console.log("since isSearchWordModalOpen is true, cancel the main thunk here");
  } else {
    dispatch<any>(next(...args)); 
  }

}
export default tc1ThunkComponentWrapper;






