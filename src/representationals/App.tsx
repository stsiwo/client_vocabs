import * as React from 'react';
import styled from './story/styledComponents';
import Header from './base/Header/Header';
import Content from './base/Content/Content';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
  className?: string;
}

class App extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

const StyledApp = styled(App)`
`;


export default withRouter(StyledApp);

