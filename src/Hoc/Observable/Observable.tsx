import * as React from 'react';
import { Subscription } from 'rxjs';
import { ObservableBags, Result } from './type';
import AbstractObservable from './AbstractObservable';
import ObservableImplFactory from './ObservableImplFactory';

interface Props {
  render: ( state: ObservableBags ) => React.ReactNode;
  observableImplType: string;
}

class Observable extends React.PureComponent<Props, ObservableBags> {

  private subscription: Subscription;

  private observableImpl: AbstractObservable;

  private targetRef: Node = null; 

  constructor(props: Props) {
    super(props);
    this.isResultEmpty = this.isResultEmpty.bind(this);
    this.emptyResult = this.emptyResult.bind(this);
    this.state = {
      result: [],
      targetRef: this.targetRef, 
      isResultEmpty: this.isResultEmpty,
      emptyResult: this.emptyResult
    }
    this.handleResultState = this.handleResultState.bind(this);
  }

  handleResultState(nextResult: Result[]) {
    this.setState({ result: nextResult })
  }

  componentDidMount() {
    this.observableImpl = ObservableImplFactory(this.props.observableImplType, this.targetRef);
    this.subscription = this.observableImpl.getSubscription(this.handleResultState);
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  // this is for close autocomplete
  emptyResult() {
    this.setState({ result: [] });
  }

  // this is for checking autocomplete should be closed
  isResultEmpty() {
    return this.state.result.length === 0;
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



