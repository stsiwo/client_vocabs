import * as React from 'react';
import styled from '../../story/styledComponents';
import Option from './Option';
import { IPos, PosEnum } from '../../../domains/pos';
import formElement from '../common/formElement';

interface Props {
  className?: string;
  items: IPos[];
  pos: PosEnum;
  labelName: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
}

interface State {
  pos: PosEnum;
}

class Select extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.renderOptions = this.renderOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  renderOptions() {
    const { items } = this.props;
    return ( items.map(( IPos ) => {
      return <Option key={ IPos.value } value={IPos.value}>{ IPos.pos }</Option>
    }));
  }

  handleBlur(e: React.FocusEvent<HTMLSelectElement>) {
    this.props.onBlur(e);
  }

  handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.props.onChange(e);
  }

  render() {
    return (
      <select value={this.props.pos} name={this.props.labelName} className={ this.props.className } onChange={this.handleChange} onBlur={ this.handleBlur } >
        { this.renderOptions() }
      </select>
    );
  }
}

const StyledSelect = styled(Select)`
  background-color: transparent;
  border: none;
  outline: none;
`;

interface WrapperProps {
  className?: string;
  items: IPos[];
  pos: PosEnum;
  labelName: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: string;
  onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
}

const WrapperSelect: React.SFC<WrapperProps> = (props) => {
  return (
    <div className={ props.className }>
      <label htmlFor={ props.labelName }>
        { props.children }
      </label>
      <StyledSelect items={ props.items } pos={ props.pos } labelName={ props.labelName } onChange={props.onChange} onBlur={ props.onBlur } />
    </div>
  );
}

const StyledWrapperSelect = styled(WrapperSelect)`
  ${ formElement }
`;

export default StyledWrapperSelect;
