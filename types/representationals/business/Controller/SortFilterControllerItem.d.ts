import * as React from 'react';
import { toggleClickType } from '../../../containers/type';
interface Props {
    className?: string;
    isSortFilterModalOpen: boolean;
    toggleSortFilterModalClick: toggleClickType;
}
export declare class SortFilterControllerItem extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    onSortFilterClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
export default SortFilterControllerItem;
