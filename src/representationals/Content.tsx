import * as React from 'react';
import styled from './story/styledComponents';
import Home from './Home';
import About from './About';
import Word from './Word';
import Dictionary from './Dictionary';

import { Route } from 'react-router-dom';

interface Props {
  className?: string;
}

class Content extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/about" component={About} /> 
        <Route exact path="/word" component={Word} /> 
        <Route exact path="/dictionary" component={Dictionary} /> 
      </div>
    );
  }
}

const StyledContent = styled(Content)`
`;


export default StyledContent;


