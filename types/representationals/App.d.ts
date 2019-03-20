/// <reference types="styled-components" />
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface Props extends RouteComponentProps {
    className?: string;
}
declare class App extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<Pick<Pick<Props & React.RefAttributes<App>, "ref" | "className" | "history" | "location" | "match" | "staticContext" | "key"> & Partial<Pick<Props & React.RefAttributes<App>, never>>, "ref" | "className" | "history" | "location" | "match" | "staticContext" | "key"> & {
    theme?: import("./story/theme").ThemeInterface;
}, "ref" | "theme" | "className" | "key">, any>;
export default _default;
