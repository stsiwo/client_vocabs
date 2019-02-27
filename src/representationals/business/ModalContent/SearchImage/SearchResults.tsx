import * as React from 'react';
import styled from '../../../story/styledComponents';

interface ImageIF {
  name: string;
  src: string;
}

interface Props {
  className?: string;
  items: ImageIF[]; 
  defId: string;
}

class SearchResults extends React.PureComponent<Props, {} > {
  constructor(props: Props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
    this.renderImageElement = this.renderImageElement.bind(this);
    this.handleDefImageClick = this.handleDefImageClick.bind(this);
  }

  handleDefImageClick(e: React.MouseEvent<HTMLElement>) {
    // need to get value of src of img tag and convert to string
    //this.props.updateDefImageClick(this.props.defId, "image test");
  }

  renderImageElement() {
    return this.props.items.map(( img ) => <img src={ img.src } alt={ img.name } onClick={ this.handleDefImageClick } key={ img.src }/> );
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
  // to display scroll bar
  // calculated value:
  // modal content: 150px = 50px (search input + margin) + 100px (this)
  height: 100px;

  & > img {
    width: 85px;
    height: 50px;
  }
 
`;
StyledSearchResults.displayName = "SearchResults";

export default StyledSearchResults;




