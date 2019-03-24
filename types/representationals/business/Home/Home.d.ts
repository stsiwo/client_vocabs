import * as React from 'react';
interface Props {
    className?: string;
}
interface State {
    isFMOpen: boolean;
}
declare class Home extends React.PureComponent<Props, State> {
    constructor(props: Props);
    onClose(): void;
    render(): JSX.Element;
}
declare const StyledHome: import("styled-components").StyledComponent<typeof Home, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledHome;
