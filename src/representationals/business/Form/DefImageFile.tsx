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
  setFieldValue: (field: string, value: any) => void;
}

interface State {
  imageURL: string;
}

class DefImageFile extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      imageURL: this.props.image
    };
    this.handleDefImageFileChange = this.handleDefImageFileChange.bind(this);
    this.handleDefImageFileDrop = this.handleDefImageFileDrop.bind(this);
    this.assignImageFile = this.assignImageFile.bind(this);
  }

  handleDefImageFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const image = e.target.files[0];
    this.assignImageFile(image);

  }

  handleDefImageFileDrop(e: React.DragEvent<HTMLDivElement>) {
    e.stopPropagation();
    e.preventDefault();

    const dataTransfer = e.dataTransfer;
    const image = dataTransfer.files[0];
    this.assignImageFile(image);
  }

  private assignImageFile(image: File) {
    const { wordIndex, defIndex } = this.props; 
    const imageURL = URL.createObjectURL(image);
    this.props.setFieldValue(`words.${ wordIndex }.defs.${ defIndex }.image`, imageURL); 
    this.props.setFieldValue(`words.${ wordIndex }.defs.${ defIndex }.imageFile`, image); 
    this.setState({ imageURL: imageURL });
  }

  render() {
    const { wordIndex, defIndex } = this.props; 
    return (
      <File 
        labelName={ `words.${ wordIndex }.defs.${ defIndex }.image` } 
        handleSearchImageToggleClick={ this.props.handleSearchImageToggleClick } 
        onChange={ this.handleDefImageFileChange }
        file={ this.state.imageURL }
        formik={ this.props.formik }
        onDrop={ this.handleDefImageFileDrop }
      /> 
    );
  }
}

export default DefImageFile;






