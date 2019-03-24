import * as React from 'react';
import { toggleClickType } from '../../../containers/type';
interface Props {
    className?: string;
    onClose: toggleClickType;
}
/**
 * not implement container component for this because each modal has different ui state so can't identify which one is clicked. instead use prop to send close click event
 **/
declare class CloseButton extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    handleClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
declare const StyledCloseButton: import("styled-components").StyledComponent<typeof CloseButton, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledCloseButton;
