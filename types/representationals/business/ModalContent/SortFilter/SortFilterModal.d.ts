import * as React from 'react';
import { toggleClickType } from '../../../../containers/type';
interface Props {
    className?: string;
    isSortFilterModalOpen: boolean;
    toggleSortFilterModalClick: toggleClickType;
}
declare class SortFilterModal extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    render(): JSX.Element;
}
declare const StyledSortFilterModal: import("styled-components").StyledComponent<typeof SortFilterModal, import("../../../story/theme").ThemeInterface, {}, never>;
export default StyledSortFilterModal;
