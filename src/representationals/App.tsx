import * as React from 'react';
import styled from './story/styledComponents';
import HeaderCont from '../containers/HeaderCont';
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
      <React.Fragment>
        <HeaderCont />
        <Content />
      </React.Fragment>
    );
  }
}

const StyledApp = styled(App)`
`;


export default withRouter(StyledApp);

