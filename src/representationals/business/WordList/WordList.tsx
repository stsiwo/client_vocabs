import * as React from 'react';
import styled from '../../story/styledComponents';
import WordListItemCont from '../../../containers/Word/WordListItemCont';
import MobileWordController from '../Controller/MobileWordController';
import MediaQuery from 'react-responsive'

interface Props {
  className?: string;
  displayedWordList: string[];
  initialWordsFetch: () => void;
  isInitialWordsFetching: boolean;
}

export class WordList extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.renderWordItem = this.renderWordItem.bind(this);
  }

  renderWordItem() {
    return (
      this.props.displayedWordList.map(( wordId: string ) => { 
        return (
          <WordListItemCont key={ wordId } wordId={ wordId } />
        );
      })
    );
  }

  componentDidMount() {
    /***********************************
     * need to fix this, this initial fetch is called every time this component is mounted even if entitis has already those initial words
     *  - solution1 is to use another state as flag like "isinitialFetchDone" to make sure initialFetch has done.
     ***********************************/
    this.props.initialWordsFetch();
  }

  render() {
    if ( this.props.isInitialWordsFetching ) return <div>Loading your words...</div>
    return (
      <div className={ this.props.className }>
        <ul>
          { this.renderWordItem() }  
        </ul>
        <MediaQuery maxWidth={ 425 } values={{ width: 300 }}>
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
    // this is to center each word item and spread around both edge
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-between;

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
StyledWordList.displayName = "WordListSelector";


export default StyledWordList;







