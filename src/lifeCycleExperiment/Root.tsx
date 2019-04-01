import * as React from 'react';
import FirstChild from './FirstChild';

interface Props {
  name: string;
}

interface CustomRef {
  node: Node;
}

class Root extends React.Component<Props, {}> {

  private myRef: CustomRef = { node: null }

  constructor(props: Props) {
    super(props);
  }

  componentWillUpdate() {
    console.log("Root will update");
  }

  componentWillReceiveProps() {
    console.log("Root will receive props");
  }

  componentWillUnmount() {
    console.log("Root will be unmounted soon");
  }

  componentWillMount() {
    console.log("Root will be mounted soon");
  }

  componentDidMount() {
    console.log("Root mounted");
    console.log(this.myRef);
  }

  render() {
    console.log("Root is being rendering");
    return (
      <FirstChild name={ this.props.name } inputRef={ this.myRef } />
    );
  }
}

export default Root;





