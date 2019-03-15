import * as React from 'react';
import Observable from './Observable';
import { ObservableBags } from './type';

interface ObservableProps {
  observable: ObservableBags;
}

export default function withObservable<P extends {}>( WrappedComponent: React.ComponentType<P & ObservableProps> ) {
  return class extends React.PureComponent<P, {}> {

    constructor(props: P) {
      super(props);
      this.renderWrappedComponent = this.renderWrappedComponent.bind(this);
    }

    renderWrappedComponent( observable: ObservableBags ) {
      return <WrappedComponent { ...this.props } observable={ observable } />
    }

    render() {
      return (
        <Observable render={ this.renderWrappedComponent }/>
      );
    }
  }
}

