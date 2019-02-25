import { MainThunkType } from '../thunkComponent';
import myFetch from '../asyncs/myFetch';
import makeResourceRequest from '../requests/resourceRequest';
import { bulkUpdateWordActionCreator, startInitialWordsFetchRequestActionCreator, finishInitialWordsFetchRequestActionCreator } from '../../actions/index';

/**
 * main thunk: fetch initial state  
 *
 * 
 *
 **/

const resourceDemoMainThunk: MainThunkType = ( ...args ) => async ( dispatch, getState ) => {

  const request = makeResourceRequest();

  const data = await myFetch(request);

  console.log(data);

  dispatch(startInitialWordsFetchRequestActionCreator());

  dispatch<any>(bulkUpdateWordActionCreator(data.words));

  dispatch(finishInitialWordsFetchRequestActionCreator());

}
export default resourceDemoMainThunk;












