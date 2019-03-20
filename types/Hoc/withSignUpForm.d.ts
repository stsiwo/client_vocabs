import * as React from 'react';
import { InjectedFormikProps } from 'formik';
import { toggleClickType } from '../containers/type';
export interface ISignUpUserForm {
    name: string;
    email: string;
    password: string;
    confirm: string;
}
export interface SignUpFormValues {
    user: ISignUpUserForm;
}
interface FormComponentProps {
    className?: string;
    isSignUpModalOpen: boolean;
    toggleSignUpModalClick: toggleClickType;
    submitSignUpFormClick: (values: ISignUpUserForm) => void;
}
/**************************************************************
 * custom HOC to wrap formik and its basic config
 * P: shape of props of this wrapping component. this props are sent to wrapped component
 * so props of the wrapped component must includes P
 * P is subset of Props ( of wrapped component )
 **************************************************************/
declare const withSignUpForm: <P extends FormComponentProps>(FormComponent: React.ComponentType<InjectedFormikProps<P, SignUpFormValues>>) => React.ComponentType<P>;
export default withSignUpForm;
