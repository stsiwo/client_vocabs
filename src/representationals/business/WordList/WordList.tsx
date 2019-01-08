import * as React from 'react';
import styled from '../../story/styledComponents';
import WordListItemCont from '../../../containers/Word/WordListItemCont';
import MobileWordController from '../Controller/MobileWordController';
import MediaQuery from 'react-responsive'
import { IWordListItem } from '../../../domains/word';

interface Props {
  className?: string;
  wordListItem: IWordListItem[];
}

export class WordList extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.renderWordItem = this.renderWordItem.bind(this);
  }

  renderWordItem() {
    return (
      this.props.wordListItem.map(( word: IWordListItem ) => { 
        return (
          <WordListItemCont key={ word.id } word={ word } />
        );
      })
    );
  }

  render() {
    return (
      <div className={ this.props.className }>
        <ul>
          { this.renderWordItem() }  
        </ul>
        <MediaQuery maxWidth={ 425 }>
          <MobileWordController />
        </MediaQuery>
      </div>
    );
  }
}

const StyledWordList = styled(WordList)`
  & > ul {
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
  }

`;


export default StyledWordList;







