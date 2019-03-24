import * as React from 'react';
import { ThemeInterface } from '../../story/theme';
interface Props {
    className?: string;
    isOpen: boolean;
    children?: React.ReactNode;
    handleSearchImageToggleClick: (e: React.MouseEvent<HTMLElement>) => void;
}
declare class BottomModal extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    handleClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
declare const StyledBottomModal: import("styled-components").StyledComponent<typeof BottomModal, ThemeInterface, {}, never>;
export default StyledBottomModal;
