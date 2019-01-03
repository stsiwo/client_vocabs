import * as React from 'react';
import styled from '../../story/styledComponents';
import WordList from '../WordList/WordList';
import MediaQuery from 'react-responsive';
import { Route } from 'react-router-dom';
import WordDetail from '../WordDetail/WordDetail';

interface IWordTypeTest {
  id: number;
  name: string;
}

interface Props {
  className?: string;
}

interface State {
  words: IWordTypeTest[];
}

class Word extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      words: [
        {
          id: 1,
          name: "name1",
        },
        { 
          id: 2,
          name: "name2",
        },
        {
          id: 3,
          name: "name3",
        },
        { 
          id: 4,
          name: "name4",
        },
      ],
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
        </MediaQuery>
          
      </div>
    );
  }
}

const StyledWord = styled(Word)`
`;


export default StyledWord;






