import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import DeleteModal from '../representationals/business/DeleteModal/DeleteModal';
import { INormalizedState } from '../state/type';
import { withRouter } from 'react-router-dom';
import { toggleDeleteConfirmModalAction } from '../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
  isDeleteConfirmModalOpen: state.ui.isDeleteConfirmModalOpen,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleDeleteConfirmModalClick: ( isOpen: boolean ) => { dispatch( toggleDeleteConfirmModalAction( isOpen ))}, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( DeleteModal );



