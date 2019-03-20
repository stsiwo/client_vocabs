import { ThunkMiddlewareType } from '../thunkComponent';
/**
 * sort words middleware thunk
 *
 * - see detail thunk/sortIconChange
 *
 * @param { number } - args[0] : next sort number
 *  - this args[0] is replaced with newSortedWordList
 *  - so don't confused with it
 **/
declare const sortWordsThunkMiddleware: ThunkMiddlewareType;
export default sortWordsThunkMiddleware;
