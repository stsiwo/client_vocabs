import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import SearchWordControllerItem from '../../representationals/business/Controller/SearchWordControllerItem';
import { INormalizedState } from '../../state/type';
import { toggleSearchWordModalAction } from '../../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
  isSearchWordModalOpen: state.ui.isSearchWordModalOpen,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSearchWordModalClick: ( isOpen: boolean ) => { dispatch(toggleSearchWordModalAction( isOpen ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( SearchWordControllerItem );





