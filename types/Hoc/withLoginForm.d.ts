import * as React from 'react';
import { InjectedFormikProps } from 'formik';
import { toggleClickType } from '../containers/type';
export interface ILoginUserForm {
    name: string;
    email: string;
    password: string;
}
export interface LoginFormValues {
    user: ILoginUserForm;
}
interface FormComponentProps {
    className?: string;
    isLoginModalOpen: boolean;
    toggleLoginModalClick: toggleClickType;
    submitLoginFormClick: (values: ILoginUserForm) => void;
}
/**************************************************************
 * custom HOC to wrap formik and its basic config
 * P: shape of props of this wrapping component. this props are sent to wrapped component
 * so props of the wrapped component must includes P
 * P is subset of Props ( of wrapped component )
 **************************************************************/
declare const withLoginForm: <P extends FormComponentProps>(FormComponent: React.ComponentType<InjectedFormikProps<P, LoginFormValues>>) => React.ComponentType<P>;
export default withLoginForm;
