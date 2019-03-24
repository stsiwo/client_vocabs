import * as React from 'react';
import { InjectedFormikProps } from 'formik';
import { IWord } from '../domains/word';
export interface FormValues {
    words: IWord[];
}
export interface CustomFormikProps {
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;
}
/**************************************************************
 * custom HOC to wrap formik and its basic config
 * P: shape of props of this wrapping component. this props are sent to wrapped component
 * so props of the wrapped component must includes P
 * P is subset of Props ( of wrapped component )
 **************************************************************/
declare const withForm: <P extends FormValues>(FormComponent: React.ComponentType<InjectedFormikProps<P, FormValues>>) => React.ComponentType<P>;
export default withForm;
