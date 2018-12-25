import * as React from 'react';
import styled from '../../story/styledComponents';
import ripple from '../effects/ripple';

interface Props {
  className?: string;
  children: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

class Button extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
    this.props.onClick(e);
  }

  render() {
    return (
      <button
        type="button"
        className={ this.props.className }
        onClick={this.handleClick}
      >
        {this.props.children}
      </button>
    );
  }
}

const StyledButton = styled(Button)`
  height: 30px;
  border: none;
  padding: 5px 20px;
  box-sizing: content-box;
  margin: 0 10px;
  color: ${( props ) => props.theme.primaryFontColor };
  font-weight: bold;
  border-radius: 15px;
  outline: none;
  font-family: ${( props ) => props.theme.primaryFontFamily };
  cursor: pointer;
  box-shadow: 1px 1px 2px ${( props ) => props.theme.primaryColor };
  ${ripple}
`;


export default StyledButton;
