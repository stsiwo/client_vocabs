import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import SearchResults from '../representationals/business/SearchImageModal/SearchResults';
import { INormalizedState } from '../state/type';
import { updateDefImageAction } from '../actions/index';

const mapStateToProps = (state: INormalizedState , ownProps: { wordId: string }) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  // dispatch updateDefImageAction 
  updateDefChange: ( id: string, nextFile: string ) => { dispatch( updateDefImageAction( id, nextFile ) )},
});

export default connect( mapStateToProps, mapDispatchToProps )( SearchResults );




