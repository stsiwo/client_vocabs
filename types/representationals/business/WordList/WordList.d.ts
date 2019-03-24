import * as React from 'react';
interface Props {
    className?: string;
    displayedWordList: string[];
    initialWordsFetch: () => void;
    isInitialWordsFetching: boolean;
}
export declare class WordList extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    renderWordItem(): JSX.Element[];
    componentDidMount(): void;
    render(): JSX.Element;
}
declare const StyledWordList: import("styled-components").StyledComponent<typeof WordList, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledWordList;
