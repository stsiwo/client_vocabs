import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import WordDetail from '../../representationals/business/WordDetail/WordDetail';
import { INormalizedState } from '../../state/type';
import { denormalizeWordList } from '../../state/index';
import { IWord } from '../../domains/word';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => {
  // get state sortedWordList and entities
  const { selectedWordList, entities } = state;
  // denormalized selectedWordList 
  const words: IWord[] = denormalizeWordList(selectedWordList, entities);
   
  return {
    words: words,
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
});

export default connect( mapStateToProps, mapDispatchToProps )( WordDetail );






