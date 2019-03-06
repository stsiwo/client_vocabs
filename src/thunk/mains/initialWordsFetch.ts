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

  if (data.isOk) {
    dispatch<any>(bulkUpdateWordActionCreator(data.words));
  } else {
    console.log("initial fetch failed");
    // should display error message as flash message
    // like something wrong, please try later or something...
    //   - need to create FlashMessage Component 
    //   #NEED_IMPLEMENT
  }


  dispatch(finishInitialWordsFetchRequestActionCreator());

}
export default initialWordsFetchMainThunk;










