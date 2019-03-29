import * as React from 'react';
import styled from '../../story/styledComponents';
import { ThemeInterface } from '../../story/theme'; 

interface Props {
  className?: string;
  isOpen: boolean;
  children?: React.ReactNode;
  handleSearchImageToggleClick: (e: React.MouseEvent<HTMLElement>) => void;
}

class BottomModal extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
  }

  render() {
    return (
      <div className={ this.props.className } onClick={ this.props.handleSearchImageToggleClick }>
        <div className="bottom-modal-content" onClick={ this.handleClick }>
          { this.props.children }
        </div>
      </div>
    );
  }
}

interface IStyledProps extends Props {
  theme: ThemeInterface;
}

const StyledBottomModal = styled(BottomModal)`
  // wrapper (overlay)
  font-family: ${( props: IStyledProps ) => props.theme.primaryFontFamily };
  background-color: ${( props: IStyledProps ) => props.theme.primaryOverlayColor };
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  display: ${( props: IStyledProps ) => props.isOpen ? 'flex' : 'none' };
  align-items: center;
  justify-content: center;

  // modal content 
  & > .bottom-modal-content {
    position: fixed;
    bottom: 0;
    width: 100%;

  // to display scroll bar
  // calculated value:
  // modal content (this): 150px = 50px (search input + margin) + 100px (SearchResults)
    height: 150px;
  }  

    
`;


export default StyledBottomModal;



