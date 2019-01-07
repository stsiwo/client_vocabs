import * as React from 'react';
import ControllerItem from '../../base/Controller/ControllerItem';
const deleteIcon = require('./assets/delete.svg');


interface Props {
  className?: string;
}


class DeleteControllerItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDeleteClick(e: React.MouseEvent<HTMLElement>) {
    // check redux store's currentSelectedWords is empty or not
    const isEmpty = true;
    // if empty, show modal warning to make users select at least one word
    if (isEmpty) {
      // check redux store's ui.isSelectModalOpen
      // it must be false; then change to true to open
      // then close button inside the modal is clicked return the value to false;
    } else {
      // check redux store's ui.isDeleteModalOpen
      // it must be false; then change to true to open
      // if user cancel, make ui.isDeleteModalOpen value false
      // if user confirm, remove selected word items from entities 
      //    then ui.isDeleteModalOpen = false;
    }
  }

  render() {
    return (
        <ControllerItem id="delete-controller-item" svgSrc={ deleteIcon } onClick={ this.onDeleteClick }>Delete</ControllerItem>
    );
  }
}

export default DeleteControllerItem;







