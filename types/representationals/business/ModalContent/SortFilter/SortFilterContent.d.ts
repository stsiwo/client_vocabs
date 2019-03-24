import * as React from 'react';
interface Props {
    className?: string;
    onSortChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFilterContChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare class SortFilterCont extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    render(): JSX.Element;
}
declare const StyledSortFilterCont: import("styled-components").StyledComponent<typeof SortFilterCont, import("../../../story/theme").ThemeInterface, {}, never>;
export default StyledSortFilterCont;
