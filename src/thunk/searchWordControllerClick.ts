import { AnyAction } from 'redux';
import { IState } from "../state/type"; 
import { toggleSearchWordModalActionCreator, changeDisplayedWordListActionCreator } from '../actions/index';
import { ThunkAction } from 'redux-thunk';
import { Record } from 'immutable';


/**
 * this thunk for toggle SearchWordModal and also change displayed wordList to sorted wordList (not searchedWordList) 
 * ( often need to invoke multiple actions so make this as thunk
 **/
export type searchWordControllerClickThunkType = () => ThunkAction<void, Record<IState>, undefined, AnyAction>;

const searchWordControllerClickThunk: searchWordControllerClickThunkType = (  ) => ( dispatch, getState ) => {
  // get sortedWordList state to assign to displayedWordList
  const sortedWordList = getState().get('sortedWordList');
  const isSearchWordModalOpen = getState().get('ui').get('isSearchWordModalOpen');

  // if isSearchWordModalOpen is true, need to close it and also change displayed wordList to sortedWordList
  if ( isSearchWordModalOpen ) {
    // dispatch changeDisplayedWordListActionCreator with sortedWordList values
    dispatch(changeDisplayedWordListActionCreator(sortedWordList));
  } 
  // dispatch toggleSearchWordModalActionCreator with false
  dispatch(toggleSearchWordModalActionCreator(!isSearchWordModalOpen));
}
export default searchWordControllerClickThunk;


