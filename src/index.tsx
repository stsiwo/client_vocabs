import * as React from "react";
import * as ReactDOM from "react-dom";

interface Props {
}

interface State {
  isLoading: boolean,
  data: Data
}

interface Data {
  name: string
}

class MyComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: false,
      data: { 
        name: "default" 
      }
    }
    this.handleFetch = this.handleFetch.bind(this);
  }
  handleFetch() {

  } 
  render() {
    const { isLoading, data } = this.state;

    if (isLoading) return <div>loading....</div>;
    if (!isLoading) return <div>{data.name}</div>;
  }
}
 
ReactDOM.render(<MyComponent />, document.getElementById('root'));
