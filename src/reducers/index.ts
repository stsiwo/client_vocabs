import { combineReducers, AnyAction } from "redux";
import { INormalizedState, normalizedState, IEntity, IEntityDef, IEntityWord } from '../state';
import { IWordsActionType, WordsActionType } from '../actions/type';

type caseReducer<T> = (state: T, action: AnyAction) => T;

 //must match property name with action type of a domain
 //and value name with the name of the slice reducer function
 
type Handler<T> = {
  [P in keyof IWordsActionType]?: caseReducer<T>;
}

function createReducer<T>( initialState: T, handlers: Handler<T> ) {
  return (state: T = initialState, action: AnyAction) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state;
    }
  }
}

//case reducer

//const addNewWordReducer: caseReducer = (wordsState, action) => {
  //return Object.assign({}, wordsState);
//}

const addNewDefsReducer: caseReducer<IEntityDef> = (defs, action) => ({
  ...defs,
  ...action.entities.defs,
});

const addNewWordsReducer: caseReducer<IEntityWord> = (words, action) => ({
  ...words,
  ...action.entities.words,
});

const defsHandler: Handler<IEntityDef> = {
  [WordsActionType.ADD_NEW_WORD]: addNewDefsReducer,
}   

const wordsHandler: Handler<IEntityWord> = {
  [WordsActionType.ADD_NEW_WORD]: addNewWordsReducer,
}   

const defsReducer = createReducer<IEntityDef>(normalizedState.entities.defs, defsHandler);
const wordsReducer = createReducer<IEntityWord>(normalizedState.entities.words, wordsHandler);
  
export const entityReducer = combineReducers<IEntity, AnyAction>({
  defs: defsReducer,
  words: wordsReducer, 
})
 //slice reducer

//const wordsReducer = createReducer(normalizedState.words, wordsHandler );

 //root reducer
 
export const rootReducer = combineReducers<INormalizedState, AnyAction>({
    entities: entityReducer,
});

