import * as React from 'react';
import styled from '../../story/styledComponents';
import { RouteComponentProps } from 'react-router-dom';
import WordForm from '../Form/WordForm';
import { IWord } from '../../../domains/word';
import MediaQuery from 'react-responsive';
import MobileDetailController from '../Controller/MobileDetailController';

interface Props extends RouteComponentProps<{}> {
  className?: string;
  words: IWord[]; 
}
/**
 * display selected word items' details 
 * - selected items are defined in redux store's currentSelectedWords 
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
      <div>
        <div className={ this.props.className }>
        { this.renderSelectedWords() }
        </div>
        <MediaQuery maxWidth={ 425 }>
          <MobileDetailController />
        </MediaQuery>
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


