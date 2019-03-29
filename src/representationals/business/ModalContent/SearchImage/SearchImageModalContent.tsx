import * as React from 'react';
import Search from '../../../base/Input/Search';
import SearchResults from './SearchResults';

interface ImageIF {
  name: string;
  src: string;
}

interface Props {
  wordName: string;
  defId: string;
  wordId: string;
}

interface State {
  items: ImageIF[]; 
  searchInput: string;
}

  // test : tests/ui/searchImageModalContent.spec.tsx
class SearchImageModalContent extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: [], 
      searchInput: this.props.wordName,
    }
    this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleSearchBtnClick(e: React.MouseEvent<HTMLElement>) {
    // fetch image 
    //  - need to create container components then define mdtp to wrap dispach thunk to fetch image
    // change state to items
    //  - temporary test data
    this.setState({ items: 
      [
        {
          name: 'test-image-name',
          src: 'test-imge-src',
        }
      ] 
    });
  }

  handleSearchInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchInput: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <Search placeholder="search images for your definition here..." onClick={ this.handleSearchBtnClick } onChange={ this.handleSearchInputChange } value={ this.state.searchInput }/>
        <SearchResults items={ this.state.items } defId={ this.props.defId } />
      </React.Fragment>
    );
  }
}

/**
 * css style is defined outer component (BottomModal)
 **/
export default SearchImageModalContent;



