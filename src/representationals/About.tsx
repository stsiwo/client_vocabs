import * as React from 'react';
import styled from './story/styledComponents';

interface Props {
  className?: string;
}

class About extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        here is about page
      </div>
    );
  }
}

const StyledAbout = styled(About)`
`;


export default StyledAbout;


