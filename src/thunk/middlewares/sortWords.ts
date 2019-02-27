import { ThunkMiddlewareType } from '../thunkComponent';
import sortWords from '../../util/sortWords'; 
import { changeSortActionCreator } from '../../actions/index';

/**
 * sort words middleware thunk 
 *
 * - see detail thunk/sortIconChange
 *
 * @param { number } - args[0] : next sort number 
 *  - this args[0] is replaced with newSortedWordList 
 *  - so don't confused with it
 **/
const sortWordsThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => ( dispatch, getState ) => {

  // get sortedWordList and entities 
  const sortedWordList = getState().get('sortedWordList');
  const entities = getState().get('entities');
  const newSort = args[0];

  // sort sortedWordList and return new sortedWordList 
  const newSortedWordList = sortWords(sortedWordList, entities, args[0]);
  
  // assign result to args
  args[0] = newSortedWordList;

  // change currentSort and sortedWordList
  dispatch(changeSortActionCreator(newSort, args[0]));

  // call next thunk with result  
  dispatch<any>(next(...args)); 

}
export default sortWordsThunkMiddleware;

