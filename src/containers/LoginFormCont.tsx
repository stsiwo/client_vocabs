import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import LoginForm from '../representationals/business/ModalContent/LoginForm';
import { IState } from '../state/type';
import { Record } from 'immutable';
import { toggleErrorFlashMessageActionCreator } from '../actions/index';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => ({
  isErrorFlashMessageOpen: state.get('ui').get('isErrorFlashMessageOpen'),
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleErrorFlashMessageClick: ( isOpen: boolean ) => { dispatch( toggleErrorFlashMessageActionCreator( isOpen ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( LoginForm );


  




