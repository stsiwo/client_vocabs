import * as React from 'react';
import TextWithIcon from '../../base/Input/TextWithIcon';
import { CustomFormikProps } from '../../../Hoc/withForm';
import { ErrorMessage } from 'formik';

const wordIcon = require('./assets/word.svg');

//import { IWord, IDef, Def } from './sampleWord';

interface Props {
  className?: string;
  wordId: string;
  name: string;
  wordIndex: number;
  formik: CustomFormikProps;
}

class WordNameText extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleWordNameChange = this.handleWordNameChange.bind(this);
    this.handleWordNameBlur = this.handleWordNameBlur.bind(this);
  }

  handleWordNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    //this.props.changeWordNameText(this.props.wordId, e.target.value);
    this.props.formik.handleChange(e);
  }

  handleWordNameBlur(e: React.FocusEvent<HTMLInputElement>) {
    this.props.formik.handleBlur(e);
  }

  render() {
    const { wordIndex } = this.props;
    return (
      <div>
        <TextWithIcon 
          placeholder="enter a new word here..." 
          svgSrc={ wordIcon } 
          labelName={ `words.${ wordIndex }.name` } 
          onChange={ this.handleWordNameChange } 
          onBlur={ this.handleWordNameBlur } 
          value={ this.props.name }
        />
        <ErrorMessage name={ `words.${ wordIndex }.name` } />
      </div>
    );
  }
}

export default WordNameText;
