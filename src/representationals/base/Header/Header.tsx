import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../Icon/Icon';
import NavBar from './NavBar';
const settingIcon = require('./assets/setting.svg');

interface Props {
  className?: string;
}

interface State {
   isNavBarOpen: boolean;
}

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isNavBarOpen: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(): void {
    const currentStatus = this.state.isNavBarOpen;
    this.setState({ isNavBarOpen: !currentStatus });
  }

  render() {
    return (
      <header className={ this.props.className }>
        <Icon svgSrc={ settingIcon }></Icon>
        <h2>Title</h2>
        <NavBar isOpen={ this.state.isNavBarOpen }/>
        <Icon svgSrc={ settingIcon } onClick={ this.handleClick }></Icon>
      </header>
    );
  }
}


const StyledHeader = styled(Header)`
  background-color: ${( props ) => props.theme.secondaryColor };
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${( props ) => props.theme.headerHeight };
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  & > div:first-child {
    flex-basis: 50px;
  }

  & > h2 {
  }

  & > div:last-child {
    flex-basis: 50px;
  }
`;


export default StyledHeader;

