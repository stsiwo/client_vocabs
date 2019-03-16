import * as React from 'react';
import styled from '../../story/styledComponents';
import TextWithIcon from '../../base/Input/TextWithIcon';
import { CustomFormikProps } from '../../../Hoc/withForm';
import { ErrorMessage } from 'formik';
import withObservable from '../../../Hoc/Observable/withObservable';
import { ObservableBags } from '../../../Hoc/Observable/type';
import { AutoCompleteBags } from '../../../Hoc/AutoComplete/type';
import withAutoComplete from '../../../Hoc/AutoComplete/withAutoComplete';

const wordIcon = require('./assets/word.svg');

//import { IWord, IDef, Def } from './sampleWord';

interface Props {
  className?: string;
  wordId: string;
  name: string;
  wordIndex: number;
  formik: CustomFormikProps;
  setFieldValue: (field: string, value: any) => void;
}

interface PropsWithObservable extends Props {
  observable: ObservableBags;
}

interface PropsWithObservableAndAutoComplete extends PropsWithObservable {
  autoComplete: AutoCompleteBags;
}



class WordNameText extends React.PureComponent<PropsWithObservableAndAutoComplete, {}> {

  private wordNameRef: React.RefObject<HTMLInputElement>;

  constructor(props: PropsWithObservableAndAutoComplete) {
    super(props);
    this.handleWordNameChange = this.handleWordNameChange.bind(this);
    this.handleWordNameBlur = this.handleWordNameBlur.bind(this);
    this.wordNameRef = React.createRef<HTMLInputElement>();
  }

  handleWordNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.formik.handleChange(e);
    this.props.observable.inputHandler(e);
  }

  handleWordNameBlur(e: React.FocusEvent<HTMLInputElement>) {
    this.props.formik.handleBlur(e);
  }

  componentDidUpdate(prevProps: PropsWithObservableAndAutoComplete) {
    if (prevProps.autoComplete.selectedResult !== this.props.autoComplete.selectedResult) {
      // update formik values
      this.props.setFieldValue(`words.${ this.props.wordIndex }.name`, this.props.autoComplete.selectedResult);

      // update word name input by react ref
      this.wordNameRef.current.value = this.props.autoComplete.selectedResult; 
    }
  }

  render() {
    const { wordIndex } = this.props;
    return (
      <div className={ this.props.className }>
        <TextWithIcon 
          inputRef={ this.wordNameRef }
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

const StyledWordNameText = styled(WordNameText)`
 & > .word-name-autocomplete {
   background-color: ${( props ) => props.theme.thirdColor };
   margin: 5px;
 }
`;

export default withObservable<Props>(
  withAutoComplete<PropsWithObservable>(StyledWordNameText)
);
