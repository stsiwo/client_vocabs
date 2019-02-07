import * as React from 'react';
//import styled from '../../story/styledComponents';
import ControllerItem from '../../base/Controller/ControllerItem';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
const editIcon = require('./assets/edit.svg');


interface Props extends RouteComponentProps<{}> {
  className?: string;
  moveToEditPageClick: (pushCallback: ( path: string ) => void ) => void;
}

class EditControllerItem extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onEditClick = this.onEditClick.bind(this);
  }

  onEditClick(e: React.MouseEvent<HTMLElement>) {
    this.props.moveToEditPageClick(this.props.history.push);
  }

  render() {
    return (
        <ControllerItem svgSrc={ editIcon } onClick={ this.onEditClick }>Edit</ControllerItem>
    );
  }
}


export default withRouter(EditControllerItem);







