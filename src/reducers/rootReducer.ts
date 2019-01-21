import { combineReducers, AnyAction } from "redux";
import { INormalizedState } from '../state/type';
import * as sliceReducer from './sliceReducer';

/**
 * root Reducer
 **/
export const rootReducer = combineReducers<INormalizedState, AnyAction>({
    entities: sliceReducer.entityReducer,
    sortedWordList: sliceReducer.sortedWordListReducer,
    selectedWordList: sliceReducer.selectedWordListReducer,
    searchedWordList: sliceReducer.searchedWordListReducer,
    displayedWordList: sliceReducer.displayedWordListReducer,
    currentSort: sliceReducer.currentSortReducer,
    currentFilter: sliceReducer.currentFilterReducer,
    wordFormError: sliceReducer.wordFormErrorReducer,
    searchKeyWord: sliceReducer.searchKeyWordReducer,
    ui: sliceReducer.uiReducer,
});

