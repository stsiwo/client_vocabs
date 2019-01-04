import * as React from 'react';
import styled from '../../story/styledComponents';
import CheckBox from '../../base/Input/CheckBox';

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
        <CheckBox labelName={this.props.children} checked={ this.state.isChecked } onChange={ this.onCheckChange }>
          { this.props.children }
        </CheckBox>
      </li>
    );
  }
}

const StyledWordListItem = styled(WordListItem)`
  display: inline-block;
`;


export default StyledWordListItem;


