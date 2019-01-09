import * as React from 'react';
import ControllerItem from '../../base/Controller/ControllerItem';
import { toggleClickType } from '../../../containers/type';
const deleteIcon = require('./assets/delete.svg');


interface Props {
  className?: string;
  isSelectedWordListEmpty: boolean;
  toggleDeleteConfirmModalClick: toggleClickType;
  toggleSelectWarningModalClick: toggleClickType;
}


class DeleteControllerItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDeleteClick(e: React.MouseEvent<HTMLElement>) {
    // check redux store's currentSelectedWords is empty or not
    // if empty, show modal warning to make users select at least one word
    if (this.props.isSelectedWordListEmpty) {
      // check redux store's ui.isSelectModalOpen
      // it must be false; then change to true to open
      // then close button inside the modal is clicked return the value to false;
      this.props.toggleSelectWarningModalClick(true);
    } else {
      // check redux store's ui.isDeleteModalOpen
      // it must be false; then change to true to open
      this.props.toggleDeleteConfirmModalClick(true);
    }
  }

  render() {
    return (
        <ControllerItem svgSrc={ deleteIcon } onClick={ this.onDeleteClick }>Delete</ControllerItem>
    );
  }
}

export default DeleteControllerItem;







