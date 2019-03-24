import * as React from 'react';
interface Props {
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    children?: string;
    svgSrc: string;
}
export declare class ControllerItem extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    handleClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
declare const StyleControllerItem: import("styled-components").StyledComponent<typeof ControllerItem, import("../../story/theme").ThemeInterface, {}, never>;
export default StyleControllerItem;
