import { MainThunkType } from '../thunkComponent';
import { normalizeWords } from '../../state/index';
import initialWordFetchAsync from '../asyncs/initialWordFetch';
import { addNewWordActionCreator, startInitialWordsFetchRequestActionCreator, finishInitialWordsFetchRequestActionCreator } from '../../actions/index';
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

    // if successed and received, normalize those data to match entities in redux state
    console.log("start normalize words");
    const normalizedState = normalizeWords(initialStateData); 

    // then call bulk word update action with those normalized data to assign those to entities (words and defs) in redux state
    console.log("start dispatch add new Word action");
    dispatch<any>(addNewWordActionCreator(normalizedState.words, normalizedState.defs));
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










