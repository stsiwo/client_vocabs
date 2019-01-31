import { MainThunkType } from '../thunkComponent';
import { bulkUpdateWordActionCreator } from '../../actions/index';

/**
 * main thunk: update (or create) words (entities) in redux state  
 *
 * @param {IWord[]} args[0] - words from body of response  
 *
 **/

const updateWordsMainThunk: MainThunkType = ( ...args ) => ( dispatch, getState ) => {
  // dispatch bulkUpdateWordActionCreator 
  dispatch(bulkUpdateWordActionCreator(args[0]));

}
export default updateWordsMainThunk;









