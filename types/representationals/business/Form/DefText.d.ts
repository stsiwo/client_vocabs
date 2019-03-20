import * as React from 'react';
import { CustomFormikProps } from '../../../Hoc/withForm';
interface Props {
    className?: string;
    defText: string;
    wordIndex: number;
    defIndex: number;
    formik: CustomFormikProps;
}
declare class DefTextArea extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    handleDefTextAreaBlur(e: React.FocusEvent<HTMLTextAreaElement>): void;
    handleDefTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    render(): JSX.Element;
}
export default DefTextArea;
