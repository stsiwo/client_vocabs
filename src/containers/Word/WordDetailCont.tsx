import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import WordDetail from '../../representationals/business/WordDetail/WordDetail';
import { RouteComponentProps } from 'react-router-dom';
import { IState } from '../../state/type';
import { withRouter } from 'react-router-dom';
import { toggleWordFormErrorActionCreator } from '../../actions/index';
import { Record, List } from 'immutable';
import withJSProps from '../../Hoc/withJSProps';
import { getSelectedWordList } from '../../reducers/helper';
import { IWord } from '../../domains/word';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => {
  // get state sortedWordList and entities
  const selectedWordList = state.get('selectedWordList');
  const entities = state.get('entities');
  const isDefineWarningModalOpen = state.get('ui').get('isDefineWarningModalOpen');

  return {
    words: getSelectedWordList(selectedWordList, entities),
    isDefineWarningModalOpen: isDefineWarningModalOpen,
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  wordFormErrorCheck: (isError: boolean) => { dispatch<any>(toggleWordFormErrorActionCreator(isError))}, 
});

interface Props extends RouteComponentProps<{}> {
  className?: string;
  words: IWord[]; 
  isDefineWarningModalOpen: boolean;
  wordFormErrorCheck: (isError: boolean) => void;
}

export default compose(
  withRouter,
  connect( mapStateToProps, mapDispatchToProps )
)
( withJSProps<{ words: List<IWord>, isDefineWarningModalOpen: boolean }, Props>( WordDetail ));






