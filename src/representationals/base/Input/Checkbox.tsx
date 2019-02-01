import * as React from 'react';
import styled from '../../story/styledComponents';
import Input from './Input';

interface Props {
  className?: string;
  labelName?: string;
  children?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  value?: any;
}

class CheckBox extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // change checked props in this parent component
    this.props.onChange(e);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <Input type="checkbox" name={ this.props.labelName } id={ this.props.labelName } onChange={ this.props.onChange } value={ this.props.value } checked={ this.props.checked }></Input>
        <label htmlFor={ this.props.labelName }>
          { this.props.children }
        </label>
      </div>
    );
  }
}

const StyledCheckBox = styled(CheckBox)`
  background-color: ${( props ) => (props.checked) ? props.theme.thirdColor : props.theme.thirdColorOpacity };

  border-radius: 20px;
  min-width: 40px;
  height: 40px;

  display: inline-block;
  box-sizing: border-box;
  margin: 5px 5px;
  text-align: center;

  & > input {
    display: none;
  }

  & > label {
    font-family: ${( props ) => props.theme.primaryFontFamily };
    display: inline-block;
    height: 100%;
    line-height: 40px;
    padding: 0 10px;
    cursor: pointer;
  }
`;

export default StyledCheckBox;
