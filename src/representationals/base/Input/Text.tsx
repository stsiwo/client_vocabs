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
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  id?: string;
}

class Text extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    this.props.onBlur(e);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onChange(e);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <label htmlFor={ this.props.labelName }>
          { this.props.children }
        </label>
        <Input 
          type="text" 
          placeholder={ this.props.placeholder } 
          id={ this.props.labelName }
          name={ this.props.labelName } 
          onChange={ this.handleChange } 
          onBlur={ this.handleBlur } 
          value={ this.props.value }
        />
      </div>
    );
  }
}

const StyledText = styled(Text)`
  ${ formElement }
`
export default StyledText;
