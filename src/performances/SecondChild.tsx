import * as React from 'react';

class SecondChild extends React.Component</*Props*/{}, {}> {
  constructor(props: {}/*Props*/) {
    super(props);
  }

  componentWillUpdate() {
    console.log("SecondChild will update");
  }

  componentWillReceiveProps() {
    console.log("SecondChild will receive props");
  }

  componentWillUnmount() {
    console.log("SecondChild will be unmounted soon");
  }

  componentWillMount() {
    console.log("SecondChild will be mounted soon");
  }

  componentDidMount() {
    console.log("SecondChild mounted");
  }

  render() {
    console.log("SecondChild is being rendering");
    return (
      <div>second child</div>
    );
  }
}

export default SecondChild;



