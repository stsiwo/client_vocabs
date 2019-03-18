import * as React from 'react';
import ControllerItem from '../../base/Controller/ControllerItem';
const deleteIcon = require('./assets/delete.svg');


interface Props {
  className?: string;
  deleteWordClick: () => void;
}

/**
 * #REFACTOR (ticket#9) 
 *  - it is impossible to delete word which is newly created (just click the "new" controller and it does not saved yet)
 *  - this because "delete" and other opeartion has different implementation. ex, if user click "new" or modify the word form, those changes are not saved immediately. rather wait for the user clicking 'save' button. on the other hand, "delete" is immediate saving, which means that when user click "delete" button, app automatically save the change in redux state and remote.
 *  - for future, i think those operation should be consistent.
 **/

export class DeleteControllerItem extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDeleteClick(e: React.MouseEvent<HTMLElement>) {
    this.props.deleteWordClick();
  }

  render() {
    return (
        <ControllerItem svgSrc={ deleteIcon } onClick={ this.onDeleteClick }>Delete</ControllerItem>
    );
  }
}

export default DeleteControllerItem;







