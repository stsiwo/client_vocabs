import * as React from 'react';
import withObservable from '../Hoc/Observable/withObservable';
import { ObservableImpls, ObservableBags } from '../Hoc/Observable/type';
import withAutoComplete from '../Hoc/AutoComplete/withAutoComplete';
import { AutoCompleteBags } from '../Hoc/AutoComplete/type';
const debug = require('debug')('WordName');

interface Props {
  className?: string;
}

interface PropsWithObservable {
  observable: ObservableBags;
}

interface PropsWithObservableAndAutoComplete extends PropsWithObservable {
  autoComplete: AutoCompleteBags;
}
  

class WordName extends React.PureComponent<PropsWithObservableAndAutoComplete, {}> {
  constructor(props: PropsWithObservableAndAutoComplete) {
    super(props);
  }

  render() {
    debug
    return (
      <input type="text" ref={( node: Node ) => this.props.observable.targetRef.node = node } />
    );
  }
}

export default withObservable<Props>(
  withAutoComplete<PropsWithObservable>(WordName),
  ObservableImpls.WordNameInputObservable
);
