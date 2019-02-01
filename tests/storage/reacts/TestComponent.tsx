import * as React from 'react';

interface MyMap {
  name: string;
}

interface Props {
  array: number[];
  map: MyMap;
}

class TestComponent extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.renderElement = this.renderElement.bind(this);
  }

  renderElement() {
    return this.props.array.map(( ele: number ) => <div>{ ele }</div>) 
  }


  render() {
    return (
      <div>
        { this.renderElement() }
        <div>{ this.props.map.name }</div>
      </div>
    )
  }
}

export default TestComponent;

