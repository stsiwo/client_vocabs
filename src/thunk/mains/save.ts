import { MainThunkType } from '../thunkComponent';
import saveAsync from '../asyncs/save';

/**
 * main thunk: save to another page (path: arg) 
 **/

const saveMainThunk: MainThunkType = ( ...args ) => async ( dispatch, getState ) => {
  // async save 
  // current idea is use PUT bulk update or create operation for newly created or updated words
  //
  // call put request to server, then get response of updated words 
  // args must include this.props.values which is from formik
  const updatedWords = await saveAsync(args[0]);

  // test: replace this to dispatch action to udpate entities when implemnetation
  console.log(updatedWords);
}
export default saveMainThunk;

