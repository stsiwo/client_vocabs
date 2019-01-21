import * as React from 'react';
import ControllerItem from '../../base/Controller/ControllerItem';
const deleteIcon = require('./assets/delete.svg');


interface Props {
  className?: string;
  deleteWordClick: () => void;
}


export class DeleteControllerItem extends React.Component<Props, {}> {
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







