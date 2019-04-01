import * as React from 'react';
import styled from '../../story/styledComponents';
const debug = require('debug')('Input');
import CustomRef from '../../../CustomRef';

interface Props {
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  checked?: boolean;
  value?: any;
  // ref
  inputRef?: CustomRef[]; 
}

class Input extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (this.props.onChange)
      this.props.onChange(e);
  }

  handleBlur(e: React.FocusEvent<HTMLInputElement>): void {
    if (this.props.onBlur)
      this.props.onBlur(e);
  }

  render() {
    return (
      <input
        ref={( node: Node ) => { 
          if ( this.props.inputRef ) { 
            debug(this.props.inputRef);
            this.props.inputRef.forEach(( ref ) => ref.node = node )
          }
        }}
        className={ this.props.className }
        type={ this.props.type }
        id={ this.props.id }
        name={ this.props.name }
        placeholder={ this.props.placeholder }
        onChange={ this.handleChange }
        onBlur={ this.handleBlur } 
        checked={ this.props.checked }
        value={ this.props.value }
        autoComplete="new-password"
      />
    );
  }
}

const StyledInput = styled(Input)`
  height: 20px;
  background-color: transparent;
  border: none;
  width: 100%;
  color: ${( props ) => props.theme.primaryFontColor };
`;
// testing purpose
StyledInput.displayName = "InputSelector";


export default StyledInput;
