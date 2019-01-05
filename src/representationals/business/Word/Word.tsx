import * as React from 'react';
import styled from '../../story/styledComponents';
import WordList from '../WordList/WordList';
import MediaQuery from 'react-responsive';
import { Route, Redirect } from 'react-router-dom';
import WordDetail from '../WordDetail/WordDetail';
import Controller from '../Controller/Controller';
import { IWord } from '../../../domains/word';
import { initialWordList } from '../../../state/index';
import SelectModalCont from '../../../containers/SelectModalCont';
import DeleteModalCont from '../../../containers/DeleteModalCont';
import SortFilterModalCont from '../../../containers/SortFilterModalCont';
import SearchWordModalCont from '../../../containers/SearchWordModalCont';

interface Props {
  className?: string;
  isSelectWarningModalOpen: boolean;
  isDeleteConfirmModalOpen: boolean;
  isSortFilterModalOpen: boolean;
  isSearchWordModalOpen: boolean;
}

interface State {
  words: IWord[];
  currentWords: IWord[];
  isSelectModalContOpen: boolean;
}

class Word extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      words: initialWordList, 
      currentWords: [
      ],
      isSelectModalContOpen: false,
    }
  }

  render() {
    return (
      <div className={ this.props.className }>
        <MediaQuery maxWidth={ 425 }>
          <Route exact path="/word" render={(props) => <WordList {...props} words={this.state.words} />} />
          <Route path="/word/detail" render={(props) => <WordDetail {...props} words={this.state.words} />} />
        </MediaQuery>
        <MediaQuery minWidth={ 426 }>
          <Route path="/word" render={(props) => <WordList {...props} words={this.state.words} />} /> 
          <Route path="/word/detail" render={(props) => <WordDetail {...props} words={this.state.words} />} />
          <Redirect from="/word" to="/word/detail" />
          <Controller />
        </MediaQuery>
        { this.props.isSelectWarningModalOpen && <SelectModalCont /> }
        { this.props.isDeleteConfirmModalOpen && <DeleteModalCont /> }
        { this.props.isSortFilterModalOpen && <SortFilterModalCont /> }
        { this.props.isSearchWordModalOpen && <SearchWordModalCont /> }
      </div>
    );
  }
}

const StyledWord = styled(Word)`
`;


export default StyledWord;






