/// <reference types="styled-components" />
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface Props extends RouteComponentProps {
    className?: string;
    linkClick: (path: string) => void;
}
interface State {
    isNavBarOpen: boolean;
}
declare class Header extends React.PureComponent<Props, State> {
    constructor(props: Props);
    handleClick(e: React.MouseEvent<HTMLDivElement>): void;
    handleCloseNavBar(): void;
    handleLink(e: React.MouseEvent<HTMLElement>): void;
    /**
     * location props to avoid blocking-update problem wit purecomponent and react router
     **/
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<Pick<Pick<Props & React.RefAttributes<Header>, "ref" | "className" | "history" | "location" | "match" | "staticContext" | "key" | "linkClick"> & Partial<Pick<Props & React.RefAttributes<Header>, never>>, "ref" | "className" | "history" | "location" | "match" | "staticContext" | "key" | "linkClick"> & {
    theme?: import("../../story/theme").ThemeInterface;
}, "ref" | "theme" | "className" | "key" | "linkClick">, any>;
/**
 * withRouter is to avoid blocking-update problems with pureComponent and react-router-dom
 **/
export default _default;
