import * as React from 'react';
import { toggleClickType } from '../../../containers/type';
interface Props {
    className?: string;
    toggleSearchWordModalClick: toggleClickType;
    isSearchWordModalOpen: boolean;
}
export declare class SearchWordControllerItem extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    onSearchClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
export default SearchWordControllerItem;
