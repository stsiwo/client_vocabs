import * as React from 'react';
import styled from '../../story/styledComponents';
import Home from '../../business/Home/Home';
import WordCont from '../../../containers/WordCont';
import Dictionary from '../../business/Dictionary/Dictionary';
import { withRouter, Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps { 
  className?: string;
}

class Content extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  /**
   * Warning: Failed prop type: Invalid prop `component` of type `object` supplied to `Route`, expected `function`.
   *  - this error occurs when use "component" props in Route. I have no idea why this happened
   *  - so for now, I use "component" props even though error, it works properly 
   **/
  render() {
    return (
      <div className={ this.props.className } >
        <Route exact path="/" /*component={Home}*/ render={ () => <Home /> } /> 
        <Route path="/word" /*component={WordCont}*/ render={ () => <WordCont /> } /> 
        <Route path="/dictionary" /*component={Dictionary}*/ render={ () => <Dictionary /> } /> 
      </div>
    );
  }
}

const StyledContent = styled(Content)`
  position: relative;
  top: ${( props ) => props.theme.headerHeight };
`;


/**
 * need to wrap with withRouter HOC because pure component blocking route update
 **/
export default withRouter(StyledContent);



