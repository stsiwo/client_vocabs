import { createStore, compose, applyMiddleware, AnyAction } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { rootReducer } from './reducers/rootReducer';
import { normalizedState } from './state/index';
import { INormalizedState } from './state/type';
import { logger } from 'redux-logger';

const middlewares = [ thunk as ThunkMiddleware<INormalizedState, AnyAction>, logger ];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/**
 * better not to rely on the seconds arg of createStore function as initial state. the author said there is wierd stuff so, ALWAYS define initial state in each reducer!!!
 **/
const store = createStore(rootReducer, normalizedState, composeEnhancers( 
  applyMiddleware(...middlewares)
));

export default store;

