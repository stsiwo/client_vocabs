import * as React from 'react';
import { FormValues } from '../../../Hoc/withForm';
import { ArrayHelpers } from 'formik';
interface Props {
    className?: string;
    formValues: FormValues;
    arrayHelpers: ArrayHelpers;
}
declare class Controller extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    render(): JSX.Element;
}
declare const StyleController: import("styled-components").StyledComponent<typeof Controller, import("../../story/theme").ThemeInterface, {}, never>;
export default StyleController;
