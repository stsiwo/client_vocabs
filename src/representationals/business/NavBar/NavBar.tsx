import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../../base/Icon/Icon';
import { Hl } from '../../base/common/Line';
import { ThemeInterface } from '../../story/theme'; 
import { NavLink } from 'react-router-dom'; 
const settingIcon = require('./assets/setting.svg');
import SignUpModalCont from '../../../containers/SignUpModalCont';
import LoginModalCont from '../../../containers/LoginModalCont';

interface Props {
  className?: string;
  isOpen?: boolean;
  isLogin: boolean;
  wordFormError: boolean;
  linkClick: (path: string) => void;
  signupClick: () => void;
  loginClick: () => void;
  isSignUpModalOpen: boolean;
  isLoginModalOpen: boolean;
  logoutClick: () => void;
}

class NavBar extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleLink = this.handleLink.bind(this);
    this.displaySignUpForm = this.displaySignUpForm.bind(this);
    this.displayLoginForm = this.displayLoginForm.bind(this);
    this.logoutClick = this.logoutClick.bind(this);
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

  displaySignUpForm(e: React.MouseEvent<HTMLElement>) {
    // disable built-in NavLink href redirect
    e.preventDefault();
    this.props.signupClick();
  }

  displayLoginForm(e: React.MouseEvent<HTMLElement>) {
    // disable built-in NavLink href redirect
    e.preventDefault();
    this.props.loginClick();
  }

  logoutClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    this.props.logoutClick();
  }

  render() {
    return (
      <div>
        {( this.props.isLogin && 
          <nav className={ this.props.className }>
            <NavLink to="/word" onClick={ this.handleLink }>
              <Icon svgSrc={ settingIcon } hidden={ !this.props.isOpen }/>
              <h4>Word</h4>
            </NavLink>
            <Hl />
            <NavLink to="/dictionary" onClick={ this.handleLink }>
              <Icon svgSrc={ settingIcon } hidden={ !this.props.isOpen }/>
              <h4>Dictionary</h4>
            </NavLink>
            <Hl />
            <NavLink to="/logout" onClick={ this.logoutClick }>
              <Icon svgSrc={ settingIcon } hidden={ !this.props.isOpen }/>
              <h4>Logout</h4>
            </NavLink>
          </nav>
        )}
        {( !this.props.isLogin && 
          <nav className={ this.props.className }>
            <NavLink to="/signup" onClick={ this.displaySignUpForm }>
              <Icon svgSrc={ settingIcon } hidden={ !this.props.isOpen }/>
              <h4>Sign Up</h4>
            </NavLink>
            <Hl />
            <NavLink to="/login" onClick={ this.displayLoginForm }>
              <Icon svgSrc={ settingIcon } hidden={ !this.props.isOpen }/>
              <h4>Login</h4>
            </NavLink>
          </nav>
        )}
        {( this.props.isSignUpModalOpen && <SignUpModalCont /> )}
        {( this.props.isLoginModalOpen && <LoginModalCont /> )}
      </div>
   );
  }
}

interface IStyledProps extends Props {
  theme: ThemeInterface;
}
  

const StyledNavBar = styled(NavBar)`
  @media (max-width: ${( props ) => props.theme.sizes.mobileL }px) {
    font-family: ${( props: IStyledProps ) => props.theme.primaryFontFamily };
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.1);
    position: fixed;
    top: ${( props: IStyledProps ) => props.theme.headerHeight };
    right: 0;
    ${( props: IStyledProps ) => {
       if (props.isOpen) {
         return 'width: ' + props.theme.navBarWidth +'; transition: width 0.5s;';
       } else {
         return 'width: 0; transition: width 0.5s;';
       }
    }}
    & > a, & > div {
      background-color: ${( props: IStyledProps ) => props.theme.secondaryColor };
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      height: 50px;
      padding: 0 20px;

      & > h4 {
        visibility: ${( props: IStyledProps ) => props.isOpen ? 'visible' : 'hidden' };
        white-space: nowrap;
      }
    }
  }

  @media (min-width: ${( props ) => props.theme.sizes.mobileL + 1 }px) {
    display: flex;
    align-items: center;
    justify-content: space-around;

    & > a {
      margin: 0 5px;
    }
  }
`;
StyledNavBar.displayName = "NavBarSelector";


export default StyledNavBar;

