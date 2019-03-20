import * as React from 'react';
import { toggleSelectWarningModalClickType } from '../../../containers/type';
interface Props {
    className?: string;
    isSelectWarningModalOpen: boolean;
    toggleSelectWarningModalClick: toggleSelectWarningModalClickType;
}
declare class SelectModal extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    render(): JSX.Element;
}
declare const StyledSelectModal: import("styled-components").StyledComponent<typeof SelectModal, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledSelectModal;
