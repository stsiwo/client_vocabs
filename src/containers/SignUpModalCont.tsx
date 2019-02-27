import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import SignUpModal from '../representationals/business/ModalContent/SignUpModal';
import { IState } from '../state/type';
import { toggleSignUpModalActionCreator } from '../actions/index';
import { Record } from 'immutable';
import { ISignUpUserForm } from '../Hoc/withSignUpForm';
import signUpFormSubmittionMainThunk from '../thunk/mains/signUpFormSubmittion';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => ({
  isSignUpModalOpen: state.get('ui').get('isSignUpModalOpen'),
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSignUpModalClick: ( isOpen: boolean ) => { dispatch( toggleSignUpModalActionCreator( isOpen ))}, 
  submitSignUpFormClick: ( values: ISignUpUserForm ) => { dispatch<any>( signUpFormSubmittionMainThunk( values ))} 
});

export default connect( mapStateToProps, mapDispatchToProps )( SignUpModal );


  


