import * as React from 'react';
import styled from '../../story/styledComponents';
interface Props {
  className?: string;
  placeholder?: string;
  labelName: string;
  children: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  value: string;
  id?: string;
  cols?: number;
  rows?: number;
}

class TextArea extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(e: React.FocusEvent<HTMLTextAreaElement>) {
    this.props.onBlur(e);
  }

  handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.props.onChange(e);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <textarea 
          placeholder={ this.props.placeholder } 
          id={ this.props.labelName }
          name={ this.props.labelName } 
          onChange={ this.handleChange } 
          onBlur={ this.handleBlur } 
          value={ this.props.value }
          cols={ this.props.cols }
          rows={ this.props.rows }
        />
      </div>
    );
  }
}

const StyledTextArea = styled(TextArea)`
`
export default StyledTextArea;

