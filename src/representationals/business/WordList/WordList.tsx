import * as React from 'react';
import styled from '../../story/styledComponents';
import WordListItem from '../WordListItem/WordListItem';
import MobileControllerCont from '../../../containers/MobileControllerCont';
import MediaQuery from 'react-responsive'
//import * as qs from 'query-string';
import { RouteComponentProps } from 'react-router-dom';
import { IWord } from '../../../domains/word';


interface Props extends RouteComponentProps<{}> {
  className?: string;
  words: IWord[]; 
}

interface State {
  words: IWord[];
}
class WordList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      words: this.props.words,
    }
    this.renderWordItem = this.renderWordItem.bind(this);
  }

  renderWordItem() {
    return (
      this.state.words.map(( word ) => { 
        return (
          <WordListItem key={ word.id }>{ word.name }</WordListItem>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <ul className={ this.props.className }>
          { this.renderWordItem() }  
        </ul>
        <MediaQuery maxWidth={ 425 }>
          <MobileControllerCont />
        </MediaQuery>
      </div>
    );
  }
}

const StyledWordList = styled(WordList)`
  list-style-type: none; 
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;

  @media (min-width: ${( props ) => props.theme.sizes.mobileL + 1 }px) {
    position: fixed;
    left: 0;
    top: ${( props ) => props.theme.headerHeight };
    width: ${( props ) => props.theme.sideBarWidth };
    bottom: 0;
    overflow-y: scroll;
    border-right: 2px solid ${( props ) => props.theme.secondaryColor };
    box-sizing: border-box;
  }

`;


export default StyledWordList;







