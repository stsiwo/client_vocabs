import { AnyAction } from 'redux';
import { IState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import { ArrayHelpers } from 'formik';
import { IWord } from '../domains/word';

/**
 * this thunk for creating new def form when user click new icon  
 **/
export type removeDefFormThunkType = ( arrayHelpers: ArrayHelpers, wordIndex: number, defIndex: number ) => ThunkAction<void, IState, undefined, AnyAction>;

const removeDefFormThunk: removeDefFormThunkType = ( arrayHelpers, wordIndex, defIndex ) => async ( dispatch, getState ) => {
  // extract target word
  const targetWord: IWord = await arrayHelpers.remove<IWord>(wordIndex);

  // remove targetDef from targetWord 
  targetWord.defs.splice(defIndex, 1); 

  // insert targetWord to values
  arrayHelpers.insert(wordIndex, targetWord);

}
export default removeDefFormThunk;




