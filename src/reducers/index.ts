import { combineReducers, AnyAction } from "redux";
import { INormalizedState, normalizedState, IEntity, IEntityDef, IEntityWord } from '../state';
import { IWordActionType, WordActionType, DefActionType } from '../actions/type';

type caseReducer<T> = (state: T, action: AnyAction) => T;

 //must match property name with action type of a domain
 //and value name with the name of the slice reducer function
 
type Handler<T> = {
  [P in keyof IWordActionType]?: caseReducer<T>;
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

//const addNewWordByWordActionReducer: caseReducer = (wordsState, action) => {
  //return Object.assign({}, wordsState);
//}

const addNewDefsByWordActionReducer: caseReducer<IEntityDef> = (defs, action) => ({
  ...defs,
  ...action.entities.defs,
});

const removeDefsByWordActionReducer: caseReducer<IEntityDef> = (defs, action) => {
  const copy = JSON.parse(JSON.stringify(defs)); 
  // find properties whose _wordId is action.id and put those into array
  Object.keys(copy).map(( key ) => { 
    copy[key]._wordId === action.id ? delete copy[key] : ''; 
  });
  return copy;
}

const updateDefsByWordActionReducer: caseReducer<IEntityDef> = (defs, action) => {
  return Object.assign({}, defs, action.entities.defs);
};

const removeDefsByDefActionReducer: caseReducer<IEntityDef> = (defs, action) => {
  const copy = JSON.parse(JSON.stringify(defs)); 
  delete copy[action.id];
  return copy;
}

const addNewWordByWordActionReducer: caseReducer<IEntityWord> = (words, action) => ({
  ...words,
  ...action.entities.words,
});

const removeWordByWordActionReducer: caseReducer<IEntityWord> = (words, action) => {
  const copy = JSON.parse(JSON.stringify(words)); 
  delete copy[action.id];
  return copy;
}

const updateWordByWordActionReducer: caseReducer<IEntityWord> = (words, action) => {
  return Object.assign({}, words, action.entities.words);
};

const appendNewDefsToWordByDefActionReducer: caseReducer<IEntityWord> = (words, action) => {
  const copy = JSON.parse(JSON.stringify(words));
  const targetWordId = action.entities.defs[Object.getOwnPropertyNames(action.entities.defs)[0]]._wordId;
  // object keys function return string element of array so need to use map(Number) to convert those to number
  copy[targetWordId].defs = copy[targetWordId].defs.concat(Object.keys(action.entities.defs).map(Number));
  return copy;
}

const removeDefsFromWordByDefActionReducer: caseReducer<IEntityWord> = (words, action) => {
  const copy = JSON.parse(JSON.stringify(words));
  const targetIndex = copy[action._wordId].defs.indexOf(action.id);
  copy[action._wordId].defs.splice(targetIndex, 1);
  return copy;
}


const defsHandler: Handler<IEntityDef> = {
  [WordActionType.ADD_NEW_WORD]: addNewDefsByWordActionReducer,
  [WordActionType.REMOVE_WORD]: removeDefsByWordActionReducer,
  [WordActionType.UPDATE_WORD]: updateDefsByWordActionReducer,
  [DefActionType.ADD_NEW_DEF]: addNewDefsByWordActionReducer,
  [DefActionType.REMOVE_DEF]: removeDefsByDefActionReducer, // can't use removeDefsByWordActionReducer
  [DefActionType.UPDATE_DEF]: updateDefsByWordActionReducer,
}   

const wordsHandler: Handler<IEntityWord> = {
  [WordActionType.ADD_NEW_WORD]: addNewWordByWordActionReducer,
  [WordActionType.REMOVE_WORD]: removeWordByWordActionReducer,
  [WordActionType.UPDATE_WORD]: updateWordByWordActionReducer,
  [DefActionType.ADD_NEW_DEF]: appendNewDefsToWordByDefActionReducer,
  [DefActionType.REMOVE_DEF]: removeDefsFromWordByDefActionReducer,
  // update does not relating word entity since id hasn't change at all
  //[DefActionType.UPDATE_DEF]: updateDefsOfWordByDefActionReducer,
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

