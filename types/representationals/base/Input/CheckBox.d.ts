import * as React from 'react';
interface Props {
    className?: string;
    labelName?: string;
    children?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    value?: any;
}
declare class CheckBox extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
declare const StyledCheckBox: import("styled-components").StyledComponent<typeof CheckBox, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledCheckBox;
