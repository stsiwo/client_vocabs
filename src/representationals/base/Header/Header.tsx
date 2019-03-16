import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../Icon/Icon';
import NavBarCont from '../../../containers/NavBar/NavBarCont';
import { NavLink } from 'react-router-dom'; 
import { RouteComponentProps, withRouter } from 'react-router-dom';
const settingIcon = require('./assets/setting.svg');

interface Props extends RouteComponentProps {
  className?: string;
  linkClick: ( path: string ) => void;
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
    this.handleLink = this.handleLink.bind(this);
  }

  handleClick(): void {
    const currentStatus = this.state.isNavBarOpen;
    this.setState({ isNavBarOpen: !currentStatus });
  }

  handleLink(e: React.MouseEvent<HTMLElement>) {
    // disable built-in NavLink href redirect
    e.preventDefault();
     //get target <a>
    const target = e.currentTarget as HTMLAnchorElement
    // filter url; http://localhost:9000/word => /word
    const path = target.href.substr(target.href.lastIndexOf('/'));
     //pass to thunk
    this.props.linkClick(path);
  }
  /**
   * location props to avoid blocking-update problem wit purecomponent and react router 
   **/
  render() {
    return (
      <header className={ this.props.className }>
        <NavLink to="/" onClick={ this.handleLink }>
          <Icon svgSrc={ settingIcon }></Icon>
        </NavLink>
        <NavBarCont isOpen={ this.state.isNavBarOpen } location={ this.props.location } onClose={ this.handleClick }/>
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


/**
 * withRouter is to avoid blocking-update problems with pureComponent and react-router-dom
 **/
export default withRouter(StyledHeader);

