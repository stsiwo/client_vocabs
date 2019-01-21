import * as React from 'react';
import styled from '../../story/styledComponents';
import { RouteComponentProps } from 'react-router-dom';
import WordForm from '../Form/WordForm';
import { IWord } from '../../../domains/word';
import MediaQuery from 'react-responsive';
import MobileDetailController from '../Controller/MobileDetailController';
import DefineWarningModalCont from '../../../containers/DefineWarningModalCont';
import withForm, { FormValues, CustomFormikProps } from '../../../Hoc/withForm';
import { InjectedFormikProps, FormikErrors } from 'formik';
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
class WordDetail extends React.Component<InjectedFormikProps<Props, FormValues>, {}> {
  constructor(props: InjectedFormikProps<Props, FormValues>) {
    super(props);
    this.renderSelectedWords = this.renderSelectedWords.bind(this);
    this.checkWordFormError = this.checkWordFormError.bind(this);
  }

  // check the formik errors is exists or not, then if so, assign wordFormError to true (redux state)
  // this is for knowing formik props outside form component to open defin word warning modal
  componentWillReceiveProps(nextProps: InjectedFormikProps<Props, FormValues>) {
    this.checkWordFormError(nextProps.errors);
  }

  renderSelectedWords() {
    // send values (from formik) instaed of words ( props )
    const { values, errors, touched, handleChange, handleBlur } = this.props; 
    // create object which holds above props except values
    const customFormikProps: CustomFormikProps = {
      errors: errors,
      touched: touched,
      handleChange: handleChange,
      handleBlur: handleBlur,
    }
    
    return values.words.map(( word, index ) => <WordForm key={ word.id } word={ word } wordIndex={ index } formik={ customFormikProps } /> ) 
  }

  checkWordFormError(errors: FormikErrors<FormValues>) {
    const isError = !isEmpty(errors);
    this.props.wordFormErrorCheck(isError);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <form className={ this.props.className }>
        { this.renderSelectedWords() }
        </form>
        <MediaQuery maxWidth={ 425 } values={{ width: 300 }}>
          <MobileDetailController />
          { this.props.isDefineWarningModalOpen && <DefineWarningModalCont /> }
        </MediaQuery>
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


