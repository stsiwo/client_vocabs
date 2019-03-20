import * as React from 'react';
interface Props {
    className?: string;
    children: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    id: string;
}
declare class Button extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    handleClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
declare const StyledButton: import("styled-components").StyledComponent<typeof Button, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledButton;
