import filterWordsThunkMiddleware from './middlewares/filterWords';
import applyThunkMiddleware from './thunkComponent'; 
import { changeDisplayedWordListActionCreator } from '../actions/index';

// filter icon change use case thunk 
// 1. filter words 
//  1.1 need to assign result of filtered word list to args to send to the next thunk (2.)
// 2. assign the filtered wordlist to displayedWordList
//  2.1. changeDisplayedWordListActionCreator receive args of result of newSortedWordList
const filterIconChangeThunk = applyThunkMiddleware(
  filterWordsThunkMiddleware,
)(changeDisplayedWordListActionCreator);

export default filterIconChangeThunk;


