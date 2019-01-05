import * as React from 'react';
import styled from '../../story/styledComponents';
import Button from '../../base/Button/Button';

interface Props {
  className?: string;
}

class ResetButton extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
  }

  render() {
    return (
      <Button onClick={ this.handleClick }>Confirm</Button>
    );
  }
}

const StyledResetButton = styled(ResetButton)`
`;


export default StyledResetButton;



