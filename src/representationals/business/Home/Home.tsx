import * as React from 'react';
import styled from '../../story/styledComponents';

interface Props {
  className?: string;
}

class Home extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        here is home page
      </div>
    );
  }
}

const StyledHome = styled(Home)`
`;
StyledHome.displayName = "HomeSelector";


export default StyledHome;


