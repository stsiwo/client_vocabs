import * as React from 'react';
import styled from '../../../story/styledComponents';
import { ImageResult } from '../../../../Hoc/Observable/type';
import axios from 'axios';
const debug = require('debug')(__filename);


interface Props {
  className?: string;
  items: ImageResult[]; 
  defIndex: number;
  wordIndex: number;
  setFieldValue: (field: string, value: any) => void;
  handleImageUrlChange: ( nextImageUrl: string ) => void;
}

class SearchResults extends React.PureComponent<Props, {} > {
  constructor(props: Props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
    this.renderImageElement = this.renderImageElement.bind(this);
    this.handleDefImageClick = this.handleDefImageClick.bind(this);
  }

  handleDefImageClick(e: React.MouseEvent<HTMLImageElement>) {
    const target = e.target as HTMLImageElement;
    const imageSrc = target.src;

    // 1. download blob from clicked img src
    axios.get( imageSrc , {
      responseType: 'arraybuffer',
      headers: {
        'Accept': 'image/*'
      }
    }).then(response => {
      debug(response);
      // response.data is an empty object
      const blob = new Blob([response.data], {
        type: 'image/*',
      });
      debug(blob);

      // 2. assign to blob and src to formik state
      const { wordIndex, defIndex } = this.props; 
      this.props.setFieldValue(`words.${ wordIndex }.defs.${ defIndex }.image`, imageSrc); 
      this.props.setFieldValue(`words.${ wordIndex }.defs.${ defIndex }.imageFile`, blob); 
      this.props.handleImageUrlChange(imageSrc);
      debug(`${ wordIndex } and ${ defIndex } and ${ imageSrc }`);
      /**
       * #REFACTOR:
       *  - some of images src does not implement cors so we can get those blob when request
       *  - is this implmentation is ok, if there is a shortcut to access blob from <img>, i don't need to make a request in the first place.
       *  - SOLUTION: restrict search for only website having cors 
       *      - switch off "search entire web" and set individually to include website which sets cors 
       **/
    });
  }

  renderImageElement() {
    return this.props.items.map(( img ) => <img src={ img.path } alt={ img.alt } onClick={ this.handleDefImageClick } key={ img.path }/> );
  }

  render() {
    return (
      <div className={ this.props.className }>
        { this.renderImageElement() }
      </div>
    );
  }
}
/******************************************
// react + typescript can't define displayName: error TS2339: Property 'displayName' does not exist on type 'typeof SearchResults'
//SearchResults.displayName = "SearchResults";
*******************************************/

const StyledSearchResults = styled(SearchResults)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-auto-rows: 50px; 
  gap: 3px;
  overflow: auto;
  position: relative;
  // also need to define this if bottom modal content's background is transparent
  z-index: 2;
  // to display scroll bar
  // calculated value:
  // modal content: 150px = 50px (search input + margin) + 100px (this)
  height: 100px;

  background-color: #FFFFFF;

  & > img {
    width: 85px;
    height: 50px;
  }
 
`;
StyledSearchResults.displayName = "SearchResults";

export default StyledSearchResults;




