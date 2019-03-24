import * as React from 'react';
import { FormValues } from '../../../Hoc/withForm';
import { ArrayHelpers } from 'formik';
interface Props {
    className?: string;
    formValues: FormValues;
    arrayHelpers: ArrayHelpers;
}
declare class MobileController extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    render(): JSX.Element;
}
declare const StyleMobileController: import("styled-components").StyledComponent<typeof MobileController, import("../../story/theme").ThemeInterface, {}, never>;
export default StyleMobileController;
