import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import MobileController from '../../representationals/business/Controller/MobileController';
import { INormalizedState } from '../../state/type';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
});

export default connect( mapStateToProps, mapDispatchToProps )( MobileController );



