import * as React from 'react';
interface Props {
    className?: string;
}
declare class Dictionary extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    render(): JSX.Element;
}
declare const StyledDictionary: import("styled-components").StyledComponent<typeof Dictionary, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledDictionary;
