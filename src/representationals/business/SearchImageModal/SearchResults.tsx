import * as React from 'react';
import styled from '../../story/styledComponents';

interface ImageIF {
  name: string;
  src: string;
}

interface Props {
  className?: string;
  items: ImageIF[]; 
  updateDefChange: ( id: string, nextFile: string ) => void;
  defId: string;
}

class SearchResults extends React.Component<Props, {} > {
  constructor(props: Props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
    this.renderImageElement = this.renderImageElement.bind(this);
  }

  handleDefImageClick(e: React.MouseEvent<HTMLElement>) {
    // need to get value of src of img tag and convert to string
    this.props.updateDefChange(this.props.defId, "image test");
  }

  renderImageElement() {
    return this.props.items.map(( img ) => <img src={ img.src } alt={ img.name } onClick={ this.handleDefImageClick }/> );
  }

  render() {
    return (
      <div className={ this.props.className }>
        { this.renderImageElement() }
      </div>
    );
  }
}

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


export default StyledSearchResults;




