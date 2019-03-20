import * as React from 'react';
import { toggleClickType } from '../../../containers/type';
import { ILoginUserForm } from '../../../Hoc/withLoginForm';
interface Props {
    className?: string;
    isLoginModalOpen: boolean;
    toggleLoginModalClick: toggleClickType;
    submitLoginFormClick: (values: ILoginUserForm) => void;
}
declare const StyledLoginModal: import("styled-components").StyledComponent<React.ComponentType<Props>, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledLoginModal;
