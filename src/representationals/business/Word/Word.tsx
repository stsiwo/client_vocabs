import * as React from 'react';
import styled from '../../story/styledComponents';
import WordList from '../WordList/WordList';
import MediaQuery from 'react-responsive';
import { Route } from 'react-router-dom';
import WordDetail from '../WordDetail/WordDetail';
import MobileController from '../Controller/MobileController';
import Controller from '../Controller/Controller';
import { IWord } from '../../../domains/word';
import { initialWordList } from '../../../state/index';
//import SelectModal from '../SelectModal/SelectModal';
//import DeleteModal from '../DeleteModal/DeleteModal';
//import SortFilterModal from '../SortFilterModal/SortFilterModal';
//import SearchModal from '../SearchModal/SearchModal';

interface Props {
  className?: string;
}

interface State {
  words: IWord[];
  currentWords: IWord[];
  isSelectModalOpen: boolean;
}

class Word extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      words: initialWordList, 
      currentWords: [
      ],
      isSelectModalOpen: false,
    }
  }

  render() {
    return (
      <div className={ this.props.className }>
        <MediaQuery maxWidth={ 425 }>
          <Route exact path="/word" render={(props) => <WordList {...props} words={this.state.words} />} />
          <Route path="/word/detail" render={(props) => <WordDetail {...props} words={this.state.words} />} />
          <MobileController />
        </MediaQuery>
        <MediaQuery minWidth={ 426 }>
          <Route path="/word" render={(props) => <WordList {...props} words={this.state.words} />} /> 
          <Route path="/word/detail" render={(props) => <WordDetail {...props} words={this.state.words} />} />
          <Controller />
        </MediaQuery>
      {/* uncomment when implementing with redux 
        <SelectModal />
        <DeleteModal />
      <SortFilterModal />
        <SearchModal />
        */}
      </div>
    );
  }
}

const StyledWord = styled(Word)`
`;


export default StyledWord;






