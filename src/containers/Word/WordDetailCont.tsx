import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import WordDetail from '../../representationals/business/WordDetail/WordDetail';
import { INormalizedState } from '../../state/type';
import { denormalizeWordList } from '../../state/index';
import { IWord } from '../../domains/word';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => {
  // get state sortedWordList and entities
  const { selectedWordList, entities } = state;
  const { isDefineWarningModalOpen } = state.ui;
  // denormalized selectedWordList 
  const words: IWord[] = denormalizeWordList(selectedWordList, entities);
   
  return {
    words: words,
    isDefineWarningModalOpen: isDefineWarningModalOpen,
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
});

export default compose(
  withRouter,
  connect( mapStateToProps, mapDispatchToProps )
)
( WordDetail );






