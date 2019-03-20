import * as React from 'react';
import { SignUpFormValues } from '../../../Hoc/withSignUpForm';
interface Props {
    className?: string;
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;
    values: SignUpFormValues;
}
declare class SignUpForm extends React.PureComponent<Props> {
    constructor(props: Props);
    render(): JSX.Element;
}
declare const StyledSignUpForm: import("styled-components").StyledComponent<typeof SignUpForm, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledSignUpForm;
