import * as React from 'react';
import styled from '../../story/styledComponents';

interface Props {
  className?: string;
  testFetch: () => void;
  requestWithAT: () => void;
}

class Home extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        here is home page
        <button type="button" onClick={ this.props.testFetch }>Access Token Request</button>
        <button type="button" onClick={ this.props.requestWithAT }>Request With Access Token</button>
      </div>
    );
  }
}

const StyledHome = styled(Home)`
`;
StyledHome.displayName = "HomeSelector";


export default StyledHome;


