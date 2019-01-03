import * as React from 'react';
import styled from '../../story/styledComponents';

interface Props {
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  checked?: boolean;
  value?: any;
}

class Input extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (this.props.onChange)
      this.props.onChange(e);
  }

  render() {
    return (
      <input
        className={ this.props.className }
        type={ this.props.type }
        id={ this.props.id }
        name={ this.props.name }
        placeholder={ this.props.placeholder }
        onChange={ this.handleChange }
        checked={ this.props.checked }
        value={ this.props.value }
      />
    );
  }
}

const StyledInput = styled(Input)`
  height: 20px;
  background-color: transparent;
  border: none;
  color: ${( props ) => props.theme.primaryFontColor };
`;


export default StyledInput;
