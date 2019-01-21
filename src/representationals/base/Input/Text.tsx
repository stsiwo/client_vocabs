import * as React from 'react';
import styled from '../../story/styledComponents';
import Input from './Input';
import formElement from '../common/formElement';
interface Props {
  className?: string;
  placeholder?: string;
  labelName: string;
  children: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

interface State {
  textInput: string;
}

class Text extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
       textInput: this.props.value,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ textInput: e.target.value });
    this.props.onChange(e);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <label htmlFor={ this.props.labelName }>
          { this.props.children }
        </label>
        <Input type="text" placeholder={ this.props.placeholder } id={ this.props.labelName } name={ this.props.labelName } onChange={ this.handleChange } value={ this.state.textInput }/>
      </div>
    );
  }
}

const StyledText = styled(Text)`
  ${ formElement }
`
export default StyledText;
