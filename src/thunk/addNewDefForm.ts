import { AnyAction } from 'redux';
import { IState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import { ArrayHelpers } from 'formik';
import getNewDefForm from '../state/util/getNewDefForm';
import { IWord } from '../domains/word';

/**
 * this thunk for creating new def form when user click new icon  
 **/
export type addNewDefFormThunkType = ( arrayHelpers: ArrayHelpers, wordIndex: number ) => ThunkAction<void, IState, undefined, AnyAction>;

const addNewDefFormThunk: addNewDefFormThunkType = ( arrayHelpers, wordIndex ) => ( dispatch, getState ) => {
  // extract target word
  const targetWord: IWord = arrayHelpers.remove(wordIndex);
  console.log(targetWord);

  // create def template form
  const newDefForm = getNewDefForm(targetWord.id);

  // append it to targetWord
  targetWord.defs.push(newDefForm); 

  // insert targetWord to values
  arrayHelpers.insert(wordIndex, targetWord);

}
export default addNewDefFormThunk;



