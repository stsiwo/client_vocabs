import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, AnyAction, Dispatch, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//interface Action {
  //type: string;
  //[propName: string]: any;
//}

interface State {
  count: number;
}

//const myState: State = {
  //count: 0,
//}

function counter(state: State = { count: 0 }  , action: AnyAction) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: ++state.count }; 
    case 'DECREMENT':
      return { count: --state.count }; 
    default:
      return state
  }
}
const middlewares = [ thunk ];
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(counter, { count: 0 }, composeEnhancers( 
  applyMiddleware(...middlewares)
));

interface Props {
  count: number;
  incrementClick?: (count: number) => void;
  decrementClick?: (count: number) => void;
}

class Counter extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleIncrementCount = this.handleIncrementCount.bind(this);
    this.handleDecrementCount = this.handleDecrementCount.bind(this);
  }

  handleIncrementCount() {
    this.props.incrementClick(this.props.count);
  }

  handleDecrementCount() {
    this.props.decrementClick(this.props.count);
  }

  render() {
    return (
      <div>
        <div>{ this.props.count }</div>
        <input type="button" onClick={ this.handleIncrementCount } />
        <input type="button" onClick={ this.handleDecrementCount } />
      </div>
    );
  }
}


const incrementCount = ( count: number ) => ({
  type: 'INCREMENT',
  count,
});

const decrementCount = ( count: number ) => ({
  type: 'DECREMENT',
  count,
});

const mapStateToProps = (state: State, ownProps: {}) => ({
  count: state.count,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  incrementClick: (currentCount: number) => { dispatch(incrementCount(currentCount)) },
  decrementClick: (currentCount: number) => { dispatch(decrementCount(currentCount)) },
});

const WrappedCounter = connect( mapStateToProps, mapDispatchToProps )( Counter );

ReactDOM.render(
  <Provider store={store}>
    <WrappedCounter />
  </Provider>,
  document.getElementById('root')
)













