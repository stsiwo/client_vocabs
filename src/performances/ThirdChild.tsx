import * as React from 'react';

interface Props {
  name: string;
}


class ThirdChild extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
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
      <div>third child</div>
    );
  }
}

export default ThirdChild;





