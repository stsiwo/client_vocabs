import * as React from 'react';
interface Props {
    className?: string;
    onConfirm: () => void;
    label?: string;
}
declare class ConfirmButton extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    handleClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
declare const StyledConfirmButton: import("styled-components").StyledComponent<typeof ConfirmButton, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledConfirmButton;
