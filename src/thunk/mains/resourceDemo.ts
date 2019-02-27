import { MainThunkType } from '../thunkComponent';
import myFetch from '../asyncs/myFetch';
import makeGetWordsOfUserRequest from '../requests/makeGetWordsOfUserRequest';
import { bulkUpdateWordActionCreator, startInitialWordsFetchRequestActionCreator, finishInitialWordsFetchRequestActionCreator } from '../../actions/index';

/**
 * main thunk: fetch initial state  
 *
 * 
 *
 **/

const resourceDemoMainThunk: MainThunkType = ( ...args ) => async ( dispatch, getState ) => {

  const request = makeGetWordsOfUserRequest();

  dispatch(startInitialWordsFetchRequestActionCreator());

  const data = await myFetch(request);

  dispatch<any>(bulkUpdateWordActionCreator(data.words));

  dispatch(finishInitialWordsFetchRequestActionCreator());

}
export default resourceDemoMainThunk;












