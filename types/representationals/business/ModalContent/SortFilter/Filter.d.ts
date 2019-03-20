import * as React from 'react';
import { changeFilterDispatchType } from '../../../../containers/type';
interface Props {
    className?: string;
    currentFilter: number[];
    changeFilter: changeFilterDispatchType;
}
declare class Filter extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    renderPosCheckBox(): JSX.Element[];
    render(): JSX.Element;
}
declare const StyledFilter: import("styled-components").StyledComponent<typeof Filter, import("../../../story/theme").ThemeInterface, {}, never>;
export default StyledFilter;
