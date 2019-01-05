import * as React from 'react';
import styled from '../../story/styledComponents';
import Button from '../../base/Button/Button';

interface Props {
  className?: string;
}

class ConfirmButton extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
  }

  render() {
    return (
      <Button onClick={ this.handleClick }>Reset</Button>
    );
  }
}

const StyledConfirmButton = styled(ConfirmButton)`
`;


export default StyledConfirmButton;


