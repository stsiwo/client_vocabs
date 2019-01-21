import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../Icon/Icon';
import { Hl } from '../common/Line';
import { ThemeInterface } from '../../story/theme'; 
import { NavLink } from 'react-router-dom'; 
const settingIcon = require('./assets/setting.svg');

interface Props {
  className?: string;
  isOpen?: boolean;
}

class NavBar extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  handleChange(): void {

  }

  render() {
    return (
      <nav className={ this.props.className }>
      <NavLink to="/word" >
        <Icon svgSrc={ settingIcon } hidden={ !this.props.isOpen }/>
        <h4>Word</h4>
      </NavLink>
      <Hl />
      <NavLink to="/dictionary">
        <Icon svgSrc={ settingIcon } hidden={ !this.props.isOpen }/>
        <h4>Dictionary</h4>
      </NavLink>
      </nav>
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
    & > a {
      background-color: ${( props: IStyledProps ) => props.theme.secondaryColor };
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      height: 50px;
      padding: 0 20px;
    }

    & > a > h4 {
      visibility: ${( props: IStyledProps ) => props.isOpen ? 'visible' : 'hidden' };
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


export default StyledNavBar;

