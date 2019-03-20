import * as React from 'react';
import { IWord } from '../../../domains/word';
import { CustomFormikProps } from '../../../Hoc/withForm';
import { ArrayHelpers } from 'formik';
interface Props {
    className?: string;
    word: IWord;
    formik: CustomFormikProps;
    wordIndex: number;
    arrayHelpers: ArrayHelpers;
    setFieldValue: (field: string, value: any) => void;
}
declare class WordForm extends React.PureComponent<Props, {}> {
    private ref;
    constructor(props: Props);
    componentDidUpdate(): void;
    render(): JSX.Element;
}
declare const StyledWordForm: import("styled-components").StyledComponent<typeof WordForm, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledWordForm;
