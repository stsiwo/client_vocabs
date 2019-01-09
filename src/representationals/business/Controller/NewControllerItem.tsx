import * as React from 'react';
//import styled from '../../story/styledComponents';
import ControllerItem from '../../base/Controller/ControllerItem';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
const newIcon = require('./assets/new.svg');


interface Props extends RouteComponentProps<{}> {
  className?: string;
}


class NewControllerItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onNewClick = this.onNewClick.bind(this);
  }

  onNewClick(e: React.MouseEvent<HTMLElement>) {
    // hard coding now, need to fix later
    // guide users to create new word page 
    // should url be "word/detail" or "word/new"??
    // in large screen, when users click "new" icon, append new wordform tree in bottom
    this.props.history.push('/word/detail');
  }

  render() {
    return (
        <ControllerItem svgSrc={ newIcon } onClick={ this.onNewClick }>New</ControllerItem>
    );
  }
}

export default withRouter(NewControllerItem);
//const StyleNewControllerItem = styled(NewControllerItem)`
  //position: fixed;
  //bottom: ${( props ) => props.theme.bottomBarHeightMargin };
  //left: 50%;
  //transform: translateX(-50%);
  //display: flex;
  //align-items: center;
  //justify-content: space-around;
  //border-radius: 35px;
  //box-shadow: 1px 1px 1px;
  //padding: 3px 15px;
  //background-color: ${( props ) => props.theme.secondaryColor };

  //width: ${ (props) => props.theme.sizes.mobileS };
  //height: ${( props ) => props.theme.bottomBarHeight };
//`;

//export default withRouter(StyleNewControllerItem);






