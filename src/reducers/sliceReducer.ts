import { StateType } from '../state/type';
import { ActionHandler } from './handler';  
import { initialState } from '../state/index';
import { AnyAction } from 'redux';
import { Record } from 'immutable';
//import { combineReducers } from 'redux-immutable';

/**********************************************
 * DON'T USE combineReducers when using immutablejs
 **********************************************/

// higher order reducer to make customized slice reducer 
function createReducer<T>( initialState: T, handlers: ActionHandler.HandlerType<T> ) {
  return (state: T = initialState, action: AnyAction) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state;
    }
  }
}

/**
 * slice reducers
 **/
const wordsReducer = createReducer<StateType.IEntityWord>(initialState.entities.get('words'), ActionHandler.wordsHandler);

export const currentSortReducer = createReducer<StateType.ICurrentSort>(initialState.currentSort, ActionHandler.currentSortHandler);

export const sortedWordListReducer = createReducer<StateType.ISortedWordList>(initialState.sortedWordList, ActionHandler.sortedWordListHandler);

export const searchedWordListReducer = createReducer<StateType.ISearchedWordList>(initialState.searchedWordList, ActionHandler.searchedWordListHandler);

export const displayedWordListReducer = createReducer<StateType.IDisplayedWordList>(initialState.displayedWordList, ActionHandler.displayedWordListHandler);

export const selectedWordListReducer = createReducer<StateType.ISelectedWordList>(initialState.selectedWordList, ActionHandler.selectedWordListHandler);

export const currentFilterReducer = createReducer<StateType.ICurrentFilter>(initialState.currentFilter, ActionHandler.currentFilterHandler);

export const wordFormErrorReducer = createReducer<StateType.IWordFormError>(initialState.wordFormError, ActionHandler.wordFormErrorHandler);

export const searchKeyWordReducer = createReducer<StateType.ISearchKeyWord>(initialState.searchKeyWord, ActionHandler.searchKeyWordHandler);

export const uiReducer = createReducer<Record<StateType.IUi>>(initialState.ui, ActionHandler.uiHandler);

export const asyncsReducer = createReducer<Record<StateType.IAsyncs>>(initialState.asyncs, ActionHandler.asyncsHandler);

export const entityReducer = (state: Record<StateType.IEntity>, action: AnyAction) => {
  return Record<StateType.IEntity>({
    words: wordsReducer(state.get('words'), action), 
  })();
}


