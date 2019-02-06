import * as React from 'react';
import styled from '../../story/styledComponents';
import CheckBox from '../../base/Input/CheckBox';
import { toggleSelectWordDispatchType } from '../../../containers/type';
import { IWordListItem } from '../../../domains/word';

interface Props {
  className?: string;
  word: IWordListItem;
  wordId: string;
  toggleSelectWordChange: toggleSelectWordDispatchType; 
}

class WordListItem extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onCheckChange = this.onCheckChange.bind(this);
  }

  //shouldComponentUpdate(nProps: Props, nState: Props): boolean {
    //console.log(nProps.word === this.props.word);
    //return true;
    ////return ( nProps.word.isChecked !== this.props.word.isChecked ) 
  //}

  onCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.toggleSelectWordChange(e.target.value);
  }

  render() {
    return (
      <li className={ this.props.className }>
        <CheckBox labelName={this.props.word.name} checked={ this.props.word.isChecked } onChange={ this.onCheckChange } value={ this.props.word.id } >{ this.props.word.name }</CheckBox>
      </li>
    );
  }
}

const StyledWordListItem = styled(WordListItem)`
  display: inline-block;
`;
StyledWordListItem.displayName = "WordListItemSelector";

export default StyledWordListItem;


