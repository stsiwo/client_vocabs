import * as React from 'react';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

/**
 * Producer: input text
 * Observable: in this case, observer is the only one, so Observable is enough
 **/
interface Props {
  input: string;
  result: string;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class Experiment extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="input here" value={ this.props.input } onChange={ this.props.inputHandler }/>
        <div>{ this.props.result }</div>
      </div>
    );
  }
}

interface State {
  input: string;
  result: string;
}

const withObservable = ( WrappedComponent: React.ComponentType<Props> ) => {
  class WithObservable extends React.Component<{}, State> {

    observable: Subject<string>; 

    subscription: Subscription;

    constructor(props: {}) {
      super(props);
      this.state = {
        input: "default",
        result: "no results"
      }
      this.inputHandler = this.inputHandler.bind(this);
      this.observable = new Subject<string>(); 
    }

    componentDidMount() {
      this.subscription = this.observable.pipe(debounceTime(1000)).subscribe(( input ) => this.setState({ result: input }));
    }

    componentWillUnmount() {
      this.subscription.unsubscribe();
    }

    inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
      const target = e.target as HTMLInputElement;
      this.observable.next(target.value);
      this.setState({ input: target.value })
    }

    render() {
      return (
        <WrappedComponent input={ this.state.input } result={ this.state.result } inputHandler={ this.inputHandler }/>
      );
    }

  }
  return WithObservable;
}


export default withObservable(Experiment);


