import * as React from 'react';
import styled from './story/styledComponents';
import Header from './Header';
import Content from './Content';

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

