import { MainThunkType } from '../thunkComponent';
import { normalizeWords } from '../../state/index';
import { addNewWordActionCreator } from '../../actions/index';

/**
 * main thunk: update (or create) words (entities) in redux state  
 *
 * @param {IWord[]} args[0] - words from body of response  
 *
 **/

const updateWordsMainThunk: MainThunkType = ( ...args ) => ( dispatch, getState ) => {
  // normalize IWord to IEntityWord and IEntityDef
  const updatedEntities = normalizeWords(args[0]);

  // dispatch addNewWordActionCreator 
  dispatch(addNewWordActionCreator(updatedEntities.words, updatedEntities.defs));

}
export default updateWordsMainThunk;









