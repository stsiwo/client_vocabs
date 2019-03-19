import * as React from 'react';
import styled from '../../story/styledComponents';

import Input from './Input';
import Icon from '../Icon/Icon';

const searchIcon = require('./assets/search.svg');

interface Props {
  className?: string;
  labelName?: string;
  placeholder?: string;
  // icon click to get search result
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  // text input change to display text change
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

class Search extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <Input 
          type="search" id={ this.props.labelName } 
          name={ this.props.labelName } 
          placeholder={ this.props.placeholder } 
          value={ this.props.value } 
          onChange={ this.props.onChange } 
          ref={ this.props.inputRef }
        />
        <label htmlFor={ this.props.labelName }>
          <Icon 
            svgSrc={ searchIcon } 
            hoverEffect={ true } 
            onClick={ this.props.onClick } 
          />
        </label>
      </div>
    );
  }

}

const StyledSearch = styled(Search)`
  background-color: ${( props ) => props.theme.thirdColor };
  border-radius: 15px;
  height: 30px;
  width: 80%;
  margin: 10px auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > * {
    margin: 0 10px;
  }

  & input {
    flex-grow: 9;
  }

  & label {
    flex-basis: 30px;
  }

`;
StyledSearch.displayName = "SearchSelector";

export default StyledSearch;

