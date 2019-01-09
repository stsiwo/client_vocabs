import { combineReducers, AnyAction } from "redux";
import { INormalizedState } from '../state/type';
import { entityReducer, sortedWordListReducer, currentSortReducer, currentFilterReducer, uiReducer, selectedWordListReducer, searchKeyWordReducer } from './sliceReducer';

/**
 * root Reducer
 **/
export const rootReducer = combineReducers<INormalizedState, AnyAction>({
    entities: entityReducer,
    sortedWordList: sortedWordListReducer,
    selectedWordList: selectedWordListReducer,
    currentSort: currentSortReducer,
    currentFilter: currentFilterReducer,
    searchKeyWord: searchKeyWordReducer,
    ui: uiReducer,
});

