import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import DeleteModal from '../representationals/business/ModalContent/DeleteModal';
import { toggleDeleteConfirmModalActionCreator } from '../actions/index';
import { IState } from '../state/type';
import { withRouter } from 'react-router-dom';
import { Record } from 'immutable';
import removeWordConfirmButtonClickThunk from '../thunk/removeWordConfirmButtonClick';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => ({
  isDeleteConfirmModalOpen: state.get('ui').get('isDeleteConfirmModalOpen'),
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleDeleteConfirmModalClick: ( isOpen: boolean ) => { dispatch( toggleDeleteConfirmModalActionCreator( isOpen ))}, 
  deleteConfirmClick: () => { dispatch<any>( removeWordConfirmButtonClickThunk( false ))}, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( DeleteModal );



