import styled from './representationals/story/styledComponents';
import * as React from 'react';

interface Props {
  className?: string;
}

interface State {
  image: File;
  imageUrl: string;
}

class ImageExperiment extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      image: null,
      imageUrl: "",
    }
    this.handleImageChange = this.handleImageChange.bind(this);  
    this.releaseObjectURL = this.releaseObjectURL.bind(this);  
    this.handleDragEnter = this.handleDragEnter.bind(this);  
    this.handleDragOver = this.handleDragOver.bind(this);  
    this.handleDrop = this.handleDrop.bind(this);  
  }

  handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.assignImageToSate(e.target.files[0]);
  }

  releaseObjectURL() {
    URL.revokeObjectURL(this.state.imageUrl);
  }

  handleDragEnter( e: React.DragEvent<HTMLDivElement> ) {
    e.stopPropagation();
    e.preventDefault();
  }

  handleDragOver( e: React.DragEvent<HTMLDivElement> ) {
    e.stopPropagation();
    e.preventDefault();
  }

  handleDrop( e: React.DragEvent<HTMLDivElement> ) {
    e.stopPropagation();
    e.preventDefault();

    const dataTransfer = e.dataTransfer;
    const files = dataTransfer.files;

    this.assignImageToSate(files[0]);

  }

  private assignImageToSate(image: File) {
    this.setState({ image: image, imageUrl: URL.createObjectURL(image) });
  }

  render() {
    return (
      <div className={ this.props.className }>
        <input type="file" accept="image/*" onChange={ this.handleImageChange } />
        <img src={ this.state.imageUrl } width="200" height="200" onLoad={ this.releaseObjectURL }/>
        <div id="dropbox" onDragEnter={ this.handleDragEnter } onDragOver={ this.handleDragOver } onDrop={ this.handleDrop }></div>
      </div>
    );
  }
}

const StyledImageExperiment = styled(ImageExperiment)`
  & > #dropbox {
    width: 300px;
    height: 300px;
    border: 1px solid black;
  }

`;
StyledImageExperiment.displayName = "ImageExperimentSelector";

export default StyledImageExperiment; 



