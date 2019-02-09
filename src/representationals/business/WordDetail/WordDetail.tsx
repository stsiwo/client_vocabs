import * as React from 'react';
import styled from '../../story/styledComponents';
import { RouteComponentProps } from 'react-router-dom';
import WordForm from '../Form/WordForm';
import { IWord } from '../../../domains/word';
import MediaQuery from 'react-responsive';
import MobileDetailController from '../Controller/MobileDetailController';
import DefineWarningModalCont from '../../../containers/DefineWarningModalCont';
import withForm, { FormValues, CustomFormikProps } from '../../../Hoc/withForm';
import { FieldArray, InjectedFormikProps, FormikErrors } from 'formik';
const isEmpty = require('lodash/isEmpty');

interface Props extends RouteComponentProps<{}> {
  className?: string;
  words: IWord[]; 
  isDefineWarningModalOpen: boolean;
  wordFormErrorCheck: (isError: boolean) => void;
}


/**
 * display selected word items' details 
 * - selected items are defined in redux store's currentSelectedWords 
 **/
class WordDetail extends React.PureComponent<InjectedFormikProps<Props, FormValues>, {}> {
  constructor(props: InjectedFormikProps<Props, FormValues>) {
    super(props);
    this.renderSelectedWords = this.renderSelectedWords.bind(this);
    this.checkWordFormError = this.checkWordFormError.bind(this);
  }

  // check the formik errors is exists or not, then if so, assign wordFormError to true (redux state)
  // this is for knowing formik props outside form component to open defin word warning modal
  // this might be done different way so comment out for now
  // #REFACTOR
  componentDidUpdate(nextProps: InjectedFormikProps<Props, FormValues>) {
    this.checkWordFormError(nextProps.errors);
  }

  renderSelectedWords() {
  }

  checkWordFormError(errors: FormikErrors<FormValues>) {
    const isError = !isEmpty(errors);
    this.props.wordFormErrorCheck(isError);
  }

  render() {
    //console.log(this.props.values);
    // send values (from formik) instaed of words ( props )
    const { handleChange, handleBlur } = this.props; 
    // create object which holds above props except values
    const customFormikProps: CustomFormikProps = {
      handleChange: handleChange,
      handleBlur: handleBlur,
    }
    return (
      <div>
        <form className={ this.props.className }>
          <FieldArray 
            name="words" 
            render={( arrayHelpers ) => {
              return (
                <div>
                { this.props.values.words.map((word, index) => <WordForm key={ word.id } word={ word } wordIndex={ index } formik={ customFormikProps } arrayHelpers={ arrayHelpers }/>)}
                <MediaQuery maxWidth={ 425 } values={{ width: 300 }}>
                  <MobileDetailController formValues={ this.props.values } arrayHelpers={ arrayHelpers }/>
                </MediaQuery>
                </div>
              );
            }}
         />
        </form>
      { this.props.isDefineWarningModalOpen && <DefineWarningModalCont /> }
      </div>
    );
  }
}

const StyledWordDetail = styled(withForm<Props>(WordDetail))`
  @media (min-width: ${( props ) => props.theme.sizes.mobileL + 1 }px) {
    margin-left: ${( props ) => props.theme.sideBarWidth };
  }

`;
StyledWordDetail.displayName = "WordDetailSelector";


export default StyledWordDetail;


