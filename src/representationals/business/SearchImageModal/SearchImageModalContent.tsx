import * as React from 'react';
import styled from '../../story/styledComponents';
import Search from '../../base/Input/Search';
import SearchResultsCont from '../../../containers/SearchResultsCont';

interface ImageIF {
  name: string;
  src: string;
}

interface Props {
  className?: string;
  wordName: string;
  defId: string;
  wordId: string;
}

interface State {
  items: ImageIF[]; 
  searchInput: string;
}


class SearchImageModalContent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: [], 
      searchInput: this.props.wordName,
    }
    this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this);
  }

  handleSearchBtnClick(e: React.MouseEvent<HTMLElement>) {
    // fetch image 
    // change state to items
    // temporary just console.log
    console.log('search the images');
  }

  render() {
    return (
      <div className={ this.props.className }>
        <Search placeholder="search images for your definition here..." onClick={ this.handleSearchBtnClick } value={ this.props.wordName }/>
        <SearchResultsCont items={ this.state.items } defId={ this.props.defId } />
      </div>
    );
  }
}

const StyledSearchImageModalContent = styled(SearchImageModalContent)`
 
`;


export default StyledSearchImageModalContent;





