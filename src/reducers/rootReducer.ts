import { AnyAction } from "redux";
import { combineReducers } from 'redux-immutable';
import { IState } from '../state/type';
import * as sliceReducer from './sliceReducer';

/**
 * root Reducer
 **/
export const rootReducer = combineReducers<IState, AnyAction, string>({
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
    asyncs: sliceReducer.asyncsReducer,
});

