import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import WordList from '../../representationals/business/WordList/WordList';
import { INormalizedState } from '../../state/type';
import { IWordListItem } from '../../domains/word';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => {
  // get state (sortedWordList and selectedWordList)
  const { sortedWordList, selectedWordList, entities } = state;
  // convert sortedWordList to [IWordListItem] see word.ts in domains
  const wordListItem: IWordListItem[] = sortedWordList.map(( wordId ) => ({
    id: wordId,
    name: entities.words[wordId].name,
    isChecked: selectedWordList.includes(wordId),
  }))
    
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





