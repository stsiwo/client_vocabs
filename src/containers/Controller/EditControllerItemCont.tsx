import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import EditControllerItem from '../../representationals/business/Controller/EditControllerItem';
import { INormalizedState } from '../../state/type';
//import { withRouter } from 'react-router-dom';
import { toggleSelectWarningModalAction } from '../../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
  isSelectWarningModalOpen: state.ui.isSelectWarningModalOpen,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSelectWarningModalClick: ( isOpen: boolean ) => { dispatch( toggleSelectWarningModalAction( isOpen ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( EditControllerItem );
//export default compose(
  //withRouter, 
  //connect( mapStateToProps, mapDispatchToProps )
//)( EditControllerItem );



