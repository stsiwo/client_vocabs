import * as React from 'react';

interface Props {
  className?: string;
}

class MediaTest extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        test
      </div>
    );
  }
}

export default MediaTest;


