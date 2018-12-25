import { combineReducers, AnyAction } from "redux";
import { State, INormalizedState, IEntity } from '../state';
import { IWordsActionType, WordsActionType } from '../actions/type';
import merge from 'lodash/merge';

type caseReducer = (state: State, action: AnyAction) => State;

 //must match property name with action type of a domain
 //and value name with the name of the slice reducer function
 
type Handler = {
  [P in keyof IWordsActionType]?: caseReducer;
}

function createReducer( initialState: State, handlers: Handler ) {
  return (state: State = initialState, action: AnyAction) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state;
    }
  }
}

//case reducer

const addNewWordReducer: caseReducer = (wordsState, action) => {
  return Object.assign({}, wordsState);
}


const wordsHandler: Handler = {
  [WordsActionType.ADD_NEW_WORD]: addNewWordReducer,
}   

const entityReducer = (state: IEntity, action: AnyAction) => {
  if (action.entities) {
    return merge({}, state, action.entities)
  } 
  return state
}

 //slice reducer

const wordsReducer = createReducer([], wordsHandler );

 //root reducer
 
export const rootReducer = combineReducers<INormalizedState, AnyAction>({
    entities: entityReducer,
    words: wordsReducer,
});

