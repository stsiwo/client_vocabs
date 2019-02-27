import * as React from 'react';
import styled from '../../story/styledComponents';
import Modal from '../../base/Modal/Modal';
import CloseButton from '../Button/CloseButton';
import ConfirmButton from '../Button/ConfirmButton';
import { toggleClickType } from '../../../containers/type';
import LoginForm from './LoginForm';
import { InjectedFormikProps } from 'formik';
import withLoginForm, { LoginFormValues, ILoginUserForm } from '../../../Hoc/withLoginForm';

interface Props {
  className?: string;
  isLoginModalOpen: boolean;
  toggleLoginModalClick: toggleClickType; 
  submitLoginFormClick: ( values: ILoginUserForm ) => void;
}

class LoginModal extends React.PureComponent<InjectedFormikProps<Props, LoginFormValues>, {}> {
  constructor(props: InjectedFormikProps<Props, LoginFormValues>) {
    super(props);
  }

  render() {
    const title = 'Login Form';
    const detail = 'please enter name, email, and password.';
    return (
        <Modal 
          title={ title } 
          detail={ detail } 
          closeButton={ <CloseButton onClose={ this.props.toggleLoginModalClick }/> } 
          confirmButton={ <ConfirmButton onConfirm={ this.props.handleSubmit } label="Login"/> }
          onClose={ this.props.toggleLoginModalClick } 
          isOpen={ this.props.isLoginModalOpen }
        >
          <LoginForm 
            values={ this.props.values } 
            handleChange={ this.props.handleChange }
            handleBlur={ this.props.handleBlur }
          />
        </Modal>
    );
  }
}

const StyledLoginModal = styled(withLoginForm<Props>(LoginModal))`
`;
StyledLoginModal.displayName = "LoginModalSelector";


export default StyledLoginModal;


