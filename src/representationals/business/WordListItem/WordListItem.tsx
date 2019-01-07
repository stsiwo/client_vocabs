import * as React from 'react';
import styled from '../../story/styledComponents';
import CheckBox from '../../base/Input/CheckBox';
import { toggleSelectWordDispatchType } from '../../../containers/type';
import { IWordListItem } from '../../../domains/word';

interface Props {
  className?: string;
  word: IWordListItem;
  toggleSelectWordChange: toggleSelectWordDispatchType; 
}

class WordListItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onCheckChange = this.onCheckChange.bind(this);
  }

  onCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.toggleSelectWordChange([parseInt(e.target.value)]);
  }

  render() {
    return (
      <li className={ this.props.className }>
        <CheckBox labelName={this.props.word.name} checked={ this.props.word.isChecked } onChange={ this.onCheckChange } value={ this.props.word.id } />
      </li>
    );
  }
}

const StyledWordListItem = styled(WordListItem)`
  display: inline-block;
`;


export default StyledWordListItem;


