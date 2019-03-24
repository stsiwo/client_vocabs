import * as React from 'react';
interface Props {
    className?: string;
    onClose: (e: React.MouseEvent<HTMLElement>) => void;
    message: string;
    type: string;
}
declare class FlashMessage extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    render(): JSX.Element;
}
declare const StyledFlashMessage: import("styled-components").StyledComponent<typeof FlashMessage, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledFlashMessage;
