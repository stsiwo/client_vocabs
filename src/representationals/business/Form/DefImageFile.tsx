import * as React from 'react';
import File from '../../base/Input/File';

interface Props {
  className?: string;
  image: string;
  defId: string;
  updateDefChange: ( id: string, nextFile: string ) => void;
  handleSearchImageToggleClick: (e: React.MouseEvent<HTMLElement>) => void; 
}

class DefImageFile extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleDefImageFileChange = this.handleDefImageFileChange.bind(this);
  }

  handleDefImageFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.updateDefChange(this.props.defId, e.target.value);
  }

  render() {
    return (
      <File 
        labelName="def-upload-image" 
        handleSearchImageToggleClick={ this.props.handleSearchImageToggleClick } 
        file={ this.props.image }
      /> 
    );
  }
}

export default DefImageFile;






