import * as React from 'react';
import styled from '../../story/styledComponents';

import Input from './Input';
import Icon from '../Icon/Icon';

const searchIcon = require('./assets/search.svg');

interface Props {
  className?: string;
  labelName?: string;
  placeholder?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  initialValue?: string;
}

class Search extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
    this.props.onClick(e);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <Input type="search" id={ this.props.labelName } name={ this.props.labelName } placeholder={ this.props.placeholder } value={ this.props.initialValue }></Input>
        <label htmlFor={ this.props.labelName }>
          <Icon svgSrc={ searchIcon } hoverEffect={ true } />
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

export default StyledSearch;

