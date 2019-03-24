import * as React from 'react';
import { PosEnum } from '../../../domains/pos';
import { CustomFormikProps } from '../../../Hoc/withForm';
interface Props {
    className?: string;
    posId: PosEnum;
    formik: CustomFormikProps;
    wordIndex: number;
    defIndex: number;
}
declare class PosSelect extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    handlePosBlur(e: React.FocusEvent<HTMLSelectElement>): void;
    handlePosChange(e: React.ChangeEvent<HTMLSelectElement>): void;
    render(): JSX.Element;
}
export default PosSelect;
