import * as React from 'react';
//import styled from '../../story/styledComponents';
import ControllerItem from '../../base/Controller/ControllerItem';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { toggleClickType } from '../../../containers/type';
const editIcon = require('./assets/edit.svg');


interface Props extends RouteComponentProps<{}> {
  className?: string;
  isSelectedWordListEmpty: boolean;
  toggleSelectWarningModalClick: toggleClickType;
  closeSearchWordModalClick: () => void; 
}

class EditControllerItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onEditClick = this.onEditClick.bind(this);
  }

  onEditClick(e: React.MouseEvent<HTMLElement>) {
    // if search word modal is opened, close it
    this.props.closeSearchWordModalClick();
    // check redux store's currentSelectedWords is empty or not
    // if empty, show modal warning to make users select at least one word
    if (this.props.isSelectedWordListEmpty) {
      // check redux store's ui.isSelectModalOpen
      // it must be false; then change to true to open
      // then close button inside the modal is clicked return the value to false;
      this.props.toggleSelectWarningModalClick(true);
    } else {
      // pick currentSelectedWords array 
      // parse to query string then send to "/word/detail?id=1&..." using below
      this.props.history.push('/word/detail'); 
    }
  }

  render() {
    return (
        <ControllerItem svgSrc={ editIcon } onClick={ this.onEditClick }>Edit</ControllerItem>
    );
  }
}


export default withRouter(EditControllerItem);







