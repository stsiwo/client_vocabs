import * as React from 'react';
import styled from '../../story/styledComponents';
import Modal from '../../base/Modal/Modal';
import CloseButton from '../Button/CloseButton';
import ConfirmButton from '../Button/ConfirmButton';
import { toggleClickType } from '../../../containers/type';
import SignUpForm from './SignUpForm';
import { InjectedFormikProps } from 'formik';
import withSignUpForm, { SignUpFormValues, IUserForm } from '../../../Hoc/withSignUpForm';

interface Props {
  className?: string;
  isSignUpModalOpen: boolean;
  toggleSignUpModalClick: toggleClickType; 
  submitSignUpFormClick: ( values: IUserForm ) => void;
}

class SignUpModal extends React.PureComponent<InjectedFormikProps<Props, SignUpFormValues>, {}> {
  constructor(props: InjectedFormikProps<Props, SignUpFormValues>) {
    super(props);
  }

  render() {
    const title = 'Sign Up Form';
    const detail = 'please enter name, email, and password.';
    return (
        <Modal 
          title={ title } 
          detail={ detail } 
          closeButton={ <CloseButton onClose={ this.props.toggleSignUpModalClick }/> } 
          confirmButton={ <ConfirmButton onConfirm={ this.props.handleSubmit } label="Sign Up"/> }
          onClose={ this.props.toggleSignUpModalClick } 
          isOpen={ this.props.isSignUpModalOpen }
        >
          <SignUpForm 
            values={ this.props.values } 
            handleChange={ this.props.handleChange }
            handleBlur={ this.props.handleBlur }
          />
        </Modal>
    );
  }
}

const StyledSignUpModal = styled(withSignUpForm<Props>(SignUpModal))`
`;
StyledSignUpModal.displayName = "SignUpModalSelector";


export default StyledSignUpModal;

