import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface Props extends RouteComponentProps {
    className?: string;
    backWordClick: () => void;
}
export declare class BackControllerItem extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    onBackClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<Props, "className" | "backWordClick">, any>;
export default _default;
