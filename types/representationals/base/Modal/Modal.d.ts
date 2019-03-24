import * as React from 'react';
import { toggleClickType } from '../../../containers/type';
interface Props {
    className?: string;
    title: string;
    detail: string;
    children?: React.ReactNode;
    closeButton: React.ReactNode;
    confirmButton?: React.ReactNode;
    resetButton?: React.ReactNode;
    onClose: toggleClickType;
    isOpen: boolean;
}
declare class Modal extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    stopEventBubblingUp(e: React.MouseEvent<HTMLElement>): void;
    handleCloseOutsideClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
declare const StyledModal: import("styled-components").StyledComponent<typeof Modal, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledModal;
