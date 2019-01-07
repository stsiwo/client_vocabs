import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import SortFilterControllerItem from '../../representationals/business/Controller/SortFilterControllerItem';
import { INormalizedState } from '../../state/type';
import { toggleSortFilterModalAction } from '../../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
  isSortFilterModalOpen: state.ui.isSortFilterModalOpen,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSortFilterModalClick: ( isOpen: boolean ) => { dispatch( toggleSortFilterModalAction( isOpen ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( SortFilterControllerItem );

