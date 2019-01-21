import * as React from 'react';
import styled from '../../story/styledComponents';
import CheckBox from '../../base/Input/CheckBox';
import { PosEnum } from '../../../domains/pos';
import { IFilter } from '../../../domains/filter';
import { changeFilterDispatchType } from '../../../containers/type';

interface Props {
  className?: string;
  currentFilter: IFilter;
  changeFilter: changeFilterDispatchType; 
}

class Filter extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const isChecked = e.target.checked;
    // change filter state when a specific filter icon is clicked and assign in new object
    const nextFilterObject = Object.assign({}, this.props.currentFilter, { [value]: isChecked });
    // make the object array but each element is string since it came from porperty name 
    const nextFilterStringArray: string[] = Object.keys(nextFilterObject).filter(( key ) => nextFilterObject[key] === true); 
    // make the string array to PosEnum array to match the type with thunk input
    const nextFilterNumberArray: PosEnum[] = nextFilterStringArray.map(( key ) => parseInt(key));

    this.props.changeFilter(nextFilterNumberArray);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <h3>Filter:</h3>
        <div>
          <CheckBox labelName="noun" value={ PosEnum.NOUN } onChange={ this.handleChange } checked={ this.props.currentFilter[PosEnum.NOUN] }>n.</CheckBox>  
          <CheckBox labelName="verb" value={ PosEnum.VERB } onChange={ this.handleChange } checked={ this.props.currentFilter[PosEnum.VERB] }>v.</CheckBox>  
          <CheckBox labelName="adjuctive" value={ PosEnum.ADJUCTIVE } onChange={ this.handleChange } checked={ this.props.currentFilter[PosEnum.ADJUCTIVE] }>adj.</CheckBox>  
          <CheckBox labelName="adverb" value={ PosEnum.ADVERB } onChange={ this.handleChange } checked={ this.props.currentFilter[PosEnum.ADVERB] }>adv.</CheckBox>  
          <CheckBox labelName="preposition" value={ PosEnum.PREPOSITION } onChange={ this.handleChange } checked={ this.props.currentFilter[PosEnum.PREPOSITION] }>prep.</CheckBox>  
          <CheckBox labelName="pronoun" value={ PosEnum.PRONOUN } onChange={ this.handleChange } checked={ this.props.currentFilter[PosEnum.PRONOUN] }>pron.</CheckBox>  
          <CheckBox labelName="conjunction" value={ PosEnum.CONJUNCTION } onChange={ this.handleChange } checked={ this.props.currentFilter[PosEnum.CONJUNCTION] }>conj.</CheckBox>  
          <CheckBox labelName="interjection" value={ PosEnum.INTERJECTION } onChange={ this.handleChange } checked={ this.props.currentFilter[PosEnum.INTERJECTION] }>interj.</CheckBox>  
          <CheckBox labelName="idiom" value={ PosEnum.IDIOM } onChange={ this.handleChange } checked={ this.props.currentFilter[PosEnum.IDIOM] }>idiom</CheckBox>  
          <CheckBox labelName="other" value={ PosEnum.ELSE } onChange={ this.handleChange } checked={ this.props.currentFilter[PosEnum.ELSE] }>else</CheckBox>  
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





