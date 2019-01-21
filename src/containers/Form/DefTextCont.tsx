import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import DefText from '../../representationals/business/Form/DefText';
import { INormalizedState } from '../../state/type';
import { updateDefTextActionCreator } from '../../actions/index';

const mapStateToProps = (state: INormalizedState , ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  // dispatch updateDefTextActionCreator 
  updateDefTextChange: ( id: string, nextDefText: string ) => { dispatch( updateDefTextActionCreator( id, nextDefText ) )},
});

export default connect( mapStateToProps, mapDispatchToProps )( DefText );


