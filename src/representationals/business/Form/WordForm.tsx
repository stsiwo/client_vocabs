import * as React from 'react';
import styled from '../../story/styledComponents';
import WordNameTextCont from '../../../containers/Word/WordNameTextCont';
import DefTreeCont from '../../../containers/Def/DefTreeCont';
import { IWord } from '../../../domains/word';
import { CustomFormikProps } from '../../../Hoc/withForm';

interface Props {
  className?: string;
  word: IWord;
  formik: CustomFormikProps;
  wordIndex: number;
}

class WordForm extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <WordNameTextCont wordId={ this.props.word.id } name={ this.props.word.name } formik={ this.props.formik } wordIndex={ this.props.wordIndex }/>
        <DefTreeCont defs={ this.props.word.defs } formik={ this.props.formik } wordIndex={ this.props.wordIndex }></DefTreeCont>
      </div>
    );
  }
}

const StyledWordForm = styled(WordForm)`
  padding: 10px;
`;

export default StyledWordForm;


