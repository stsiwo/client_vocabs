import * as React from 'react';
import { Subscription } from 'rxjs';
import { ObservableBags, Result } from './type';
import AbstractObservable from './AbstractObservable';

interface Props {
  render: ( state: ObservableBags ) => React.ReactNode;
  observableImpl: AbstractObservable;
}

/**
 * using formik form props as Producer cause input lag
 *  - I don't know why but better to create state in Observable then use it as Producer so you can avoid lag problem
 **/

class Observable extends React.PureComponent<Props, ObservableBags> {

  subscription: Subscription;

  constructor(props: Props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.isInputEmpty = this.isInputEmpty.bind(this);
    this.emptyInput = this.emptyInput.bind(this);
    this.setInput = this.setInput.bind(this);
    this.state = {
      input: "", // create producer indenpendent from formik actual state
      result: [],
      inputHandler: this.inputHandler,
      emptyInput: this.emptyInput,
      isInputEmpty: this.isInputEmpty,
      setInput: this.setInput,
    }
    this.handleResultState = this.handleResultState.bind(this);
  }

  handleResultState(nextResult: Result[]) {
    this.setState({ result: nextResult })
  }

  componentDidMount() {
    this.subscription = this.props.observableImpl.getSubscription(this.handleResultState);
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    this.props.observableImpl.next( target.value );
    this.setState({ input: target.value })
  }

  setInput( nextInput: string ) {
    this.props.observableImpl.next( nextInput );
    this.setState({ input: nextInput })
  }

  // this is for close autocomplete
  emptyInput() {
    this.setState({ input: "" });
  }

  // this is for checking autocomplete should be closed
  isInputEmpty() {
    return this.state.input === '';
  }

  render() {
    return (
      <React.Fragment>
        { this.props.render( this.state )}
      </React.Fragment>
    );
  }

}

export default Observable;


