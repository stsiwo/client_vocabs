import * as React from "react";
import * as ReactDOM from "react-dom";


interface State {
  isLoading: boolean,
  data: Data
}

interface Data {
  name: string
}

class MyComponent extends React.Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoading: false,
      data: { 
        name: "default" 
      }
    }
    this.handleFetch = this.handleFetch.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
  }
  public handleFetch() {
    const { isLoading, data } = this.state;
    this.setState({ isLoading: true }); 
    fetch("http://localhost/api/").then(( res ) => {
      res.json().then(( json ) => { 
        if (!res.ok) return Promise.reject(json);
        this.setState({ data: json, isLoading: false });
      });
    });
  } 
  public renderLoading() {
    return (
        <div>loading....</div>
    );
  }
  public render() {
    const { isLoading, data } = this.state;
    if ( isLoading ) return this.renderLoading();
    return (
      <div>
        <button onClick={this.handleFetch}>Click Me</button>
        <div>{data.name}</div>
      </div>
    );
  }
}
 
ReactDOM.render(<MyComponent />, document.getElementById('root'));
