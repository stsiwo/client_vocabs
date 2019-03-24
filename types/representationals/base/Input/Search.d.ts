import * as React from 'react';
interface Props {
    className?: string;
    labelName?: string;
    placeholder?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
}
declare class Search extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    render(): JSX.Element;
}
declare const StyledSearch: import("styled-components").StyledComponent<typeof Search, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledSearch;
