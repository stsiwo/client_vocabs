import * as React from 'react';
import styled from './representationals/story/styledComponents';
import MediaQuery from 'react-responsive';

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
        <MediaQuery maxWidth={ 500 }>
          <div> max width is 500 </div>
        </MediaQuery>
        <MediaQuery minWidth={ 501 }>
          <div> min width is 501 </div>
        </MediaQuery>
      </div>
    );
  }
}

const StyledMediaTest = styled(MediaTest)`
`;


export default StyledMediaTest;


