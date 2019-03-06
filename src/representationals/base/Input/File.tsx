import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../Icon/Icon';
import { CustomFormikProps } from '../../../Hoc/withForm';

const uploadImageIcon = require('./assets/uploadImage.svg');
const searchImageIcon = require('./assets/searchImage.svg');

interface Props {
  className?: string;
  labelName: string;
  handleSearchImageToggleClick: (e: React.MouseEvent<HTMLElement>) => void;
  // url to image server
  file: string;
  formik: CustomFormikProps;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
}


class File extends React.PureComponent<Props, {}> {

  private preview = React.createRef<HTMLImageElement>();

  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.releaseObjectURL = this.releaseObjectURL.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);  
    this.handleDragOver = this.handleDragOver.bind(this);  
    this.handleDrop = this.handleDrop.bind(this);  
  }

  /*******************************************************************
   * need to fix later (how to handle image with formik validation) 
   * also how to upload image and fetch from image server
   *******************************************************************/
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onChange(e);
  }

  handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    this.props.formik.handleBlur(e);
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
    this.props.onDrop(e);
  }

  releaseObjectURL(e: React.ChangeEvent<HTMLImageElement>) {
    const src = e.target.src;
    URL.revokeObjectURL(src);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <div>
          <input 
            type="file" 
            id={ this.props.labelName } 
            name={ this.props.labelName } 
            accept="image/*" 
            onChange={ this.handleChange } 
            onBlur={ this.handleBlur } 
          />
        </div>
        <div className="image-control">
          <div 
            className="dropzone"
            onDragEnter={ this.handleDragEnter } 
            onDragOver={ this.handleDragOver } 
            onDrop={ this.handleDrop }
          >
            <p>drag image here</p> 
          </div>
          <Icon 
            onClick={ this.props.handleSearchImageToggleClick } 
            svgSrc={ searchImageIcon } 
            width="20px"
            height="20px"
          />
          <label htmlFor={ this.props.labelName }>
            <Icon 
              svgSrc={ uploadImageIcon } 
              width="20px"
              height="20px"
            />
          </label>
        </div>
      {( this.props.file && <img 
          src={ this.props.file } 
          ref={ this.preview } 
          onLoad={ this.releaseObjectURL } 
        />)}
      </div>
    );
  }
}

const StyledFile = styled(File)`

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  // two icon
  & > div:first-child > input {
    display: none;
  }

  & > .image-control {

    display: flex;
    align-items: center;
    justify-content: flex-start;
    

    & > .dropzone {
      width: 150px;
      height: 30px;
      background-color: ${( props ) => props.theme.thirdColor };
      border: 2px dashed #FFFFFF;
      outline: 2px solid ${( props ) => props.theme.thirdColor };
      box-sizing: border-box;
      margin: 2px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: #FFFFFF;
    }
  }

  & > img {
    width: 100px;
    height: 70px;
    margin: 10px 0;
  }
`
export default StyledFile;
