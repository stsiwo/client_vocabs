import { AnyAction } from 'redux';
import { INormalizedState } from "../state/type"; 
import { toggleSearchWordModalAction, changeDisplayedWordListAction } from '../actions/index';
import { ThunkAction } from 'redux-thunk';


/**
 * this thunk for close SearchWordModal and also change displayed wordList to sorted wordList (not searchedWordList) 
 * ( often need to invoke multiple actions so make this as thunk
 **/
type closeSearchWordModalWrapperThunkType = () => ThunkAction<void, INormalizedState, undefined, AnyAction>;

const closeSearchWordModalWrapperThunk: closeSearchWordModalWrapperThunkType = (  ) => ( dispatch, getState ) => {
  // get sortedWordList state to assign to displayedWordList
  const { sortedWordList } = getState();

  // dispatch toggleSearchWordModalAction with false
  dispatch(toggleSearchWordModalAction(false));
  // dispatch changeDisplayedWordListAction with sortedWordList values
  dispatch(changeDisplayedWordListAction(sortedWordList));

}
export default closeSearchWordModalWrapperThunk;


