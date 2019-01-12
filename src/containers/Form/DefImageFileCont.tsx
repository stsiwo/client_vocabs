import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import DefImageFile from '../../representationals/business/Form/DefImageFile';
import { INormalizedState } from '../../state/type';
import { updateDefImageAction } from '../../actions/index';

const mapStateToProps = (state: INormalizedState , ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  // dispatch updateDefImageAction 
  updateDefChange: ( id: string, nextFile: string ) => { dispatch( updateDefImageAction( id, nextFile ) )},
});

export default connect( mapStateToProps, mapDispatchToProps )( DefImageFile );


