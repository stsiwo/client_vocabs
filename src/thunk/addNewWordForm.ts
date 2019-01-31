import { AnyAction } from 'redux';
import { IState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import getUuid from '../util/getUuid'; 
import getNewWord from '../state/util/getNewWord';
import { toggleSelectedWordListActionCreator, bulkUpdateWordActionCreator } from '../actions/index';

/**
 * this thunk for creating new Word form when user click new icon  
 **/
export type addNewWordFormWrapperThunkType = () => ThunkAction<void, IState, undefined, AnyAction>;

const addNewWordFormWrapperThunk: addNewWordFormWrapperThunkType = (  ) => ( dispatch, getState ) => {
  // get new id for new word 
  const newWordId = getUuid(); 
  // added to selectedWordList
  dispatch(toggleSelectedWordListActionCreator( newWordId ));
  // get new word empty object from getNewWord() 
  const newWord = getNewWord(newWordId);
  // dispatch add new word and add new def 
  dispatch(bulkUpdateWordActionCreator([ newWord ]));
}
export default addNewWordFormWrapperThunk;


