import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../Icon/Icon';

const uploadImageIcon = require('./assets/uploadImage.svg');
const searchImageIcon = require('./assets/searchImage.svg');

interface Props {
  className?: string;
  labelName: string;
  handleSearchImageToggleClick: (e: React.MouseEvent<HTMLElement>) => void;
  // url to image server
  file: string;
}

interface State {
   currentImage: string;
}


class File extends React.Component<Props, State> {

  private preview = React.createRef<HTMLImageElement>();

  constructor(props: Props) {
    super(props);
    this.state = {
      currentImage: this.props.file,
    }
    this.handleChange = this.handleChange.bind(this);
    this.releaseObjectURL = this.releaseObjectURL.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files[0];

    console.log(typeof selectedFile);

    // display selected image to preview div
    const content = URL.createObjectURL(selectedFile);
    this.setState({ currentImage: content });

  }

  releaseObjectURL(e: React.ChangeEvent<HTMLImageElement>) {
    const src = e.target.src;
    URL.revokeObjectURL(src);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <div>
          <Icon onClick={ this.props.handleSearchImageToggleClick } svgSrc={ searchImageIcon } />
          <label htmlFor={ this.props.labelName }>
            <Icon svgSrc={ uploadImageIcon } />
          </label>
          <input type="file" id={ this.props.labelName } name={ this.props.labelName } accept="image/*" onChange={ this.handleChange }/>
        </div>
        <img src={ this.state.currentImage } ref={this.preview} onLoad={ this.releaseObjectURL }></img>
      </div>
    );
  }
}

const StyledFile = styled(File)`

  display: flex;
  align-items: center;
  justify-content: flex-start;

  // two icon
  & > div:first-child > input {
    display: none;
  }

  & > img {
    width: 100px;
    height: 70px;
  }
`
export default StyledFile;
