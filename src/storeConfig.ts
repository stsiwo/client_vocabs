import { createStore, compose, applyMiddleware, AnyAction } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { rootReducer } from './reducers';
import { normalizedState, INormalizedState } from './state';



const middlewares = [ thunk as ThunkMiddleware<INormalizedState, AnyAction> ];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/**
 * better not to rely on the seconds arg of createStore function as initial state. the author said there is wierd stuff so, ALWAYS define initial state in each reducer!!!
 **/
const store = createStore(rootReducer, normalizedState, composeEnhancers( 
  applyMiddleware(...middlewares)
));

export default store;

