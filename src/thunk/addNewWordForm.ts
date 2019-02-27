import { AnyAction } from 'redux';
import { IState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import getUuid from '../util/getUuid'; 
import getNewWord from '../state/util/getNewWord';

/**
 * this thunk for creating new Word form when user click new icon  
 **/
export type addNewWordFormThunkType = ( callback: (obj: any) => void ) => ThunkAction<void, IState, undefined, AnyAction>;

const addNewWordFormThunk: addNewWordFormThunkType = ( callback: (obj: any) => void ) => ( dispatch, getState ) => {
  // get new id for new word 
  const newWordId = getUuid(); 
  // get new word empty object from getNewWord() 
  const newWord = getNewWord(newWordId);

  // add new word form
  callback(newWord);

}
export default addNewWordFormThunk;


