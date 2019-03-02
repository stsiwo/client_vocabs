import * as React from 'react';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

interface ObservableState {
  input: string;
  result: string;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Props {
  render: ( state: ObservableState ) => React.ReactNode;
}


class Observable extends React.PureComponent<Props, ObservableState> {

  observable: Subject<string>; 

  subscription: Subscription;

  constructor(props: Props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.state = {
      input: "default",
      result: "no results",
      inputHandler: this.inputHandler,
    }
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
      <div>
        { this.props.render( this.state )}
      </div>
    );
  }

}

export default Observable;

