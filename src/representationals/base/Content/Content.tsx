import * as React from 'react';
import styled from '../../story/styledComponents';
import { Route } from 'react-router-dom';
import Home from '../../business/Home/Home';
import WordCont from '../../../containers/WordCont';
import Dictionary from '../../business/Dictionary/Dictionary';

interface Props {
  className?: string;
}

class Content extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.className } >
        <Route exact path="/" component={Home} /> 
        <Route path="/word" component={WordCont} /> 
        <Route path="/dictionary" component={Dictionary} /> 
      </div>
    );
  }
}

const StyledContent = styled(Content)`
  position: relative;
  top: ${( props ) => props.theme.headerHeight };
`;


export default StyledContent;



