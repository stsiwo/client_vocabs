import * as React from 'react';
import { withFormik, InjectedFormikProps } from 'formik';
import * as Yup from 'yup';
import { toggleClickType } from '../containers/type';
import makeUserNameUniqueCheckRequest from '../thunk/requests/makeUserNameUniqueCheckRequest';
import makeEmailAlreadyExistRequest from '../thunk/requests/makeEmailAlreadyExistRequest';
import myFetch from '../thunk/asyncs/myFetch';

export interface ISignUpUserForm {
  name: string;
  email: string;
  password: string;
  confirm: string;
}
// shape of form values
export interface SignUpFormValues {
  user: ISignUpUserForm;
}

// words validation schema
const SignUpValidationSchema = Yup.object().shape({
  user: Yup.object().shape({
    name: Yup.string()
      .required("name is required")
    /**
     * should allow this async check only on blur but formik does not have any implementation for this
     *  - formik validate every field when a value of a field is changed
     *  - every key stroke cause also vaidation on every fields
     *    => this is way inefficient, should be reconsider the implementation (like not use formik) or something
     *    #REFACTOR
     **/
      .test('isUnique', 'your input name has already taken by someone. please choose a different one', async function( name: string ) {
        const request = makeUserNameUniqueCheckRequest(name);
        const resObject: { isUnique: boolean } = await myFetch(request);
        return resObject.isUnique; 
      }),
    email: Yup.string()
      .email("invalid email format")
      .required("email is required")
    /**
     * should allow this async check only on blur but formik does not have any implementation for this
     *  - formik validate every field when a value of a field is changed
     *  - every key stroke cause also vaidation on every fields
     *    => this is way inefficient, should be reconsider the implementation (like not use formik) or something
     *    #REFACTOR
     **/
      .test('alwaysExists', 'your input email has already existed. if you have your account, please go to login page', async function( email: string ) {
        const request = makeEmailAlreadyExistRequest(email);
        const resObject: { isAlreadyExists: boolean } = await myFetch(request);
        // must return false if you want treat this as error
        return !resObject.isAlreadyExists; 
      }),
    password: Yup.string()
      .required("password is required")
      .min(8, 'password is at least 8 characters')
      .matches(/[a-zA-Z0-9]/, 'password need to contains alphabets (lower or upper case character) or numbers'), 
    confirm:  Yup.string()
     .oneOf([Yup.ref('password'), null], "password does not match")
     .required('Password confirm is required') 
  })
})

// this came from wrapped component which is "SignUpModal"
interface FormComponentProps {
  className?: string;
  isSignUpModalOpen: boolean;
  toggleSignUpModalClick: toggleClickType; 
  submitSignUpFormClick: ( values: ISignUpUserForm ) => void;
}

/**************************************************************
 * custom HOC to wrap formik and its basic config
 * P: shape of props of this wrapping component. this props are sent to wrapped component
 * so props of the wrapped component must includes P
 * P is subset of Props ( of wrapped component )
 **************************************************************/
const withSignUpForm = <P extends FormComponentProps>( FormComponent: React.ComponentType<InjectedFormikProps<P, SignUpFormValues>> ) => {
  return withFormik<P, SignUpFormValues>({
    // change props of this wrapping component into form values: set initial form values here
    mapPropsToValues: props => {
      return {
        user: {
          name: "",
          email: "",
          password: "",
          confirm: ""
        }
      };
    },

    // better to use validation schema (like Yup)
    // can be synchronous or asynchronous
    // return FormikErrors or Promise
    //validate: (values: SignUpFormValues) => {
      //let errors: FormikErrors<SignUpFormValues> = {};
      //return errors;
    //},

    // handle submit with submitted form values and extra object called "FormikBag"
    // FormikBag: includes props passed to wrapped component and some useful functions (see doc)
    handleSubmit: (values: SignUpFormValues, { props }) => {
      // use thunk to submit async so do nothing here
      console.log(props);
      console.log("sumit form");
      props.submitSignUpFormClick(values.user);
    },

    // validation schema
    validationSchema: () => SignUpValidationSchema,

  })(FormComponent);
};
export default withSignUpForm;

