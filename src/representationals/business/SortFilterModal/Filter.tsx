import * as React from 'react';
import styled from '../../story/styledComponents';
import CheckBox from '../../base/Input/CheckBox';
import { pos } from '../../../domains/pos';
import { changeFilterDispatchType } from '../../../containers/type';

interface Props {
  className?: string;
  currentFilter: number[]; 
  changeFilter: changeFilterDispatchType; 
}

class Filter extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.renderPosCheckBox = this.renderPosCheckBox.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    this.props.changeFilter( parseInt(value) );
  }

  renderPosCheckBox() {
    return pos.map(( each ) => <CheckBox key={ each.pos } labelName={ each.pos } value={ each.value } onChange={ this.handleChange } checked={ this.props.currentFilter.includes( parseInt( each.value ))}>{ each.abbr }</CheckBox> ); 
  }

  render() {
    return (
      <div className={ this.props.className }>
        <h3>Filter:</h3>
        <div>
          { this.renderPosCheckBox() }
        </div>
      </div>
    );
  }
}

const StyledFilter = styled(Filter)`
  font-family: ${( props ) => props.theme.primaryFontFamily };
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 5px 0;


  & > h3 {
    margin-right: 10px;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;


export default StyledFilter;





