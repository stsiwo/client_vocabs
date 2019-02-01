import * as React from 'react';
import styled from '../../story/styledComponents';
import SortCont from '../../../containers/SortCont';
import FilterCont from '../../../containers/FilterCont';


interface Props {
  className?: string;
  onSortChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onFilterContChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

class SortFilterCont extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
  }

  //handleClick(e: React.MouseEvent<HTMLElement>) {
    //e.stopPropagation();
  //}

  render() {
    return (
      <div className={ this.props.className }>
        <SortCont />
        <FilterCont />
      </div>
    );
  }
}

const StyledSortFilterCont = styled(SortFilterCont)`
    
`;


export default StyledSortFilterCont;



