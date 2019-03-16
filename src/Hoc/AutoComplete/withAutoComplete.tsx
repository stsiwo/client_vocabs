import * as React from 'react';
import AutoComplete from './AutoComplete';
import { AutoCompleteBags } from './type';

interface AutoCompleteProps {
  autoComplete: AutoCompleteBags;
}

export default function withAutoComplete<P extends {}>( WrappedComponent: React.ComponentType<P & AutoCompleteProps> ) {
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
        <AutoComplete render={ this.renderWrappedComponent }/>
      );
    }
  }
}


