import { combineReducers, AnyAction } from "redux";
import { INormalizedState } from '../state';
import { entityReducer, sortedWordListReducer, currentSortReducer } from './sliceReducer';

/**
 * root Reducer
 **/
export const rootReducer = combineReducers<INormalizedState, AnyAction>({
    entities: entityReducer,
    sortedWordList: sortedWordListReducer,
    currentSort: currentSortReducer,
});

