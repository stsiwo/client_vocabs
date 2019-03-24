import { AnyAction } from 'redux';
import { IState } from "../state/type";
import { ThunkAction } from 'redux-thunk';
import { Record } from 'immutable';
/**
 * this thunk for toggle SearchWordModal and also change displayed wordList to sorted wordList (not searchedWordList)
 * ( often need to invoke multiple actions so make this as thunk
 **/
export declare type searchWordControllerClickThunkType = () => ThunkAction<void, Record<IState>, undefined, AnyAction>;
declare const searchWordControllerClickThunk: searchWordControllerClickThunkType;
export default searchWordControllerClickThunk;
