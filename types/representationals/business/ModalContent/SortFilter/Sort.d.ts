import * as React from 'react';
import { ISort } from '../../../../domains/sort';
import { changeSortDispatchType } from '../../../../containers/type';
interface Props {
    className?: string;
    currentSort: ISort;
    changeSort: changeSortDispatchType;
}
declare class Sort extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
declare const StyledSort: import("styled-components").StyledComponent<typeof Sort, import("../../../story/theme").ThemeInterface, {}, never>;
export default StyledSort;
