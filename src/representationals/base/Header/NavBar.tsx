import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../Icon/Icon';
import { Hl } from '../common/Line';
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
        <a href="">
          <Icon svgSrc={ settingIcon } hidden={ !this.props.isOpen }/>
          <h4>Home</h4>
        </a>
        <Hl />
        <a href="">
          <Icon svgSrc={ settingIcon } hidden={ !this.props.isOpen }/>
          <h4>Word</h4>
        </a>
      </nav>
   );
  }
}
const StyledNavBar = styled(NavBar)`
  font-family: ${( props ) => props.theme.primaryFontFamily };
  display: inline-block;
  // change this when production to fit screen height
  height: 500px;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: ${( props ) => props.theme.headerHeight };
  right: 0;
  ${( props ) => {
     if (props.isOpen) {
       return 'width: ' + props.theme.navBarWidth +'; transition: width 0.5s;';
     } else {
       return 'width: 0; transition: width 0.5s;';
     }
  }}
  & > a {
    background-color: ${( props ) => props.theme.secondaryColor };
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    height: 50px;
    padding: 0 20px;
  }

  & > a > h4 {
    visibility: ${( props ) => props.isOpen ? 'visible' : 'hidden' };
  }
`;


export default StyledNavBar;

