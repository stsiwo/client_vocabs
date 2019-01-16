import { StateType } from '../state/type';
import { ActionHandler } from './handler';  
import { normalizedState } from '../state/index';
import { AnyAction, combineReducers } from 'redux';

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
const defsReducer = createReducer<StateType.IEntityDef>(normalizedState.entities.defs, ActionHandler.defsHandler);

const wordsReducer = createReducer<StateType.IEntityWord>(normalizedState.entities.words, ActionHandler.wordsHandler);

export const currentSortReducer = createReducer<StateType.ICurrentSort>(normalizedState.currentSort, ActionHandler.currentSortHandler);

export const sortedWordListReducer = createReducer<StateType.ISortedWordList>(normalizedState.sortedWordList, ActionHandler.sortedWordListHandler);

export const searchedWordListReducer = createReducer<StateType.ISearchedWordList>(normalizedState.searchedWordList, ActionHandler.searchedWordListHandler);

export const displayedWordListReducer = createReducer<StateType.IDisplayedWordList>(normalizedState.displayedWordList, ActionHandler.displayedWordListHandler);

export const selectedWordListReducer = createReducer<StateType.ISelectedWordList>(normalizedState.selectedWordList, ActionHandler.selectedWordListHandler);

export const currentFilterReducer = createReducer<StateType.ICurrentFilter>(normalizedState.currentFilter, ActionHandler.currentFilterHandler);

export const searchKeyWordReducer = createReducer<StateType.ISearchKeyWord>(normalizedState.searchKeyWord, ActionHandler.searchKeyWordHandler);

export const entityReducer = combineReducers<StateType.IEntity, AnyAction>({
  defs: defsReducer,
  words: wordsReducer, 
})

export const uiReducer = createReducer<StateType.IUi>(normalizedState.ui, ActionHandler.uiHandler);



