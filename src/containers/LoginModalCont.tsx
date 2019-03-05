import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import LoginModal from '../representationals/business/ModalContent/LoginModal';
import { IState } from '../state/type';
import { toggleLoginModalActionCreator } from '../actions/index';
import { Record } from 'immutable';
import { ILoginUserForm } from '../Hoc/withLoginForm';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => ({
  isLoginModalOpen: state.get('ui').get('isLoginModalOpen'),
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleLoginModalClick: ( isOpen: boolean ) => { dispatch( toggleLoginModalActionCreator( isOpen ))}, 
  submitLoginFormClick: ( values: ILoginUserForm ) => { /*dispatch<any>( loginFormSubmittionMainThunk( values )) */} 
});

export default connect( mapStateToProps, mapDispatchToProps )( LoginModal );


  



