import * as React from 'react';
import SecondChild from './SecondChild';

interface CustomRef {
  node: Node;
}

interface Props {
  name: string;
  inputRef: CustomRef;
}

class FirstChild extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  componentWillUpdate() {
    console.log("FirstChild will update");
  }

  componentWillReceiveProps() {
    console.log("FirstChild will receive props");
  }

  componentWillUnmount() {
    console.log("FirstChild will be unmounted soon");
  }

  componentWillMount() {
    console.log("FirstChild will be mounted soon");
  }

  componentDidMount() {
    console.log("FirstChild mounted");
  }

  render() {
    console.log("FirstChild is being rendering");
    return (
      <div>
      <input ref={( node: Node ) => this.props.inputRef.node = node } type='text' />
      <SecondChild name={ this.props.name } />
      </div>
    );
  }
}

export default FirstChild;




