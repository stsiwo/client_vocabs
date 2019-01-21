import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import DeleteModal from '../representationals/business/DeleteModal/DeleteModal';
import { toggleDeleteConfirmModalActionCreator } from '../actions/index';
import { INormalizedState } from '../state/type';
import { withRouter } from 'react-router-dom';
import removeWordWrapperThunk from '../thunk/removeWord';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
  isDeleteConfirmModalOpen: state.ui.isDeleteConfirmModalOpen,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleDeleteConfirmModalClick: ( isOpen: boolean ) => { dispatch( toggleDeleteConfirmModalActionCreator( isOpen ))}, 
  deleteConfirmClick: () => { dispatch<any>( removeWordWrapperThunk( ))}, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( DeleteModal );



