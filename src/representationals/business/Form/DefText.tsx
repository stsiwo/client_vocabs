import * as React from 'react';
import Text from '../../base/Input/Text';
import { CustomFormikProps } from '../../../Hoc/withForm';
import { ErrorMessage } from 'formik';

interface Props {
  className?: string;
  defText: string;
  wordIndex: number;
  defIndex: number;
  //updateDefTextChange: ( id: string, nextDefText: string ) => void;
  formik: CustomFormikProps;
}

class DefText extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleDefTextChange = this.handleDefTextChange.bind(this);
    this.handleDefTextBlur = this.handleDefTextBlur.bind(this);
  }

  handleDefTextBlur(e: React.FocusEvent<HTMLInputElement>) {
    this.props.formik.handleBlur(e);
  }

  handleDefTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.formik.handleChange(e);
    //this.props.updateDefTextChange(this.props.defIndex, e.target.value);
  }

  render() {
    const { wordIndex, defIndex } = this.props; 
    return (
      <div>
        <Text 
          onChange={ this.handleDefTextChange } 
          placeholder="enter your definition here..." 
          labelName={ `words.${ wordIndex }.defs.${ defIndex }.def` } 
          value={ this.props.defText }
          onBlur={ this.handleDefTextBlur } 
        >
          Def
        </Text>
        <ErrorMessage name={ `words.${ wordIndex }.defs.${ defIndex }.def` } />
      </div>
    );
  }
}

export default DefText;





