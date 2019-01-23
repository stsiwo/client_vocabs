import { toggleWordFormErrorActionCreator } from '../actions/index';
import { MainThunkType } from './thunkComponent';


/**
 * main thunk base example: use this as template
 **/

const mainThunkComponentWrapper: MainThunkType = ( arg ) => ( dispatch, getState ) => {
  dispatch(toggleWordFormErrorActionCreator(true));
}
export default mainThunkComponentWrapper;







