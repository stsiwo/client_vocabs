import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from './reducers';
import { normalizedInitialState } from './state';


const middlewares = [ thunk ];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, normalizedInitialState, composeEnhancers( 
  applyMiddleware(...middlewares)
));

export default store;

