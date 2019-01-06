import * as React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

class MediaTest extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default MediaTest;


