//import styled from './representationals/story/styledComponents';
//import * as React from 'react';
//import upload from './cloudinary'; 

//interface Props {
  //className?: string;
//}

//interface State {
  //image: File;
  //imageUrl: string;
//}

//class ImageExperiment extends React.PureComponent<Props, State> {
  //constructor(props: Props) {
    //super(props);
    //this.state = {
      //image: null,
      //imageUrl: "",
    //}
    //this.handleImageChange = this.handleImageChange.bind(this);  
    //this.releaseObjectURL = this.releaseObjectURL.bind(this);  
    //this.handleDragEnter = this.handleDragEnter.bind(this);  
    //this.handleDragOver = this.handleDragOver.bind(this);  
    //this.handleDrop = this.handleDrop.bind(this);  
    //this.submitImage = this.submitImage.bind(this);  
  //}

  //handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    //this.assignImageToSate(e.target.files[0]);
  //}

  //releaseObjectURL() {
    //URL.revokeObjectURL(this.state.imageUrl);
  //}

  //handleDragEnter( e: React.DragEvent<HTMLDivElement> ) {
    //e.stopPropagation();
    //e.preventDefault();
  //}

  //handleDragOver( e: React.DragEvent<HTMLDivElement> ) {
    //e.stopPropagation();
    //e.preventDefault();
  //}

  //handleDrop( e: React.DragEvent<HTMLDivElement> ) {
    //e.stopPropagation();
    //e.preventDefault();

    //const dataTransfer = e.dataTransfer;
    //const files = dataTransfer.files;

    //this.assignImageToSate(files[0]);

  //}

  //private assignImageToSate(image: File) {
    //this.setState({ image: image, imageUrl: URL.createObjectURL(image) });
  //}

  //// this is for post request to server ( not cloudinary image server )
  ////async submitImage() {
    ////const request = makeImageRequest(this.state.image);
    ////const res = await myFetch(request);
    ////console.log(res);
  ////}

  //async submitImage() {
    //upload(this.state.image);
  //}

  //render() {
    //return (
      //<div className={ this.props.className }>
        //<input type="file" accept="image/*" onChange={ this.handleImageChange } />
        //<div id="dropbox" onDragEnter={ this.handleDragEnter } onDragOver={ this.handleDragOver } onDrop={ this.handleDrop }></div>
        //<img src={ this.state.imageUrl } width="200" height="200" onLoad={ this.releaseObjectURL }/>
        //<button type="button" onClick={ this.submitImage }>Request</button>
      //</div>
    //);
  //}
//}

//const StyledImageExperiment = styled(ImageExperiment)`
  //& > #dropbox {
    //position: absolute;
    //width: 200px;
    //height: 200px;
    //border: 1px solid black;
  //}

//`;
//StyledImageExperiment.displayName = "ImageExperimentSelector";

//export default StyledImageExperiment; 



