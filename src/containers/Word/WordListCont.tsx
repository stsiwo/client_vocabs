import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import WordList from '../../representationals/business/WordList/WordList';
import { IState } from '../../state/type';
import { getWordListItem } from '../../reducers/helper';
import withJSProps from '../../Hoc/withJSProps';
import { Record } from 'immutable';
import { IWordListItem } from '../../domains/word';
import { List } from 'immutable';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => {
  // get state (displayedWordList and selectedWordList)
  const selectedWordList = state.get('selectedWordList');
  const entities = state.get('entities');
  const displayedWordList = state.get('displayedWordList');
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

interface Props {
  className?: string;
  wordListItem: IWordListItem[];
}

export default connect( mapStateToProps, mapDispatchToProps )( withJSProps<{ wordListItem: List<IWordListItem>; }, Props>( WordList ));





