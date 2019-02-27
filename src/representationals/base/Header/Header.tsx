import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../Icon/Icon';
import NavBarCont from '../../../containers/NavBar/NavBarCont';
const settingIcon = require('./assets/setting.svg');

interface Props {
  className?: string;
}

interface State {
   isNavBarOpen: boolean;
}

class Header extends React.PureComponent<Props, State> {
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
        <NavBarCont isOpen={ this.state.isNavBarOpen }/>
        <Icon id="navToggle" svgSrc={ settingIcon } onClick={ this.handleClick }></Icon>
      </header>
    );
  }
}


const StyledHeader = styled(Header)`
  background-color: ${( props ) => props.theme.secondaryColor };
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 4;

  height: ${( props ) => props.theme.headerHeight };
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  & > div:first-child {
    flex-basis: 50px;
  }

  & > div:last-child {
    flex-basis: 50px;

    @media (max-width: ${( props ) => props.theme.sizes.mobileL}px) {
      display: block;
    }

    @media (min-width: ${( props ) => props.theme.sizes.mobileL + 1 }px) {
      display: none;
    }

  }
`;


export default StyledHeader;

