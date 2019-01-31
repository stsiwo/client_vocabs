import { MainThunkType } from '../thunkComponent';
import initialWordFetchAsync from '../asyncs/initialWordFetch';
import { bulkUpdateWordActionCreator, startInitialWordsFetchRequestActionCreator, finishInitialWordsFetchRequestActionCreator } from '../../actions/index';
/**
 * main thunk: fetch initial state  
 *
 * 
 *
 **/

const initialStateFetchMainThunk: MainThunkType = ( ...args ) => async ( dispatch, getState ) => {

  try {
    // start fetch request
    dispatch(startInitialWordsFetchRequestActionCreator());
    // fetch initial state (words) from remote and wait until it's completed
    console.log("start asyncs (fetch");
    const initialStateData = await initialWordFetchAsync();

    // if successed and received, 

    // then call bulk word update action with those normalized data to assign those to entities (words and defs) in redux state
    console.log("start dispatch add new Word action");
    dispatch<any>(bulkUpdateWordActionCreator(initialStateData));
    // finish fetch request
    console.log("start dispatch finish request");
    dispatch(finishInitialWordsFetchRequestActionCreator());

  } catch ( reason ) {
    console.log(reason.error);
    // if error, should dispatch an action to record fetch is failed
    //  - create error state that hold error type and message in redux state
    //  - also action and caseReducer to handle those error

    // finish fetch request
    dispatch(finishInitialWordsFetchRequestActionCreator());
  }
  

}
export default initialStateFetchMainThunk;










