import { StateType } from '../state/type';
import { Handler } from './handler';  
import { normalizedState } from '../state/index';
import { AnyAction, combineReducers } from 'redux';

// higher order reducer to make customized slice reducer 
function createReducer<T>( initialState: T, handlers: handler.Handler<T> ) {
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
const defsReducer = createReducer<stateType.IEntityDef>(normalizedState.entities.defs, handler.defsHandler);

const wordsReducer = createReducer<stateType.IEntityWord>(normalizedState.entities.words, handler.wordsHandler);

export const currentSortReducer = createReducer<stateType.ICurrentSort>(normalizedState.currentSort, handler.currentSortHandler);

export const sortedWordListReducer = createReducer<stateType.ISortedWordList>(normalizedState.sortedWordList, handler.sortedWordListHandler);

export const searchedWordListReducer = createReducer<stateType.ISearchedWordList>(normalizedState.searchedWordList, handler.searchedWordListHandler);

export const displayedWordListReducer = createReducer<stateType.IDisplayedWordList>(normalizedState.displayedWordList, handler.displayedWordListHandler);

export const selectedWordListReducer = createReducer<stateType.ISelectedWordList>(normalizedState.selectedWordList, handler.selectedWordListHandler);

export const currentFilterReducer = createReducer<stateType.ICurrentFilter>(normalizedState.currentFilter, handler.currentFilterHandler);

export const searchKeyWordReducer = createReducer<stateType.ISearchKeyWord>(normalizedState.searchKeyWord, handler.searchKeyWordHandler);

export const entityReducer = combineReducers<stateType.IEntity, AnyAction>({
  defs: defsReducer,
  words: wordsReducer, 
})

export const uiReducer = createReducer<stateType.IUi>(normalizedState.ui, handler.uiHandler);



