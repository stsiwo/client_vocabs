import * as React from 'react';
import AutoComplete from './AutoComplete';
import { AutoCompleteBags } from './type';
import { ObservableBags } from '../Observable/type';

interface AutoCompleteProps {
  autoComplete: AutoCompleteBags;
}

interface ObservableProps {
  observable: ObservableBags;
}

export default function withAutoComplete<P extends object & ObservableProps>( WrappedComponent: React.ComponentType<P & ObservableProps & AutoCompleteProps> ) {
  return class extends React.PureComponent<P, {}> {

    constructor(props: P) {
      super(props);
      this.renderWrappedComponent = this.renderWrappedComponent.bind(this);
    }

    renderWrappedComponent( autoComplete: AutoCompleteBags ) {
      return <WrappedComponent { ...this.props } autoComplete={ autoComplete } />
    }

    render() {
      return (
        <AutoComplete observable={ this.props.observable } render={ this.renderWrappedComponent }/>
      );
    }
  }
}


