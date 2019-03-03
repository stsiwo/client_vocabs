import * as React from 'react';
import Observable from './Observable';

interface Suggestion {
  id: number;
  word: string;
}

interface State {
  input: string;
  result: Suggestion[];
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ObservableProps {
  observable: State;
}

export default function withObservable<P extends {}>( WrappedComponent: React.ComponentType<P & ObservableProps> ) {
  return class extends React.PureComponent<P, {}> {

    constructor(props: P) {
      super(props);
      this.renderWrappedComponent = this.renderWrappedComponent.bind(this);
    }

    renderWrappedComponent( observable: State ) {
      return <WrappedComponent { ...this.props } observable={ observable } />
    }

    render() {
      return (
        <Observable render={ this.renderWrappedComponent }/>
      );
    }
  }
}
