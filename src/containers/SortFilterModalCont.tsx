import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import SortFilterModal from '../representationals/business/SortFilterModal/SortFilterModal';
import { INormalizedState } from '../state/type';
import { withRouter } from 'react-router-dom';
import { toggleSortFilterModalAction } from '../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
  isSortFilterModalOpen: state.ui.isSortFilterModalOpen,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSortFilterModalClick: ( isOpen: boolean ) => { dispatch( toggleSortFilterModalAction( isOpen ))}, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( SortFilterModal );
