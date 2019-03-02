import * as React from 'react';

/**
 * Producer: input text
 * Observable: in this case, observer is the only one, so Observable is enough
 **/
interface ObservableProps {
  input: string;
  result: string;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Props {
  observable: ObservableProps;
  extra: string; // from withObservable props...
}

class Experiment extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="input here" value={ this.props.observable.input } onChange={ this.props.observable.inputHandler }/>
        <div>{ this.props.observable.result }</div>
        <div>{ this.props.extra }</div>
      </div>
    );
  }
}

export default Experiment; 


