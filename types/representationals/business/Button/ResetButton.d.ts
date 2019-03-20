import * as React from 'react';
import { resetSortFilterDispatchType } from '../../../containers/type';
interface Props {
    className?: string;
    resetSortFilterClick: resetSortFilterDispatchType;
}
declare class ResetButton extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    handleClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
declare const StyledResetButton: import("styled-components").StyledComponent<typeof ResetButton, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledResetButton;
