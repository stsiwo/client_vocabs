import { AnyAction } from "redux";
import { IState } from '../state/type';
import * as sliceReducer from './sliceReducer';
import { Record } from 'immutable';

/**********************************************
 * DON'T USE combineReducers
 **********************************************/

/**
 * root Reducer
 **/
export const rootReducer = (state: Record<IState>, action: AnyAction ) => {
  return Record<IState>({
    entities: sliceReducer.entityReducer( state.get('entities'), action ),
    sortedWordList: sliceReducer.sortedWordListReducer( state.get('sortedWordList'), action ),
    selectedWordList: sliceReducer.selectedWordListReducer( state.get('selectedWordList'), action ),
    searchedWordList: sliceReducer.searchedWordListReducer( state.get('searchedWordList'), action ),
    displayedWordList: sliceReducer.displayedWordListReducer( state.get('displayedWordList'), action ),
    currentSort: sliceReducer.currentSortReducer( state.get('currentSort'), action ),
    currentFilter: sliceReducer.currentFilterReducer( state.get('currentFilter'), action ),
    wordFormError: sliceReducer.wordFormErrorReducer( state.get('wordFormError'), action ),
    searchKeyWord: sliceReducer.searchKeyWordReducer( state.get('searchKeyWord'), action ),
    ui: sliceReducer.uiReducer( state.get('ui'), action ),
    asyncs: sliceReducer.asyncsReducer( state.get('asyncs'), action ),
  })();
}

