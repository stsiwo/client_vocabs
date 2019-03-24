import * as React from 'react';
interface Props {
    className?: string;
    placeholder?: string;
    labelName: string;
    svgSrc: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    id?: string;
    inputRef: React.RefObject<HTMLInputElement>;
}
declare class TextWithIcon extends React.Component<Props, {}> {
    constructor(props: Props);
    render(): JSX.Element;
}
declare const StyledTextWithIcon: import("styled-components").StyledComponent<typeof TextWithIcon, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledTextWithIcon;
