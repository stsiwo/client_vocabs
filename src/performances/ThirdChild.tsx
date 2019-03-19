import * as React from 'react';

interface Props {
  name: string;
}

interface State {
  thirdState: string;
}

class ThirdChild extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      thirdState: "third state",
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ thirdState: "chanded" });
  }

  componentWillUpdate() {
    console.log("ThirdChild will update");
  }

  componentWillReceiveProps() {
    console.log("ThirdChild will receive props");
  }

  componentWillUnmount() {
    console.log("ThirdChild will be unmounted soon");
  }

  componentWillMount() {
    console.log("ThirdChild will be mounted soon");
  }

  componentDidMount() {
    console.log("ThirdChild mounted");
  }

  render() {
    console.log("ThirdChild is being rendering");
    return (
      <div>
        <div>third child</div>
        <div>{ this.state.thirdState }</div>
        <button onClick={ this.handleClick }>ClickMeThirdState</button>
      </div>
    );
  }
}

export default ThirdChild;





