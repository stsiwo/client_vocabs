import * as React from 'react';
import { LoginFormValues } from '../../../Hoc/withLoginForm';
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
declare class LoginForm extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    toggleErrorFlashMessageClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
declare const StyledLoginForm: import("styled-components").StyledComponent<typeof LoginForm, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledLoginForm;
