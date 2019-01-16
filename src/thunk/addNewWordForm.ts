import { AnyAction } from 'redux';
import { INormalizedState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import getUuid from '../util/getUuid'; 
import { normalizeWord } from '../state/index';
import getNewWord from '../state/util/getNewWord';
import { addSelectedWordListActionCreator, addNewWordActionCreator, addNewDefActionCreator } from '../actions/index';

/**
 * this thunk for creating new Word form when user click new icon  
 **/
export type addNewWordFormWrapperThunkType = () => ThunkAction<void, INormalizedState, undefined, AnyAction>;

const addNewWordFormWrapperThunk: addNewWordFormWrapperThunkType = (  ) => ( dispatch, getState ) => {
  // get new id for new word 
  const newWordId = getUuid(); 
  // added to selectedWordList
  dispatch(addSelectedWordListActionCreator([ newWordId ]));
  // get new word empty object from getNewWord() 
  const newWord = getNewWord(newWordId);
  // normalize it
  const normalizedNewWord = normalizeWord(newWord); 
  // dispatch add new word and add new def 
  dispatch(addNewWordActionCreator(normalizedNewWord.words));
  dispatch(addNewDefActionCreator(normalizedNewWord.defs));
}
export default addNewWordFormWrapperThunk;


