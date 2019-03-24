import * as React from 'react';
interface ImageIF {
    name: string;
    src: string;
}
interface Props {
    className?: string;
    items: ImageIF[];
    defId: string;
}
declare class SearchResults extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    handleDefImageClick(e: React.MouseEvent<HTMLElement>): void;
    renderImageElement(): JSX.Element[];
    render(): JSX.Element;
}
/******************************************
// react + typescript can't define displayName: error TS2339: Property 'displayName' does not exist on type 'typeof SearchResults'
//SearchResults.displayName = "SearchResults";
*******************************************/
declare const StyledSearchResults: import("styled-components").StyledComponent<typeof SearchResults, import("../../../story/theme").ThemeInterface, {}, never>;
export default StyledSearchResults;
