import * as React from 'react';

interface Props {
}

interface State {
}

class YOUR_COMPONENT extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent() {
  }


  render() {
    return (
      <div>your component</div>
    );
  }
}

export default YOUR_COMPONENT;
