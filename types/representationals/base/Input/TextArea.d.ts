import * as React from 'react';
interface Props {
    className?: string;
    placeholder?: string;
    labelName: string;
    children: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    value: string;
    id?: string;
    cols?: number;
    rows?: number;
}
declare class TextArea extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    handleBlur(e: React.FocusEvent<HTMLTextAreaElement>): void;
    handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    render(): JSX.Element;
}
declare const StyledTextArea: import("styled-components").StyledComponent<typeof TextArea, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledTextArea;
