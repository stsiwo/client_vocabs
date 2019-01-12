import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import WordNameText from '../../representationals/business/Form/WordNameText';
import { INormalizedState } from '../../state/type';
import { updateWordNameAction } from '../../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  changeWordNameText: ( wordId: string, nextWordName: string) => { dispatch( updateWordNameAction( wordId, nextWordName ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( WordNameText );




