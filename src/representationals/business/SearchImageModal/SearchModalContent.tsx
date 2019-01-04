import * as React from 'react';
import styled from '../../story/styledComponents';
import Search from '../../base/Input/Search';
import SearchResults from './SearchResults';

interface ImageIF {
  name: string;
  src: string;
}

interface Props {
  className?: string;
  //handleSearchBtnClick: (e: React.MouseEvent<HTMLElement>) => void;
  initialSearchInput: string;
}

interface State {
  items: ImageIF[]; 
  searchInput: string;
}


class SearchModalContent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: [], 
      searchInput: this.props.initialSearchInput,
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
        <Search placeholder="search images for your definition here..." onClick={ this.handleSearchBtnClick } initialValue={ this.props.initialSearchInput }/>
        <SearchResults items={ this.state.items } />
      </div>
    );
  }
}

const StyledSearchModalContent = styled(SearchModalContent)`
 
`;


export default StyledSearchModalContent;





