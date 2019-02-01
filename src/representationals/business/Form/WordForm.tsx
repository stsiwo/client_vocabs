import * as React from 'react';
import styled from '../../story/styledComponents';
import WordNameText from './WordNameText';
import DefTree from './DefTree';
import { IWord } from '../../../domains/word';
import { CustomFormikProps } from '../../../Hoc/withForm';

interface Props {
  className?: string;
  word: IWord;
  formik: CustomFormikProps;
  wordIndex: number;
}

class WordForm extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <WordNameText wordId={ this.props.word.id } name={ this.props.word.name } formik={ this.props.formik } wordIndex={ this.props.wordIndex }/>
        <DefTree defs={ this.props.word.defs } formik={ this.props.formik } wordIndex={ this.props.wordIndex }></DefTree>
      </div>
    );
  }
}

const StyledWordForm = styled(WordForm)`
  padding: 10px;
`;

export default StyledWordForm;


