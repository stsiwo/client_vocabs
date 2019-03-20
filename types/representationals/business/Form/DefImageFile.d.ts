import * as React from 'react';
import { CustomFormikProps } from '../../../Hoc/withForm';
interface Props {
    className?: string;
    image: string;
    handleSearchImageToggleClick: (e: React.MouseEvent<HTMLElement>) => void;
    formik: CustomFormikProps;
    wordIndex: number;
    defIndex: number;
    setFieldValue: (field: string, value: any) => void;
}
interface State {
    imageURL: string;
}
declare class DefImageFile extends React.PureComponent<Props, State> {
    constructor(props: Props);
    handleDefImageFileChange(e: React.ChangeEvent<HTMLInputElement>): void;
    handleDefImageFileDrop(e: React.DragEvent<HTMLDivElement>): void;
    private assignImageFile;
    render(): JSX.Element;
}
export default DefImageFile;
