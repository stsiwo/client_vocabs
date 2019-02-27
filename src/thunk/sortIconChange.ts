import sortWordsThunkMiddleware from './middlewares/sortWords';
import applyThunkMiddleware from './thunkComponent'; 
import { changeDisplayedWordListActionCreator } from '../actions/index';

// sort icon change use case thunk 
// 1. sort words 
//  1.1 need to assign result of sorted word list to args to send to the next thunk (2.)
// 2. assign the sorted wordlist to displayedWordList
//  2.1. changeDisplayedWordListActionCreator receive args of result of newSortedWordList
const sortIconChangeThunk = applyThunkMiddleware(
  sortWordsThunkMiddleware,
)(changeDisplayedWordListActionCreator);

export default sortIconChangeThunk;

