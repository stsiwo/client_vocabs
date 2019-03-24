import * as React from 'react';
interface ImageIF {
    name: string;
    src: string;
}
interface Props {
    className?: string;
    wordName: string;
    defId: string;
    wordId: string;
}
interface State {
    items: ImageIF[];
    searchInput: string;
}
declare class SearchImageModalContent extends React.PureComponent<Props, State> {
    constructor(props: Props);
    handleSearchBtnClick(e: React.MouseEvent<HTMLElement>): void;
    handleSearchInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export default SearchImageModalContent;
