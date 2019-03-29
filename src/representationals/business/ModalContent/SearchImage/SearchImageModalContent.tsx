import * as React from 'react';
import Search from '../../../base/Input/Search';
import SearchResults from './SearchResults';
import withObservable from '../../../../Hoc/Observable/withObservable';
import { ObservableBags, ObservableImpls } from '../../../../Hoc/Observable/type';

interface Props {
  wordName: string;
  defId: string;
  wordId: string;
}

interface PropsWithObservable extends Props {
  observable: ObservableBags;
}

interface State {
  input: string;
}

  // test : tests/ui/searchImageModalContent.spec.tsx
class SearchImageModalContent extends React.PureComponent<PropsWithObservable, State> {
  constructor(props: PropsWithObservable) {
    super(props);
    this.state = {
      input: this.props.wordName
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.props.observable.setInput(this.props.wordName);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    this.props.observable.inputHandler(e);
    this.setState({ input : target.value }); 
  }

  render() {
    return (
      <React.Fragment>
        <Search placeholder="search images for your definition here..."  onChange={ this.handleInputChange } value={ this.state.input }/>
        <SearchResults items={ this.props.observable.result } defId={ this.props.defId } />
      </React.Fragment>
    );
  }
}

/**
 * css style is defined in outer component (BottomModal)
 **/
export default withObservable<Props>(
  SearchImageModalContent,
  ObservableImpls.SearchImageObservable
);



