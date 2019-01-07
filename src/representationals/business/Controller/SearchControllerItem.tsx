import * as React from 'react';
import ControllerItem from '../../base/Controller/ControllerItem';
import { toggleClickType } from '../../../containers/type';
const searchIcon = require('./assets/search.svg');


interface Props {
  className?: string;
  toggleSearchWordModalClick: toggleClickType;
  isSearchWordModalOpen: boolean;
}


class SearchControllerItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onSearchClick = this.onSearchClick.bind(this);
  }

  onSearchClick(e: React.MouseEvent<HTMLElement>) {
    // check redux store's currentSearchModal (false) 
    // to open search bar, make it true.
    // user can search a particular search in word list
    // refer to SearchModal component 
    this.props.toggleSearchWordModalClick(!this.props.isSearchWordModalOpen)
  }

  render() {
    return (
        <ControllerItem id="search-controller-item" svgSrc={ searchIcon } onClick={ this.onSearchClick }>Search</ControllerItem>
    );
  }
}

export default SearchControllerItem;







