import * as React from 'react';
import File from '../../base/Input/File';
import { CustomFormikProps } from '../../../Hoc/withForm';

interface Props {
  className?: string;
  image: string;
  //updateDefImageClick: ( id: string, nextFile: string ) => void;
  handleSearchImageToggleClick: (e: React.MouseEvent<HTMLElement>) => void; 
  formik: CustomFormikProps;
  wordIndex: number;
  defIndex: number;
}

class DefImageFile extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleDefImageFileChange = this.handleDefImageFileChange.bind(this);
  }

  handleDefImageFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    //this.props.updateDefImageClick(this.props.defIndex, e.target.value);
  }

  render() {
    const { wordIndex, defIndex } = this.props; 
    return (
      <File 
        labelName={ `words.${ wordIndex }.defs.${ defIndex }.image` } 
        handleSearchImageToggleClick={ this.props.handleSearchImageToggleClick } 
        file={ this.props.image }
        formik={ this.props.formik }
      /> 
    );
  }
}

export default DefImageFile;






