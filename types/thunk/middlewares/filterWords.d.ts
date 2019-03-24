import { ThunkMiddlewareType } from '../thunkComponent';
/**
 * filter words middleware thunk
 *
 * - see detail thunk/filterIconChange
 *
 * @param { number[] } - args[0] : next filter number
 *  - this args[0] is replaced with newFilteredWordList
 *  - so don't confused with it
 **/
declare const filterWordsThunkMiddleware: ThunkMiddlewareType;
export default filterWordsThunkMiddleware;
