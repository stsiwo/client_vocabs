import { combineReducers, AnyAction } from "redux";
import { INormalizedState } from '../state/type';
import { entityReducer, sortedWordListReducer, currentSortReducer, currentFilterReducer } from './sliceReducer';

/**
 * root Reducer
 **/
export const rootReducer = combineReducers<INormalizedState, AnyAction>({
    entities: entityReducer,
    sortedWordList: sortedWordListReducer,
    currentSort: currentSortReducer,
    currentFilter: currentFilterReducer,
});

