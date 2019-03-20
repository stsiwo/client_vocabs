import * as React from 'react';
interface Props {
    className?: string;
    unchecked?: boolean;
    hoverEffect?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    hidden?: boolean;
    svgSrc: string;
    width?: string;
    height?: string;
    rotate?: string;
    id?: string;
}
declare class WrapperIcon extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    handleClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
declare const StyledWrapperIcon: import("styled-components").StyledComponent<typeof WrapperIcon, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledWrapperIcon;
