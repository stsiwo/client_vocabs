import * as React from 'react';
import styled from '../../story/styledComponents';
import WordList from '../WordList/WordList';
import MediaQuery from 'react-responsive';
import { Route } from 'react-router-dom';
import WordDetail from '../WordDetail/WordDetail';

interface Props {
  className?: string;
}

class Word extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <MediaQuery maxWidth={ 425 }>
          <Route exact path="/word" component={ WordList } />
          <Route path="/word/:id" component={ WordDetail } />
        </MediaQuery>
        <MediaQuery minWidth={ 426 }>
          <Route path="/word" component={ WordList } />
          <Route path="/word/:id" component={ WordDetail } />
        </MediaQuery>
          
      </div>
    );
  }
}

const StyledWord = styled(Word)`
`;


export default StyledWord;






