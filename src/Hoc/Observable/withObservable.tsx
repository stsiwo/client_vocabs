import * as React from 'react';
import Observable from './Observable';
import { ObservableBags, ValueOfObservableImplType } from './type';
import ObservableImplFactory from './ObservableImplFactory';
import AbstractObservable from './AbstractObservable';

interface ObservableProps {
  observable: ObservableBags;
}

export default function withObservable<P extends {}>( WrappedComponent: React.ComponentType<P & ObservableProps>, observableImpl: ValueOfObservableImplType ) {
  return class extends React.PureComponent<P, {}> {

    private observableImpl: AbstractObservable;

    constructor(props: P) {
      super(props);
      this.renderWrappedComponent = this.renderWrappedComponent.bind(this);
      this.observableImpl = ObservableImplFactory(observableImpl);
    }

    renderWrappedComponent( observable: ObservableBags ) {
      return <WrappedComponent { ...this.props } observable={ observable } />
    }

    render() {
      return (
        <Observable render={ this.renderWrappedComponent } observableImpl={ this.observableImpl }/>
      );
    }
  }
}

