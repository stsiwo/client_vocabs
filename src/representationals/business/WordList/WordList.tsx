import * as React from 'react';
import styled from '../../story/styledComponents';
import { NavLink } from 'react-router-dom';
import WordListItem from '../WordListItem/WordListItem';
//import * as qs from 'query-string';
import { RouteComponentProps } from 'react-router-dom';


interface IWordTypeTest {
  id: number;
  name: string;
}

interface Props extends RouteComponentProps<{}> {
  className?: string;
  words: IWordTypeTest[]; 
}

interface State {
  words: IWordTypeTest[];
}

class WordList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      words: this.props.words,
    }
    this.renderWordItem = this.renderWordItem.bind(this);
  }

  renderWordItem() {
    return (
      this.state.words.map(( word ) => { 
        return (
          <NavLink key={ word.id } to={ "/word/detail"}>
            <WordListItem>{ word.name }</WordListItem>
          </NavLink>
        );
      })
    );
  }

  render() {
    return (
      <ul className={ this.props.className }>
        { this.renderWordItem() }  
      </ul>
    );
  }
}

const StyledWordList = styled(WordList)`
  list-style-type: none; 
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;

  @media (min-width: ${( props ) => props.theme.sizes.mobileL + 1 }px) {
    position: fixed;
    left: 0;
    top: ${( props ) => props.theme.headerHeight };
    width: ${( props ) => props.theme.sideBarWidth };
    border-right: 2px solid ${( props ) => props.theme.secondaryColor };
    box-sizing: border-box;
  }

`;


export default StyledWordList;







