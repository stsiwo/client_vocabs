import { ThunkMiddlewareType } from '../thunkComponent';
import filterWords from '../../util/filterWords'; 
import { changeFilterActionCreator } from '../../actions/index';

/**
 * filter words middleware thunk 
 *
 * - see detail thunk/filterIconChange
 *
 * @param { number[] } - args[0] : next filter number 
 *  - this args[0] is replaced with newFilteredWordList 
 *  - so don't confused with it
 **/
const filterWordsThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => ( dispatch, getState ) => {

  // get filteredWordList and entities 
  //const displayedWordList = getState().get('displayedWordList');
  const entities = getState().get('entities');
  // get newFilter Set with newFilter
  const currentFilter = getState().get('currentFilter');
  const newFilter = args[0];

  // this is not beautiful, should be another way ....
  const newFilters = currentFilter.includes(newFilter) ? currentFilter.delete(newFilter) : currentFilter.add(newFilter);

  // filter filteredWordList and return new filteredWordList 
  const newFilteredWordList = filterWords(entities, newFilters);
  
  // assign result to args
  args[0] = newFilteredWordList;

  // change currentFilter and sortedWordList
  dispatch(changeFilterActionCreator(newFilter, args[0]));

  // call next thunk with result  
  dispatch<any>(next(...args)); 

}
export default filterWordsThunkMiddleware;


