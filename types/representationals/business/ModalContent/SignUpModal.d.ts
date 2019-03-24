import * as React from 'react';
import { toggleClickType } from '../../../containers/type';
import { ISignUpUserForm } from '../../../Hoc/withSignUpForm';
interface Props {
    className?: string;
    isSignUpModalOpen: boolean;
    toggleSignUpModalClick: toggleClickType;
    submitSignUpFormClick: (values: ISignUpUserForm) => void;
}
declare const StyledSignUpModal: import("styled-components").StyledComponent<React.ComponentType<Props>, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledSignUpModal;
