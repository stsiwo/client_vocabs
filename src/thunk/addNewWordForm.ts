import { AnyAction } from 'redux';
import { INormalizedState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import toggleSearchWordModalWrapperThunk from './toggleSearchWordModal';
const uuidv4 = require('uuid/v4');
import { getNewWord, normalizeWord } from './state/index';
import { addSelectedWordListAction } from './actions/index';

/**
 * this thunk for creating new Word form when user click new icon  
 **/
export type addNewWordFormWrapperThunkType = () => ThunkAction<void, INormalizedState, undefined, AnyAction>;

const addNewWordFormWrapperThunk: addNewWordFormWrapperThunkType = (  ) => ( dispatch, getState ) => {
  // get selectedWordList 
  const { selectedWordList } = getState();
  // get new id for new word 
  const newWordId = uuidv4();
  // added to selectedWordList
  dispatch(addSelectedWordListAction([ newWordId ]));
  // get new word empty object from getNewWord() 
  const newWord = getNewWord(newWordId);
  // normalize it
  const normalizedNewWord = normalizeWord(word); 
  // dispatch add new word and add new def 
  dispatch(addNewWordAction(normalizedNewWord.entities.words));
  dispatch(addNewDefAction(normalizedNewWord.entities.defs));
}
export default addNewWordFormWrapperThunk;


