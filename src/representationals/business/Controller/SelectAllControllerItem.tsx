import * as React from 'react';
import ControllerItem from '../../base/Controller/ControllerItem';
const selectAllIcon = require('./assets/selectAll.svg');


interface Props {
  className?: string;
}


class SelectAllControllerItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onSelectAllClick = this.onSelectAllClick.bind(this);
  }

  onSelectAllClick(e: React.MouseEvent<HTMLElement>) {
    // select all item in wordlist, means fill all word ids in redux store's currentSelectedWords array  
    // if "select all" icon clicked after the first click, means unselect all word id (emptify currentSelectedWords array)
  }

  render() {
    return (
        <ControllerItem id="selectall-controller-item" svgSrc={ selectAllIcon } onClick={ this.onSelectAllClick }>SelectAll</ControllerItem>
    );
  }
}

export default SelectAllControllerItem;





