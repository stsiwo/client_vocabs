import * as React from 'react';
import Select from '../../base/Input/Select';
import { PosEnum, pos } from '../../../domains/pos';
import { CustomFormikProps } from '../../../Hoc/withForm';
import { ErrorMessage } from 'formik';

interface Props {
  className?: string;
  pos: PosEnum;
  //updateDefPosChange: ( id: string, nextPos: PosEnum ) => void;
  formik: CustomFormikProps;
  wordIndex: number;
  defIndex: number;
}

class PosSelect extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handlePosChange = this.handlePosChange.bind(this);
    this.handlePosBlur = this.handlePosBlur.bind(this);
  }

  handlePosBlur(e: React.FocusEvent<HTMLSelectElement>) {
    this.props.formik.handleBlur(e);
  }

  handlePosChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.props.formik.handleChange(e);
    //this.props.updateDefPosChange(this.props.defId, parseInt(e.target.value));
  }

  render() {
    const { wordIndex, defIndex } = this.props;
    return (
      <div>
        <Select 
          onChange={ this.handlePosChange } 
          onBlur={ this.handlePosBlur }
          items={ pos } 
          pos={ this.props.pos } 
          labelName={ `words.${ wordIndex }.defs.${ defIndex }.pos` } 
        > 
          Pos
        </Select>
        <ErrorMessage name={ `words.${ wordIndex }.defs.${ defIndex }.pos` } />
      </div>
    );
  }
}

export default PosSelect;




