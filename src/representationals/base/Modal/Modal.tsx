import * as React from 'react';
import styled from '../../story/styledComponents';
import { toggleClickType } from '../../../containers/type';


interface Props {
  className?: string;
  title: string;
  detail: string;
  children?: React.ReactNode;
  closeButton: React.ReactNode;
  confirmButton?: React.ReactNode;
  resetButton?: React.ReactNode;
  onClose: toggleClickType; 
  isOpen: boolean;
}

class Modal extends React.PureComponent<Props, {}> {

  constructor(props: Props) {
    super(props);
    this.stopEventBubblingUp = this.stopEventBubblingUp.bind(this);
    this.handleCloseOutsideClick = this.handleCloseOutsideClick.bind(this);
  }

  stopEventBubblingUp(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
  }

  handleCloseOutsideClick(e: React.MouseEvent<HTMLElement>) {
    this.props.onClose(!this.props.isOpen)
  }

  render() {
    return (
      <div className={ this.props.className } onClick={ this.handleCloseOutsideClick }>
        <div onClick={ this.stopEventBubblingUp }>
          <form method="dialog">
            <h3>{ this.props.title }</h3>
            <hr />
            <p>{ this.props.detail }</p>
            { this.props.children }
            <hr />
            <menu>
        { this.props.closeButton }
        {(this.props.confirmButton) && this.props.confirmButton }
        {(this.props.resetButton) && this.props.resetButton } 
            </menu>
          </form>
        </div>
      </div>
    );
  }
}

const StyledModal = styled(Modal)`
  // wrapper (overlay)
  font-family: ${( props ) => props.theme.primaryFontFamily };
  background-color: ${( props ) => props.theme.primaryOverlayColor };
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  // modal content 
  & > div {
    background-color: #FFFFFF;
    width: 70%;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 2px 2px 2px ${( props ) => props.theme.primaryColor };
  }  

  & menu {
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
    
`;
StyledModal.displayName = "ModalSelector";


export default StyledModal;


