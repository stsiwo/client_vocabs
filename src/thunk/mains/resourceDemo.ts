import { MainThunkType } from '../thunkComponent';
import myFetch from '../asyncs/myFetch';
import makeResourceRequest from '../requests/resourceRequest';

/**
 * main thunk: fetch initial state  
 *
 * 
 *
 **/

const resourceDemoMainThunk: MainThunkType = ( ...args ) => async ( dispatch, getState ) => {

  const request = makeResourceRequest();

  const results = await myFetch(request);

  console.log(results);

}
export default resourceDemoMainThunk;












