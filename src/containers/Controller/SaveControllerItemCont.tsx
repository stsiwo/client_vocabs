import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import SaveControllerItem from '../../representationals/business/Controller/SaveControllerItem';
import { INormalizedState } from '../../state/type';

/**
 * Save ajax action
 **/
const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
});

export default connect( mapStateToProps, mapDispatchToProps )( SaveControllerItem );






