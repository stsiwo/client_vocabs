import * as React from 'react';
import { IDef } from '../../../domains/def';
import { CustomFormikProps } from '../../../Hoc/withForm';
interface Props {
    className?: string;
    def: IDef;
    formik: CustomFormikProps;
    wordIndex: number;
    defIndex: number;
    setFieldValue: (field: string, value: any) => void;
}
interface State {
    isSearchImageModalOpen: boolean;
}
export declare class DefContent extends React.PureComponent<Props, State> {
    constructor(props: Props);
    handleSearchImageToggleClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
declare const StyledDefContent: import("styled-components").StyledComponent<typeof DefContent, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledDefContent;
