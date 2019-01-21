import * as React from 'react';
import TextWithIcon from '../../base/Input/TextWithIcon';

const wordIcon = require('./assets/word.svg');

//import { IWord, IDef, Def } from './sampleWord';

interface Props {
  className?: string;
  wordId: string;
  name: string;
  changeWordNameText: ( id: string, nextWordname: string ) => void;
}

class WordNameText extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleWordNameChange = this.handleWordNameChange.bind(this);
  }

  handleWordNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.changeWordNameText(this.props.wordId, e.target.value);
  }

  render() {
    return (
      <TextWithIcon 
        placeholder="enter a new word here..." 
        svgSrc={ wordIcon } 
        labelName="word-text" 
        onChange={ this.handleWordNameChange } 
        value={ this.props.name }
      />
    );
  }
}

export default WordNameText;
