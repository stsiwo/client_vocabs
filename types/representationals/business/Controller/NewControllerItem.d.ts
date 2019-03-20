import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ArrayHelpers } from 'formik';
interface Props extends RouteComponentProps<{}> {
    className?: string;
    arrayHelpers: ArrayHelpers;
    newIconClick: (callback: (obj: any) => void) => void;
}
/**
 * #REFACTOR
 *  - cobmination of "new" and select item on word list (left side bar) when larger screen does not work.
 *    - causes newly created word deleted
 *    - this is because newly created word is not saved in any storage
 **/
export declare class NewControllerItem extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    onNewClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<Props, "className" | "arrayHelpers" | "newIconClick">, any>;
export default _default;
