import * as React from 'react';
import styled from '../../story/styledComponents';
import TextWithIcon from '../../base/Input/TextWithIcon';
import { CustomFormikProps } from '../../../Hoc/withForm';
import { ErrorMessage } from 'formik';
import withObservable from '../../../Hoc/Observable/withObservable';
import { ObservableBags } from '../../../Hoc/Observable/type';

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

class WordNameText extends React.PureComponent<PropsWithObservable, {}> {

  private wordNameRef: React.RefObject<HTMLInputElement>;

  constructor(props: PropsWithObservable) {
    super(props);
    this.handleWordNameChange = this.handleWordNameChange.bind(this);
    this.handleWordNameBlur = this.handleWordNameBlur.bind(this);
    this.handleAutoCompleteClick = this.handleAutoCompleteClick.bind(this);
    this.wordNameRef = React.createRef<HTMLInputElement>();
  }

  handleWordNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.formik.handleChange(e);
    this.props.observable.inputHandler(e);
  }

  handleWordNameBlur(e: React.FocusEvent<HTMLInputElement>) {
    this.props.formik.handleBlur(e);
  }

  handleAutoCompleteClick(e: React.MouseEvent<HTMLLIElement>) {
    const { wordIndex } = this.props;
    const target = e.target as HTMLLIElement;
    // update formik values
    this.props.setFieldValue(`words.${ wordIndex }.name`, target.getAttribute('value')); 

    // update word name input by react ref
    this.wordNameRef.current.value = target.getAttribute('value');

    // close AutoComplete
    this.props.observable.closeAutoComplete();
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
        { this.props.observable.isAutoCompleteActive() && this.props.observable.renderAutoComplete( this.handleAutoCompleteClick ) }
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

export default withObservable<Props>(StyledWordNameText);
