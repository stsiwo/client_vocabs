import * as React from 'react';
//import styled from '../../story/styledComponents';
import ControllerItem from '../../base/Controller/ControllerItem';
//import { withRouter } from 'react-router-dom';
//import { RouteComponentProps } from 'react-router-dom';
import { toggleClickType } from '../../../containers/type'; 
const sortIcon = require('./assets/sort.svg');



interface Props /*extends RouteComponentProps<{}>*/ {
  className?: string;
  isSortFilterModalOpen: boolean;
  toggleSortFilterModalClick: toggleClickType;
}


export class SortFilterControllerItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onSortFilterClick = this.onSortFilterClick.bind(this);
  }

  onSortFilterClick(e: React.MouseEvent<HTMLElement>) {
    // check redux store's ui.isSortFilterModalOpen (default: false)
    // make it true to open sort filter modal open
    this.props.toggleSortFilterModalClick(!this.props.isSortFilterModalOpen)
  }

  render() {
    return (
        <ControllerItem svgSrc={ sortIcon } onClick={ this.onSortFilterClick }>Sort & Filter</ControllerItem>
    );
  }
}

export default SortFilterControllerItem;
