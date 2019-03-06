import * as React from 'react';
import styled from '../../story/styledComponents';
import { ErrorMessage } from 'formik';
import { LoginFormValues } from '../../../Hoc/withLoginForm';
import FlashMessage from '../../base/FlashMessage/FlashMessage';

interface Props {
  className?: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any>) => void;
  values: LoginFormValues; 
  isErrorFlashMessageOpen: boolean;
  toggleErrorFlashMessageClick: (isOpen: boolean) => void;
}

/**
 * forgot password functionality
 *  - #NEED_IMPLEMENT
 *  - with mail server
 **/

class LoginForm extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.toggleErrorFlashMessageClick = this.toggleErrorFlashMessageClick.bind(this);
  }

  toggleErrorFlashMessageClick(e: React.MouseEvent<HTMLElement>) {
    this.props.toggleErrorFlashMessageClick(!this.props.isErrorFlashMessageOpen);
  }

  render() {
    return (
      <div>
        {( this.props.isErrorFlashMessageOpen && <FlashMessage type="error" message="your account does not exist, please refer to Sign Up page" onClose={ this.toggleErrorFlashMessageClick } />)}
        <div>
          <label htmlFor="user.name">
            Name:
          </label>
          <input 
            type="text" 
            placeholder="enter your name..." 
            id="user.name"
            name="user.name" 
            onChange={ this.props.handleChange } 
            onBlur={ this.props.handleBlur } 
            value={ this.props.values.user.name }
          />
          <ErrorMessage name="user.name" />
        </div>
        <div>
          <label htmlFor="user.email">
            Email:
          </label>
          <input 
            type="email" 
            placeholder="enter your email..." 
            id="user.email"
            name="user.email" 
            onChange={ this.props.handleChange } 
            onBlur={ this.props.handleBlur } 
            value={ this.props.values.user.email }
          />
          <ErrorMessage name="user.email" />
        </div>
        <div>
          <label htmlFor="user.password">
            Password:
          </label>
          <input 
            type="password" 
            placeholder="enter your password..." 
            id="user.password"
            name="user.password" 
            onChange={ this.props.handleChange } 
            onBlur={ this.props.handleBlur } 
            value={ this.props.values.user.password }
          />
          <ErrorMessage name="user.password" />
        </div>
      </div>
    );
  }
}

const StyledLoginForm = styled(LoginForm)`
`;
StyledLoginForm.displayName = "LoginFormSelector";


export default StyledLoginForm;



