import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface Props extends RouteComponentProps {
    className?: string;
    isSelectWarningModalOpen: boolean;
    isDeleteConfirmModalOpen: boolean;
    isSortFilterModalOpen: boolean;
    isSearchWordModalOpen: boolean;
}
export declare class Word extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    render(): JSX.Element;
}
declare const StyledWord: import("styled-components").StyledComponent<typeof Word, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledWord;
