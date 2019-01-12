import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import SearchImageModalContent from '../representationals/business/SearchImageModal/SearchImageModalContent';
import { INormalizedState } from '../state/type';
//import { updateDefAction } from '../actions/index';

const mapStateToProps = (state: INormalizedState , ownProps: { wordId: string }) => ({
   wordName: state.entities.words[ownProps.wordId].name,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  // dispatch updateDefAction 
  //updateDefChange: ( id: string, nextFile: string ) => { dispatch( updateDefAction( id, nextFile ) )},
});

export default connect( mapStateToProps, mapDispatchToProps )( SearchImageModalContent );



