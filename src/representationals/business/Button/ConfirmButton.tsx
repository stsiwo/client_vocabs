import * as React from 'react';
import styled from '../../story/styledComponents';
import Button from '../../base/Button/Button';

interface Props {
  className?: string;
  onConfirm: () => void;
}

class ConfirmButton extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
    this.props.onConfirm();
  }

  render() {
    return (
      <Button id="confirm" onClick={ this.handleClick }>Reset</Button>
    );
  }
}

const StyledConfirmButton = styled(ConfirmButton)`
`;
StyledConfirmButton.displayName = "ConfirmButtonSelector";


export default StyledConfirmButton;


