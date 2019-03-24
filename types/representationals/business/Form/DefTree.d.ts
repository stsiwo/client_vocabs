import * as React from 'react';
import { IDef } from '../../../domains/def';
import { CustomFormikProps } from '../../../Hoc/withForm';
import { ArrayHelpers } from 'formik';
interface Props {
    className?: string;
    defs: IDef[];
    formik: CustomFormikProps;
    wordIndex: number;
    addNewDefClick: (arrayHelpers: ArrayHelpers, wordIndex: number) => void;
    arrayHelpers: ArrayHelpers;
    setFieldValue: (field: string, value: any) => void;
}
interface State {
    isDefNodeContOpen: boolean;
}
export declare class DefTree extends React.PureComponent<Props, State> {
    constructor(props: Props);
    handleToggleClick(e: React.MouseEvent<HTMLElement>): void;
    handleNewDefClick(e: React.MouseEvent<HTMLElement>): void;
    renderDefNodeConts(): JSX.Element[];
    render(): JSX.Element;
}
declare const StyledDefTree: import("styled-components").StyledComponent<typeof DefTree, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledDefTree;
