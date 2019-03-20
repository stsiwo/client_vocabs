/// <reference types="styled-components" />
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface Props extends RouteComponentProps {
    className?: string;
}
declare class Content extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    /**
     * Warning: Failed prop type: Invalid prop `component` of type `object` supplied to `Route`, expected `function`.
     *  - this error occurs when use "component" props in Route. I have no idea why this happened
     *  - so for now, I use "component" props even though error, it works properly
     **/
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<Pick<Pick<Props & React.RefAttributes<Content>, "ref" | "className" | "history" | "location" | "match" | "staticContext" | "key"> & Partial<Pick<Props & React.RefAttributes<Content>, never>>, "ref" | "className" | "history" | "location" | "match" | "staticContext" | "key"> & {
    theme?: import("../../story/theme").ThemeInterface;
}, "ref" | "theme" | "className" | "key">, any>;
/**
 * need to wrap with withRouter HOC because pure component blocking route update
 **/
export default _default;
