import * as React from 'react';
import styled from '../../story/styledComponents';
import Button from '../../base/Button/Button';
import { resetSortFilterDispatchType } from '../../../containers/type';

interface Props {
  className?: string;
  resetSortFilterClick: resetSortFilterDispatchType; 
}

class ResetButton extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
    this.props.resetSortFilterClick();
  }

  render() {
    return (
      <Button id="reset" onClick={ this.handleClick }>Reset</Button>
    );
  }
}

const StyledResetButton = styled(ResetButton)`
`;


export default StyledResetButton;



