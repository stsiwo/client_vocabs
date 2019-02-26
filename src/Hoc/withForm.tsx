import * as React from 'react';
import { withFormik, InjectedFormikProps } from 'formik';
import { IWord } from '../domains/word';
import * as Yup from 'yup';

// shape of form values
export interface FormValues {
  words: IWord[];
}

// type of custom Formik Porps ( I pick some useful props and gather here )
// basically to send those props to child component in organized way 
// definitely better than send each prop to children
// e.g., <Child errors={ this.props.errors } touched={ this.props.touched } .... />
// if need to other props from Formik props, add it accordingly and send as props to children component
export interface CustomFormikProps {
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any>) => void;
}

// words validation schema
const WordsValidationSchema = Yup.object().shape({
  words: Yup.array().of(Yup.object().shape({
    name: Yup.string().required("required"),
    defs: Yup.array().of(Yup.object().shape({
      posId: Yup.number().integer().lessThan(10, "pos errors"),
      def: Yup.string().required("required"),
      image: Yup.string().notRequired(),
    }))
  }))
})

/**************************************************************
 * custom HOC to wrap formik and its basic config
 * P: shape of props of this wrapping component. this props are sent to wrapped component
 * so props of the wrapped component must includes P
 * P is subset of Props ( of wrapped component )
 **************************************************************/
const withForm = <P extends FormValues>( FormComponent: React.ComponentType<InjectedFormikProps<P, FormValues>> ) => {
  return withFormik<P, FormValues>({
    // change props of this wrapping component into form values: set initial form values here
    mapPropsToValues: props => {
      return {
        words: props.words,
      };
    },

    // better to use validation schema (like Yup)
    // can be synchronous or asynchronous
    // return FormikErrors or Promise
    //validate: (values: FormValues) => {
      //let errors: FormikErrors<FormValues> = {};
      //return errors;
    //},

    // handle submit with submitted form values and extra object called "FormikBag"
    // FormikBag: includes props passed to wrapped component and some useful functions (see doc)
    handleSubmit: (values: FormValues) => {
      // use thunk to submit async so do nothing here
      console.log('inside handleSubmit in formik'); 
    },

    // validation schema
    validationSchema: () => WordsValidationSchema,

  })(FormComponent);
};
export default withForm;
