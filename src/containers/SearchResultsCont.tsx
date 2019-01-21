import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import SearchResults from '../representationals/business/SearchImageModal/SearchResults';
import { INormalizedState } from '../state/type';
import { updateDefImageActionCreator } from '../actions/index';

const mapStateToProps = (state: INormalizedState , ownProps: { wordId: string }) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  // dispatch updateDefImageActionCreator 
  updateDefImageClick: ( id: string, nextImage: string ) => { dispatch( updateDefImageActionCreator( id, nextImage ) )},
});

export default connect( mapStateToProps, mapDispatchToProps )( SearchResults );




