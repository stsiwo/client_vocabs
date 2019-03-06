import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../Icon/Icon'; 
const closeNoWrapIcon = require('./assets/closeNoWrap.svg');

interface Props { 
  className?: string;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
  message: string;
  type: string;
}

class FlashMessage extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

 render() {
    return (
      <div className={ this.props.className } >
        <p>{ this.props.message }</p>
        <Icon svgSrc={ closeNoWrapIcon } hoverEffect={ true } onClick={ this.props.onClose } width="20px" height="20px"  />
      </div>
    );
  }
}

const StyledFlashMessage = styled(FlashMessage)`
  background-color: ${( props ) => props.theme.flashMessageType[props.type] };
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  border-radius: 5px;
  height: 30px;

  & > p {
    margin: 0 5px;
  }  
 
  
`;


export default StyledFlashMessage;




