import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import WordList from '../../representationals/business/WordList/WordList';
import { INormalizedState } from '../../state/type';
import { getWordListItem } from '../../reducers/helper';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => {
  // get state (displayedWordList and selectedWordList)
  const { selectedWordList, entities, displayedWordList } = state;
  // convert displayedWordList to [IWordListItem] see word.ts in domains
  const wordListItem = getWordListItem(displayedWordList, selectedWordList, entities);  
  // send that IWordListItem[] as props
  return {
    wordListItem: wordListItem,
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  // N/A
  // word item click dispatch is defined in WordListItemCont for make Component simple (esp, reduce # of props)
});

export default connect( mapStateToProps, mapDispatchToProps )( WordList );





