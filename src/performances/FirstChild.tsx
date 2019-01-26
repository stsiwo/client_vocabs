import * as React from 'react';

interface Props {
  name: string;
}

class FirstChild extends React.PureComponent<Props, {}> {
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
      <div>{ this.props.name }</div>
    );
  }
}

export default FirstChild;



