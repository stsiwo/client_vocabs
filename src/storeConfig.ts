import { createStore, compose, applyMiddleware, AnyAction } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { rootReducer } from './reducers/rootReducer';
import { initialStateRecordFactory } from './state/index';
import { IState } from './state/type';
import loginChangeListener from './listeners/loginChangeListener'; 
//import { logger } from 'redux-logger';

const middlewares = [ thunk as ThunkMiddleware<IState, AnyAction>/*, logger*/ ];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/**
 * better not to rely on the seconds arg of createStore function as initial state. the author said there is wierd stuff so, ALWAYS define initial state in each reducer!!!
 **/
const store = createStore(rootReducer, initialStateRecordFactory(), composeEnhancers( 
  applyMiddleware(...middlewares)
));

let acting = false;
// listener registration
store.subscribe(() => {
  // this condition is to prevent infinit loop of dispatch action
  if (!acting) {
    acting = true;
    // list of listeners
    loginChangeListener(store.getState(), store.dispatch);

    acting = false;
  }

});

export default store;

