import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import WordNameText from '../../representationals/business/Form/WordNameText';
import { IState } from '../../state/type';
import { updateWordNameActionCreator } from '../../actions/index';

const mapStateToProps = (state: IState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  changeWordNameText: ( wordId: string, nextWordName: string) => { dispatch( updateWordNameActionCreator( wordId, nextWordName ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( WordNameText );




