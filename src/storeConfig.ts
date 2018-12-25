import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from './reducers';
import { normalizedState  } from './state';


const middlewares = [ thunk ];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, normalizedState, composeEnhancers( 
  applyMiddleware(...middlewares)
));

export default store;

