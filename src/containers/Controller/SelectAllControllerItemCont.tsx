import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose */} from 'redux';
import SelectAllControllerItem from '../../representationals/business/Controller/SelectAllControllerItem';
import { INormalizedState } from '../../state/type';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
  //isSearchWordModalOpen: state.ui.isSearchWordModalOpen,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  //toggleSearchWordModalClick: ( isOpen: boolean ) => { dispatch( toggleSearchWordModalAction( isOpen ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( SelectAllControllerItem );




