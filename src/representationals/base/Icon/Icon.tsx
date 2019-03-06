import * as React from 'react';
import styled, { css } from '../../story/styledComponents';

/**
 * need wrapper element like div>Icon for ease of style
 **/
interface IIconProps { 
  svgSrc: string, 
  unchecked?: boolean, 
  hoverEffect?: boolean, 
  hidden?: boolean, 
  width?: string, 
  height?: string, 
  rotate?: string,
  id?: string;
}

const Icon = styled("div")<IIconProps>`
  background-image: url(${ (props: IIconProps) => props.svgSrc });
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${( props: IIconProps ) => props.height ? props.height : '30px' } ${ ( props: IIconProps ) => props.width ? props.width : '30px' };
  height: ${( props: IIconProps ) => props.height ? props.height : '30px' };
  width: ${ ( props: IIconProps ) => props.width ? props.width : '30px' };
  opacity: ${( props: IIconProps ) => (props.unchecked) ? '0.5' : '1'};
  margin: 0 auto;
  visibility: ${( props: IIconProps ) => props.hidden ? 'hidden' : 'visible'};
  cursor: pointer;
  ${( props: IIconProps ) => props.rotate && css`transform: rotate(90deg);`} 

  &:hover {
    ${( props: IIconProps ) => (props.hoverEffect) ? 'opacity: 0.5;': ''};
  }
`;

interface Props {
  className?: string;
  unchecked?: boolean;
  hoverEffect?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  hidden?: boolean;
  svgSrc: string;
  width?: string;
  height?: string;
  rotate?: string;
  id?: string;
}
  

class WrapperIcon extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>): void {
    this.props.onClick(e); 
  }

  render() {
    return (
      <div className={ this.props.className } onClick={ this.props.onClick } id={ this.props.id }>
        <Icon svgSrc={ this.props.svgSrc } unchecked={ this.props.unchecked } hoverEffect={ this.props.hoverEffect } hidden={ this.props.hidden } width={ this.props.width } height={ this.props.height } rotate={ this.props.rotate } />
      </div>
   );
  }
}

const StyledWrapperIcon = styled(WrapperIcon)`
  margin: 0 5px;
`
StyledWrapperIcon.displayName = "IconSelector";

export default StyledWrapperIcon;
