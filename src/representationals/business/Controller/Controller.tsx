import * as React from 'react';
import styled from '../../story/styledComponents';
import ControllerItem from '../../base/Controller/ControllerItem';
import { Vl } from '../../base/common/Line';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
const newIcon = require('./assets/new.svg');
const searchIcon = require('./assets/search.svg');
const sortIcon = require('./assets/sort.svg');
const deleteIcon = require('./assets/delete.svg');
const selectAllIcon = require('./assets/selectAll.svg');

interface Props extends RouteComponentProps<{}> {
  className?: string;
}


class MobileController extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onNewClick = this.onNewClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onSelectAllClick = this.onSelectAllClick.bind(this);
  }

  onNewClick(e: React.MouseEvent<HTMLElement>) {
    // hard coding now, need to fix later
    // guide users to create new word page 
    // should url be "word/detail" or "word/new"??
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

  onEditClick(e: React.MouseEvent<HTMLElement>) {
    // check redux store's currentSelectedWords is empty or not
    const isEmpty = true;
    // if empty, show modal warning to make users select at least one word
    if (isEmpty) {
      // check redux store's ui.isSelectModalOpen
      // it must be false; then change to true to open
      // then close button inside the modal is clicked return the value to false;
    } else {
      // pick currentSelectedWords array 
      // parse to query string then send to "/word/detail?id=1&..." using below
      this.props.history.push('/word/detail?id=1&id=2&id=3'); 

    }
  }

  onSearchClick(e: React.MouseEvent<HTMLElement>) {
    // check redux store's currentSearchModal (false) 
    // to open search bar, make it true.
    // user can search a particular search in word list
    // refer to SearchModal component 
  }

  onSelectAllClick(e: React.MouseEvent<HTMLElement>) {
    // select all item in wordlist, means fill all word ids in redux store's currentSelectedWords array  
    // if "select all" icon clicked after the first click, means unselect all word id (emptify currentSelectedWords array)
  }

  render() {
    return (
      <div className={ this.props.className }>
        <ControllerItem svgSrc={ newIcon } onClick={ this.onNewClick }>New</ControllerItem>
        <Vl />
        <ControllerItem svgSrc={ deleteIcon }>Delete</ControllerItem>
        <Vl />
        <ControllerItem svgSrc={ sortIcon }>Sort</ControllerItem>
        <Vl />
        <ControllerItem svgSrc={ searchIcon }>Search</ControllerItem>
        <Vl />
        <ControllerItem svgSrc={ selectAllIcon }>Select All</ControllerItem>
      </div>
    );
  }
}

const StyleMobileController = styled(MobileController)`
  position: fixed;
  bottom: ${( props ) => props.theme.bottomBarHeightMargin };
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 35px;
  box-shadow: 1px 1px 1px;
  padding: 3px 15px;
  background-color: ${( props ) => props.theme.secondaryColor };

  width: ${ (props) => props.theme.sizes.mobileS };
  height: ${( props ) => props.theme.bottomBarHeight };
`;

export default withRouter(StyleMobileController);





