import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface Props extends RouteComponentProps<{}> {
    className?: string;
    moveToEditPageClick: () => void;
}
declare const _default: React.ComponentClass<Pick<Props, "className" | "moveToEditPageClick">, any>;
export default _default;
