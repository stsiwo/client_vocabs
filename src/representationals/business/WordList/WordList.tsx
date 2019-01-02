import * as React from 'react';
import styled from '../../story/styledComponents';
import { NavLink } from 'react-router-dom';

interface Props {
  className?: string;
}

interface State {
  words: { id: number; name: string; }[];
}

class WordList extends React.Component<Props, State> {
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
    this.renderWordItem = this.renderWordItem.bind(this);
  }

  renderWordItem() {
    return (
      this.state.words.map(( word ) => { 
        return (
          <NavLink key={ word.id } to={ "/word/" + word.id }>
            <li>{ word.name }</li>
          </NavLink>
        );
      })
    );
  }

  render() {
    return (
      <div className={ this.props.className }>
        { this.renderWordItem() }  
      </div>
    );
  }
}

const StyledWordList = styled(WordList)`
`;


export default StyledWordList;







