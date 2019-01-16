import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import WordListItem from '../../representationals/business/WordListItem/WordListItem';
import { INormalizedState } from '../../state/type';
import { toggleSelectWordActionCreator } from '../../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
  // N/A
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSelectWordChange: ( nextSelectedWordList: string[] ) => { dispatch( toggleSelectWordActionCreator( nextSelectedWordList ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( WordListItem )




