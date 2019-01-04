import * as React from 'react';
import styled from '../../story/styledComponents';
import CheckBox from '../../base/Input/CheckBox';

enum FilterEnum {
  NOUN = 1,
  VERB = 2,
  ADJUCTIVE = 3,
  ADVERB = 4,
  PREPOSITION = 5,
  PRONOUN = 6, 
  CONJUNCTION = 7, 
  INTERJECTION = 8,
  IDIOM = 9,
  ELSE = 10,
}

interface IFilter {
  noun: boolean;
  verb: boolean;
  adjuctive: boolean;
  adverb: boolean;
  preposition: boolean;
  pronoun: boolean;
  conjunction: boolean;
  interjection: boolean;
  idiom: boolean;
  other: boolean;
}

interface Props {
  className?: string;
  onFilterChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

interface State {
  filter: IFilter; 
}

class Filter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      filter: {
        noun: true,
        verb: true,
        adjuctive: true,
        adverb: true,
        preposition: true,
        pronoun: true,
        conjunction: true,
        interjection: true,
        idiom: true,
        other: true,
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const id = e.target.id;
    const isChecked = e.target.checked;

    this.setState({ 
      filter: {
        ...this.state.filter,
        [id]: isChecked,
      }
    });
  }

  render() {
    return (
      <div className={ this.props.className }>
        <h3>Filter:</h3>
        <div>
          <CheckBox labelName="noun" value={ FilterEnum.NOUN } onChange={ this.handleChange } checked={ this.state.filter.noun }>n.</CheckBox>  
          <CheckBox labelName="verb" value={ FilterEnum.VERB } onChange={ this.handleChange } checked={ this.state.filter.verb }>v.</CheckBox>  
          <CheckBox labelName="adjuctive" value={ FilterEnum.ADJUCTIVE } onChange={ this.handleChange } checked={ this.state.filter.adjuctive }>adj.</CheckBox>  
          <CheckBox labelName="adverb" value={ FilterEnum.ADVERB } onChange={ this.handleChange } checked={ this.state.filter.adverb }>adv.</CheckBox>  
          <CheckBox labelName="preposition" value={ FilterEnum.PREPOSITION } onChange={ this.handleChange } checked={ this.state.filter.preposition }>prep.</CheckBox>  
          <CheckBox labelName="pronoun" value={ FilterEnum.PRONOUN } onChange={ this.handleChange } checked={ this.state.filter.pronoun }>pron.</CheckBox>  
          <CheckBox labelName="conjunction" value={ FilterEnum.CONJUNCTION } onChange={ this.handleChange } checked={ this.state.filter.conjunction }>conj.</CheckBox>  
          <CheckBox labelName="interjection" value={ FilterEnum.INTERJECTION } onChange={ this.handleChange } checked={ this.state.filter.interjection }>interj.</CheckBox>  
          <CheckBox labelName="idiom" value={ FilterEnum.IDIOM } onChange={ this.handleChange } checked={ this.state.filter.idiom }>idiom</CheckBox>  
          <CheckBox labelName="other" value={ FilterEnum.ELSE } onChange={ this.handleChange } checked={ this.state.filter.other }>else</CheckBox>  
        </div>
      </div>
    );
  }
}

const StyledFilter = styled(Filter)`
  font-family: ${( props ) => props.theme.primaryFontFamily };
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 5px 0;


  & > h3 {
    margin-right: 10px;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;


export default StyledFilter;





