import * as React from 'react';
import Child from './Child';

interface Props {
  test: number;
}

class Test extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent() {
  }


  render() {
    return (
      <div id="test">
        <Child child="child" />
        <ul id="test-ul">
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
      </div>
    );
  }
}

export default Test;

