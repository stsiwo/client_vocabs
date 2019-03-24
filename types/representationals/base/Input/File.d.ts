import * as React from 'react';
import { CustomFormikProps } from '../../../Hoc/withForm';
interface Props {
    className?: string;
    labelName: string;
    handleSearchImageToggleClick: (e: React.MouseEvent<HTMLElement>) => void;
    file: string;
    formik: CustomFormikProps;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
}
declare class File extends React.PureComponent<Props, {}> {
    private preview;
    constructor(props: Props);
    /*******************************************************************
     * need to fix later (how to handle image with formik validation)
     * also how to upload image and fetch from image server
     *******************************************************************/
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    handleBlur(e: React.FocusEvent<HTMLInputElement>): void;
    handleDragEnter(e: React.DragEvent<HTMLDivElement>): void;
    handleDragOver(e: React.DragEvent<HTMLDivElement>): void;
    handleDrop(e: React.DragEvent<HTMLDivElement>): void;
    releaseObjectURL(e: React.ChangeEvent<HTMLImageElement>): void;
    render(): JSX.Element;
}
declare const StyledFile: import("styled-components").StyledComponent<typeof File, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledFile;
