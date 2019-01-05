import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import MobileController from '../representationals/business/Controller/MobileController';
import { INormalizedState } from '../state/type';
import { withRouter } from 'react-router-dom';
import { 
  toggleSortFilterModalAction,
  toggleSearchWordModalAction,
} from '../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
  isSortFilterModalOpen: state.ui.isSortFilterModalOpen,
  isSearchWordModalOpen: state.ui.isSearchWordModalOpen,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSortFilterModalClick: ( isOpen: boolean ) => { dispatch( toggleSortFilterModalAction( isOpen ))}, 
  toggleSearchWordModalClick: ( isOpen: boolean ) => { dispatch( toggleSearchWordModalAction( isOpen ))}, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( MobileController );



