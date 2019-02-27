import * as React from 'react';
import styled from '../../story/styledComponents';
import WordNameText from './WordNameText';
import DefTreeCont from '../../../containers/Def/DefTreeCont';
import { IWord } from '../../../domains/word';
import { CustomFormikProps } from '../../../Hoc/withForm';
import { ArrayHelpers } from 'formik';

interface Props {
  className?: string;
  word: IWord;
  formik: CustomFormikProps;
  wordIndex: number;
  arrayHelpers: ArrayHelpers;
}

class WordForm extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <WordNameText wordId={ this.props.word.id } name={ this.props.word.name } formik={ this.props.formik } wordIndex={ this.props.wordIndex } />
        <DefTreeCont defs={ this.props.word.defs } formik={ this.props.formik } wordIndex={ this.props.wordIndex } arrayHelpers={ this.props.arrayHelpers }></DefTreeCont>
      </div>
    );
  }
}

const StyledWordForm = styled(WordForm)`
  padding: 10px;
`;
StyledWordForm.displayName = "WordFormSelector";

export default StyledWordForm;


