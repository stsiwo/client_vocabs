import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../../base/Icon/Icon';
import { Hl } from '../../base/common/Line';
import { ThemeInterface } from '../../story/theme'; 
import { NavLink } from 'react-router-dom'; 
const settingIcon = require('./assets/setting.svg');
import { RouteComponentProps } from 'react-router-dom';
import SignUpModalCont from '../../../containers/SignUpModalCont';

interface Props extends RouteComponentProps {
  className?: string;
  isOpen?: boolean;
  wordFormError: boolean;
  linkClick: (pushCallback: ( path: string ) => void) => void;
  signupClick: () => void;
  isSignUpModalOpen: boolean;
}

class NavBar extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleLink = this.handleLink.bind(this);
    this.displaySignUpForm = this.displaySignUpForm.bind(this);
  }

  handleLink(e: React.MouseEvent<HTMLElement>) {
    // disable built-in NavLink href redirect
    e.preventDefault();
    this.props.linkClick(this.props.history.push);
  }

  displaySignUpForm(e: React.MouseEvent<HTMLElement>) {
    // disable built-in NavLink href redirect
    e.preventDefault();
    this.props.signupClick();
  }

  render() {
    return (
      <div>
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
          <NavLink to="/signup" onClick={ this.displaySignUpForm }>
            <Icon svgSrc={ settingIcon } hidden={ !this.props.isOpen }/>
            <h4>Sign Up</h4>
          </NavLink>
        </nav>
        {( this.props.isSignUpModalOpen && <SignUpModalCont /> )}
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

