import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import WordDetail from '../../representationals/business/WordDetail/WordDetail';
import { IState } from '../../state/type';
import { denormalizeWordList } from '../../state/index';
import { IWord } from '../../domains/word';
import { withRouter } from 'react-router-dom';
import { toggleWordFormErrorActionCreator } from '../../actions/index';

const mapStateToProps = (state: IState, ownProps: {}) => {
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
  wordFormErrorCheck: (isError: boolean) => { dispatch<any>(toggleWordFormErrorActionCreator(isError))}, 
});

export default compose(
  withRouter,
  connect( mapStateToProps, mapDispatchToProps )
)
( WordDetail );






