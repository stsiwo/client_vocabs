import * as React from 'react';
import styled from './story/styledComponents';
import Header from './base/Header/Header';
import Content from './base/Content/Content';

interface Props {
  className?: string;
}

class App extends React.Component<Props, {}> {
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


export default StyledApp;

