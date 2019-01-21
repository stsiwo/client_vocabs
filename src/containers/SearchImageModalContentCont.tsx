import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import SearchImageModalContent from '../representationals/business/SearchImageModal/SearchImageModalContent';
import { INormalizedState } from '../state/type';
//import { updateDefActionCreator } from '../actions/index';

const mapStateToProps = (state: INormalizedState , ownProps: { wordId: string }) => ({
   wordName: state.entities.words[ownProps.wordId].name,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  // updateDefImageActionCreator is in SearchResultsCont
  //updateDefChange: ( id: string, nextFile: string ) => { dispatch( updateDefActionCreator( id, nextFile ) )},
});

export default connect( mapStateToProps, mapDispatchToProps )( SearchImageModalContent );



