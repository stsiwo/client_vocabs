import * as React from 'react';
import styled from '../../story/styledComponents';

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
  forwardedRef: React.Ref<HTMLInputElement>;
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
        ref={ this.props.forwardedRef }
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

type InputHTMLProps = React.ComponentPropsWithoutRef<'input'>; 

const RefInput = React.forwardRef<HTMLInputElement, InputHTMLProps>(( props, ref ) => (
  <Input { ...props } forwardedRef={ ref } />
));

const StyledInput = styled(RefInput)`
  height: 20px;
  background-color: transparent;
  border: none;
  width: 100%;
  color: ${( props ) => props.theme.primaryFontColor };
`;
// testing purpose
StyledInput.displayName = "InputSelector";


export default StyledInput;
