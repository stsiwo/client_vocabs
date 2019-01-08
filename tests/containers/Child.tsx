import * as React from 'react';

interface Props {
  child: string;
}

class Child extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent() {
  }


  render() {
    return (
      <div id="child">
        <h1> child </h1>
      </div>
    );
  }
}

export default Child;


