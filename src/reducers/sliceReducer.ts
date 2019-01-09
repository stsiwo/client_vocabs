import { IEntity, IEntityDef, IEntityWord, ICurrentSort, ISortedWordList, ICurrentFilter, IUi, ISelectedWordList, ISearchKeyWord, ISearchedWordList, IDisplayedWordList } from '../state/type';
import { normalizedState } from '../state/index';
import { Handler, defsHandler, wordsHandler, currentSortHandler, sortedWordListHandler, currentFilterHandler, uiHandler, selectedWordListHandler , searchKeyWordHandler, searchedWordListHandler, displayedWordListHandler } from './handler';  
import { AnyAction, combineReducers } from 'redux';

// higher order reducer to make customized slice reducer 
function createReducer<T>( initialState: T, handlers: Handler<T> ) {
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
const defsReducer = createReducer<IEntityDef>(normalizedState.entities.defs, defsHandler);

const wordsReducer = createReducer<IEntityWord>(normalizedState.entities.words, wordsHandler);

export const currentSortReducer = createReducer<ICurrentSort>(normalizedState.currentSort, currentSortHandler);

export const sortedWordListReducer = createReducer<ISortedWordList>(normalizedState.sortedWordList, sortedWordListHandler);

export const searchedWordListReducer = createReducer<ISearchedWordList>(normalizedState.searchedWordList, searchedWordListHandler);

export const displayedWordListReducer = createReducer<IDisplayedWordList>(normalizedState.displayedWordList, displayedWordListHandler);

export const selectedWordListReducer = createReducer<ISelectedWordList>(normalizedState.selectedWordList, selectedWordListHandler);

export const currentFilterReducer = createReducer<ICurrentFilter>(normalizedState.currentFilter, currentFilterHandler);

export const searchKeyWordReducer = createReducer<ISearchKeyWord>(normalizedState.searchKeyWord, searchKeyWordHandler);

export const entityReducer = combineReducers<IEntity, AnyAction>({
  defs: defsReducer,
  words: wordsReducer, 
})

export const uiReducer = createReducer<IUi>(normalizedState.ui, uiHandler);



