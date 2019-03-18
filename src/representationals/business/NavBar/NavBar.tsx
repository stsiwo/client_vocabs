import * as React from 'react';
import * as ReactDOM from 'react-dom'; 
import styled from '../../story/styledComponents';
import Icon from '../../base/Icon/Icon';
import { Hl } from '../../base/common/Line';
import { ThemeInterface } from '../../story/theme'; 
import { NavLink } from 'react-router-dom'; 
const dropdownIcon = require('./assets/dropdown.svg');
import SignUpModalCont from '../../../containers/SignUpModalCont';
import LoginModalCont from '../../../containers/LoginModalCont';
import { Location } from 'history';

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
  location: Location; 
  onClose: () => void;
  onToggle: (e: React.MouseEvent<HTMLElement>) => void;
}

class NavBar extends React.PureComponent<Props, {}> {

  /**
   * this ref for closing navbar when outside is clicked
   *  - need to fix styled-components, typescript, and ref component issue
   **/
  private IconRef: React.RefObject<any> = React.createRef<any>(); 

  constructor(props: Props) {
    super(props);
    this.handleLink = this.handleLink.bind(this);
    this.displaySignUpForm = this.displaySignUpForm.bind(this);
    this.displayLoginForm = this.displayLoginForm.bind(this);
    this.logoutClick = this.logoutClick.bind(this);
    this.handleCloseOutsideClick = this.handleCloseOutsideClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleCloseOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleCloseOutsideClick);
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

  handleCloseOutsideClick(e: Event) {
    const target = e.target as HTMLElement 
    const IconRootDom = ReactDOM.findDOMNode(this.IconRef.current);
    if (!IconRootDom.contains(target)) 
      this.props.onClose()
  }

  render() {
    return (
      <div className={ this.props.className } >
        <nav>
        {( this.props.isLogin && 
          <React.Fragment>
            <NavLink to="/word" onClick={ this.handleLink }>
              <Icon svgSrc={ dropdownIcon } hidden={ !this.props.isOpen }/>
              <h4>Word</h4>
            </NavLink>
            <Hl />
            <NavLink to="/dictionary" onClick={ this.handleLink }>
              <Icon svgSrc={ dropdownIcon } hidden={ !this.props.isOpen }/>
              <h4>Dictionary</h4>
            </NavLink>
            <Hl />
            <NavLink to="/logout" onClick={ this.logoutClick }>
              <Icon svgSrc={ dropdownIcon } hidden={ !this.props.isOpen }/>
              <h4>Logout</h4>
            </NavLink>
          </React.Fragment>
        )}
        {( !this.props.isLogin && 
          <React.Fragment>
            <NavLink to="/signup" onClick={ this.displaySignUpForm }>
              <Icon svgSrc={ dropdownIcon } hidden={ !this.props.isOpen }/>
              <h4>Sign Up</h4>
            </NavLink>
            <Hl />
            <NavLink to="/login" onClick={ this.displayLoginForm }>
              <Icon svgSrc={ dropdownIcon } hidden={ !this.props.isOpen }/>
              <h4>Login</h4>
            </NavLink>
          </React.Fragment>
        )}
        </nav>
        <Icon 
          id="navToggle" 
          className="nav-toggle-icon" 
          svgSrc={ dropdownIcon } 
          onClick={ this.props.onToggle }
          ref={ this.IconRef }
        />
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

  display: inline-flex; // might be flex
  align-items: center;
  justify-content: space-around;

  & > nav {

    // when screen size is for mobile
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
      // NavLink
      & > a {
        background-color: ${( props: IStyledProps ) => props.theme.secondaryColor };
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        height: 50px;
        padding: 0 20px;

        // text in each NavLink
        & > h4 {
          visibility: ${( props: IStyledProps ) => props.isOpen ? 'visible' : 'hidden' };
          white-space: nowrap;
        }
      }
    }

    // when screen size for more than or equal tablet
    @media (min-width: ${( props ) => props.theme.sizes.mobileL + 1 }px) {
      display: flex;
      align-items: center;
      justify-content: space-around;
      
      // NavLink
      & > a {
        margin: 0 5px;

        // IconWrapper
        & > div {
          display: none;
        }
      }

      
    }
  }

  & > .nav-toggle-icon {
    flex-basis: 50px;

    @media (max-width: ${( props ) => props.theme.sizes.mobileL}px) {
      display: block;
    }

    @media (min-width: ${( props ) => props.theme.sizes.mobileL + 1 }px) {
      display: none;
    }

  }
`;
StyledNavBar.displayName = "NavBarSelector";


export default StyledNavBar;

