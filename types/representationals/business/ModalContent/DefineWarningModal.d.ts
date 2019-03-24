import * as React from 'react';
import { toggleClickType } from '../../../containers/type';
interface Props {
    className?: string;
    isDefineWarningModalOpen: boolean;
    toggleDefineWarningModalClick: toggleClickType;
}
declare class DefineWarningModal extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    render(): JSX.Element;
}
declare const StyledDefineWarningModal: import("styled-components").StyledComponent<typeof DefineWarningModal, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledDefineWarningModal;
