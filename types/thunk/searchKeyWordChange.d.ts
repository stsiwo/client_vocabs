import { AnyAction } from 'redux';
import { IState } from "../state/type";
import { ThunkAction } from 'redux-thunk';
import { Record } from 'immutable';
/**
 * should display no result message when there is no result...
 * #REFACTOR. (ticket#7)
 **/
declare type searchKeyWordChangeThunkType = (nextSearchKey: string) => ThunkAction<void, Record<IState>, undefined, AnyAction>;
declare const searchKeyWordChangeThunk: searchKeyWordChangeThunkType;
export default searchKeyWordChangeThunk;
