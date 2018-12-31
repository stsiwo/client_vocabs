import { IEntity, IEntityDef, IEntityWord, ICurrentSort, ISortedWordList, ICurrentFilter } from '../state/type';
import { normalizedState } from '../state/index';
import { Handler, defsHandler, wordsHandler, currentSortHandler, sortedWordListHandler, currentFilterHandler } from './handler';  
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

export const currentFilterReducer = createReducer<ICurrentFilter>(normalizedState.currentFilter, currentFilterHandler);

export const entityReducer = combineReducers<IEntity, AnyAction>({
  defs: defsReducer,
  words: wordsReducer, 
})
