import * as React from 'react';
import styled from '../../story/styledComponents';
import WordNameTextCont from '../../../containers/Word/WordNameTextCont';
import DefTreeCont from '../../../containers/Def/DefTreeCont';

import { IWord } from '../../../domains/word';

interface Props {
  className?: string;
  word: IWord;
}

class WordForm extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <form className={ this.props.className }>
        <WordNameTextCont wordId={ this.props.word.id } name={ this.props.word.name }/>
        <DefTreeCont defs={ this.props.word.defs } ></DefTreeCont>
      </form>
    );
  }
}

const StyledWordForm = styled(WordForm)`
  padding: 10px;
`;


export default StyledWordForm;


