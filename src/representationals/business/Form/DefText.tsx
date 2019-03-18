import * as React from 'react';
import TextArea from '../../base/Input/TextArea';
import { CustomFormikProps } from '../../../Hoc/withForm';
import { ErrorMessage } from 'formik';

interface Props {
  className?: string;
  defText: string;
  wordIndex: number;
  defIndex: number;
  //updateDefTextAreaChange: ( id: string, nextDefTextArea: string ) => void;
  formik: CustomFormikProps;
}

class DefTextArea extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleDefTextAreaChange = this.handleDefTextAreaChange.bind(this);
    this.handleDefTextAreaBlur = this.handleDefTextAreaBlur.bind(this);
  }

  handleDefTextAreaBlur(e: React.FocusEvent<HTMLTextAreaElement>) {
    this.props.formik.handleBlur(e);
  }

  handleDefTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.props.formik.handleChange(e);
    //this.props.updateDefTextAreaChange(this.props.defIndex, e.target.value);
  }

  render() {
    const { wordIndex, defIndex } = this.props; 
    return (
      <div>
        <TextArea 
          onChange={ this.handleDefTextAreaChange } 
          placeholder="enter your definition here..." 
          labelName={ `words.${ wordIndex }.defs.${ defIndex }.def` } 
          value={ this.props.defText }
          onBlur={ this.handleDefTextAreaBlur } 
          rows={ 3 }
          cols={ 35 }
        >
          Def
        </TextArea>
        <ErrorMessage name={ `words.${ wordIndex }.defs.${ defIndex }.def` } />
      </div>
    );
  }
}

export default DefTextArea;





