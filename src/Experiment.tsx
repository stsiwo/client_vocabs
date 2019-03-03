import * as React from 'react';

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
  observable: ObservableProps;
  extra: string; // from withObservable props...
}

class Experiment extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.renderAutoComplete = this.renderAutoComplete.bind(this);
  }

  renderAutoComplete() {
    return this.props.observable.result.map(( suggestion: Suggestion ) => <div key={ suggestion.id }>{ suggestion.word }</div>);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="input here" value={ this.props.observable.input } onChange={ this.props.observable.inputHandler }/>
        { this.props.observable.input && <div>{ this.renderAutoComplete() }</div> }
        <div>{ this.props.extra }</div>
      </div>
    );
  }
}

export default Experiment; 


