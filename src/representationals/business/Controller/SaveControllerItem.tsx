import * as React from 'react';
import ControllerItem from '../../base/Controller/ControllerItem';
const saveIcon = require('./assets/save.svg');

interface Props {
  className?: string;
}

class SaveControllerItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  onSaveClick(e: React.MouseEvent<HTMLElement>) {
  }

  render() {
    return (
        <ControllerItem id="save-controller-item" svgSrc={ saveIcon } onClick={ this.onSaveClick }>Save</ControllerItem>
    );
  }
}

export default SaveControllerItem;








