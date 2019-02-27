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

const initialWordsFetchMainThunk: MainThunkType = ( ...args ) => async ( dispatch, getWords ) => {

  // make request for initial data
  const request = makeGetWordsOfUserRequest();

  
  dispatch(startInitialWordsFetchRequestActionCreator());

  const data = await myFetch(request);

  dispatch<any>(bulkUpdateWordActionCreator(data.words));

  dispatch(finishInitialWordsFetchRequestActionCreator());

}
export default initialWordsFetchMainThunk;










