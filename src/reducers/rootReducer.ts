import { combineReducers, AnyAction } from "redux";
import { INormalizedState } from '../state/type';
import { entityReducer, sortedWordListReducer, currentSortReducer, currentFilterReducer, uiReducer, selectedWordListReducer, searchKeyWordReducer, searchedWordListReducer, displayedWordListReducer } from './sliceReducer';

/**
 * root Reducer
 **/
export const rootReducer = combineReducers<INormalizedState, AnyAction>({
    entities: entityReducer,
    sortedWordList: sortedWordListReducer,
    selectedWordList: selectedWordListReducer,
    searchedWordList: searchedWordListReducer,
    displayedWordList: displayedWordListReducer,
    currentSort: currentSortReducer,
    currentFilter: currentFilterReducer,
    searchKeyWord: searchKeyWordReducer,
    ui: uiReducer,
});

