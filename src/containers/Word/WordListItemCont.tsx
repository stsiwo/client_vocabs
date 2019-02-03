import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import WordListItem from '../../representationals/business/WordListItem/WordListItem';
import { IState } from '../../state/type';
import { toggleSelectedWordListActionCreator } from '../../actions/index';
import makeGetWordListItemSelector from '../reselects/makeGetWordListItemSelector';
import { Record } from 'immutable';

const makeMapStateToProps = () => {
  const getWordListItemSelector = makeGetWordListItemSelector()
  const mapStateToProps = (state: Record<IState>, props: { wordId: string; }) => {
    return {
      word: getWordListItemSelector(state, props),
    }
  }
  return mapStateToProps
}

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSelectWordChange: ( nextSelectedWordList: string ) => { dispatch( toggleSelectedWordListActionCreator( nextSelectedWordList ))}, 
});

export default connect( makeMapStateToProps, mapDispatchToProps )( WordListItem )




