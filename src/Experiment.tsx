import * as React from 'react';
import withObservable from './withObservable';

/**
 * Producer: input text
 * Observable: in this case, observer is the only one, so Observable is enough
 **/
interface Suggestion {
  id: number;
  word: string;
}

interface ObservableProps {
  input: string;
  result: Suggestion[];
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Props {
  extra: string; // from withObservable props...
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface PropsWithObservable extends Props {
  observable: ObservableProps;
}

class Experiment extends React.PureComponent<PropsWithObservable, {}> {
  constructor(props: PropsWithObservable) {
    super(props);
    this.renderAutoComplete = this.renderAutoComplete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  renderAutoComplete() {
    return this.props.observable.result.map(( suggestion: Suggestion ) => <div key={ suggestion.id }>{ suggestion.word }</div>);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onChange(e);
    this.props.observable.inputHandler(e);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="input here" value={ this.props.observable.input } onChange={ this.handleChange }/>
        <div>{ this.renderAutoComplete() }</div>
        <div>{ this.props.extra }</div>
      </div>
    );
  }
}

export default withObservable<Props>(Experiment); 


