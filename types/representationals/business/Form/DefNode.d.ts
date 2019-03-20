import * as React from 'react';
import { IDef } from '../../../domains/def';
import { CustomFormikProps } from '../../../Hoc/withForm';
import { ArrayHelpers } from 'formik';
interface Props {
    className?: string;
    def: IDef;
    isOpen: boolean;
    formik: CustomFormikProps;
    wordIndex: number;
    defIndex: number;
    arrayHelpers: ArrayHelpers;
    removeDefClick: (arrayHelpers: ArrayHelpers, wordIndex: number, defIndex: number) => void;
    setFieldValue: (field: string, value: any) => void;
    defLength: number;
}
export declare class DefNode extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    handleDeleteDefClick(e: React.MouseEvent<HTMLElement>): void;
    isDefMoreThanOne(): boolean;
    render(): JSX.Element;
}
declare const StyledDefNode: import("styled-components").StyledComponent<typeof DefNode, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledDefNode;
