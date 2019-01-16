import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import MobileWordController from '../../representationals/business/Controller/MobileWordController';
import * as StateType from '../../state/type/StateType';

const mapStateToProps = (state: StateType.INormalizedState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
});

export default connect( mapStateToProps, mapDispatchToProps )( MobileWordController );



