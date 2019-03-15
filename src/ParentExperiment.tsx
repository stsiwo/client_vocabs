import * as React from 'react';
import Experiment from './Experiment';

/**
 * Producer: input text
 * Observable: in this case, observer is the only one, so Observable is enough
 **/
interface State {
  input: string;
}

class ParentExperiment extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      input: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div>
        <Experiment extra="hey" onChange={ this.handleInputChange } />
      </div>
    );
  }
}

export default ParentExperiment; 



