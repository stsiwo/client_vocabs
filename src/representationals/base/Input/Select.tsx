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
}

interface State {
  pos: PosEnum;
}

class Select extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        pos: this.props.pos,
    }
    this.renderOptions = this.renderOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  renderOptions() {
    const { items } = this.props;
    return ( items.map(( IPos ) => {
      return <Option key={ IPos.value } value={IPos.value}>{ IPos.pos }</Option>
    }));
  }

  handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    //this.setState({ pos: e.target.value });
    //this.props.onChange(e);
  }

  render() {
    return (
      <select value={this.state.pos} name={this.props.labelName} className={ this.props.className } onChange={this.handleChange}>
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
}

const WrapperSelect: React.SFC<WrapperProps> = (props) => {
  return (
    <div className={ props.className }>
      <label htmlFor={ props.labelName }>
        { props.children }
      </label>
      <StyledSelect items={ props.items } pos={ props.pos } labelName={ props.labelName } onChange={props.onChange}></StyledSelect>
    </div>
  );
}

const StyledWrapperSelect = styled(WrapperSelect)`
  ${ formElement }
`;

export default StyledWrapperSelect;
