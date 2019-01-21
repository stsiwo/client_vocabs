import * as React from 'react';
import styled from '../../story/styledComponents';
import Button from '../../base/Button/Button';
import { toggleClickType } from '../../../containers/type';

interface Props {
  className?: string;
  onClose: toggleClickType; 
}

/**
 * not implement container component for this because each modal has different ui state so can't identify which one is clicked. instead use prop to send close click event 
 **/
class CloseButton extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
    this.props.onClose(false);
  }

  render() {
    return (
      <Button id="close" onClick={ this.handleClick }>Close</Button>
    );
  }
}

const StyledCloseButton = styled(CloseButton)`
`;


export default StyledCloseButton;

