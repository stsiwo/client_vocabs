import * as React from 'react';
import styled from '../../story/styledComponents';
import { RouteComponentProps } from 'react-router-dom';
import WordForm from '../Form/WordForm';
import { IWord } from '../../../domains/word';

interface Props extends RouteComponentProps<{}> {
  className?: string;
  words: IWord[]; 
}
/**
 * display selected word items' details 
 * - selected items are defined in redux store's currentSelectedWords (or query string?)
 * - temporarily using test words list from props, so need to fix later when implementing redux
 **/
class WordDetail extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.renderSelectedWords = this.renderSelectedWords.bind(this);

  }

  renderSelectedWords() {
    const { words } = this.props; 
    return words.map(( word ) => <WordForm key={ word.id } word={ word } /> ) 
  }

  render() {
    return (
      <div className={ this.props.className }>
        { this.renderSelectedWords() }
      </div>
    );
  }
}

const StyledWordDetail = styled(WordDetail)`
  @media (min-width: ${( props ) => props.theme.sizes.mobileL + 1 }px) {
    margin-left: ${( props ) => props.theme.sideBarWidth };
  }

`;


export default StyledWordDetail;


