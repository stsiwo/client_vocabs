import * as React from 'react';

class FirstChild extends React.Component</*Props*/{}, {}> {
  constructor(props: {}/*Props*/) {
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
      <div>first child</div>
    );
  }
}

export default FirstChild;



