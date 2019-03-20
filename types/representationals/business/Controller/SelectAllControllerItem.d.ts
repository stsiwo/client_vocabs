import * as React from 'react';
import { selectAllWordDispatchType } from '../../../containers/type';
interface Props {
    className?: string;
    selectAllWordClick: selectAllWordDispatchType;
}
/**
 * #REFACTOR:
 *
 *  - fucking slow when the number of words is huge
 **/
export declare class SelectAllControllerItem extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    onSelectAllClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
export default SelectAllControllerItem;
