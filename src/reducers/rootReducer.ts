import { combineReducers, AnyAction } from "redux";
import { INormalizedState } from '../state/type';
import { entityReducer, sortedWordListReducer, currentSortReducer, currentFilterReducer, uiReducer, selectedWordListReducer } from './sliceReducer';

/**
 * root Reducer
 **/
export const rootReducer = combineReducers<INormalizedState, AnyAction>({
    entities: entityReducer,
    sortedWordList: sortedWordListReducer,
    selectedWordList: selectedWordListReducer,
    currentSort: currentSortReducer,
    currentFilter: currentFilterReducer,
    ui: uiReducer,
});

