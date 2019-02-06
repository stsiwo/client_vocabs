import * as React from 'react';
import ControllerItem from '../../base/Controller/ControllerItem';
import { selectAllWordDispatchType } from '../../../containers/type';
const selectAllIcon = require('./assets/selectAll.svg');


interface Props {
  className?: string;
  selectAllWordClick: selectAllWordDispatchType; 
}


export class SelectAllControllerItem extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onSelectAllClick = this.onSelectAllClick.bind(this);
  }

  onSelectAllClick(e: React.MouseEvent<HTMLElement>) {
    // select all item in wordlist, means fill all word ids in redux store's currentSelectedWords array  
    // if "select all" icon clicked after the first click, means unselect all word id (emptify currentSelectedWords array)
    this.props.selectAllWordClick();
  }

  render() {
    return (
        <ControllerItem svgSrc={ selectAllIcon } onClick={ this.onSelectAllClick }>SelectAll</ControllerItem>
    );
  }
}

export default SelectAllControllerItem;





