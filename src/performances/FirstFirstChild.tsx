import * as React from 'react';

interface Props {
  name: string;
}

class FirstFirstChild extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  componentWillUpdate() {
    console.log("FirstFirstChild will update");
  }

  componentWillReceiveProps() {
    console.log("FirstFirstChild will receive props");
  }

  componentWillUnmount() {
    console.log("FirstFirstChild will be unmounted soon");
  }

  componentWillMount() {
    console.log("FirstFirstChild will be mounted soon");
  }

  componentDidMount() {
    console.log("FirstFirstChild mounted");
  }

  render() {
    console.log("FirstFirstChild is being rendering");
    return (
      <div>{ this.props.name }</div>
    );
  }
}

export default FirstFirstChild;




