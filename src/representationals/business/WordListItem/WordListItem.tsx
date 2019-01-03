import * as React from 'react';
import styled from '../../story/styledComponents';
import Checkbox from '../../base/Input/Checkbox';

interface Props {
  className?: string;
  children: string;
}

interface State {
  isChecked: boolean;
}


class WordListItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isChecked: false,
    }
    this.onCheckChange = this.onCheckChange.bind(this);
  }

  onCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return (
      <li className={ this.props.className }>
        <Checkbox labelName={this.props.children} checked={ this.state.isChecked } onChange={ this.onCheckChange }>
          { this.props.children }
        </Checkbox>
      </li>
    );
  }
}

const StyledWordListItem = styled(WordListItem)`
`;


export default StyledWordListItem;


