import * as React from 'react';
//import styled from '../../story/styledComponents';
import ControllerItem from '../../base/Controller/ControllerItem';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
const editIcon = require('./assets/edit.svg');


interface Props extends RouteComponentProps<{}> {
  className?: string;
}


class EditControllerItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onEditClick = this.onEditClick.bind(this);
  }

  onEditClick(e: React.MouseEvent<HTMLElement>) {
    // check redux store's currentSelectedWords is empty or not
    const isEmpty = true;
    // if empty, show modal warning to make users select at least one word
    if (isEmpty) {
      // check redux store's ui.isSelectModalOpen
      // it must be false; then change to true to open
      // then close button inside the modal is clicked return the value to false;
    } else {
      // pick currentSelectedWords array 
      // parse to query string then send to "/word/detail?id=1&..." using below
      this.props.history.push('/word/detail?id=1&id=2&id=3'); 

    }
  }

  render() {
    return (
        <ControllerItem svgSrc={ editIcon } onClick={ this.onEditClick }>Edit</ControllerItem>
    );
  }
}


export default withRouter(EditControllerItem);







