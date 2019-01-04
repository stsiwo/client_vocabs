import * as React from 'react';
import styled from '../../story/styledComponents';
import Modal from '../../base/Modal/Modal';
import SortFilter from './SortFilterContent';

interface Props {
  className?: string;
}


class SortFilterModalTest extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const title = 'Sort and/or filter your words.'; 
    const detail = 'please check sort/filter items you want to display. You can also check multiple items.'; 
 
    const selectCloseBtn = {
      name: "Close",
      onClick: (e: React.MouseEvent<HTMLElement>) => {},
    }
    const confirmBtn = {
      name: "Confirm",
      onClick: (e: React.MouseEvent<HTMLElement>) => {},
    }
    const resetBtn = {
      name: "Reset",
      onClick: (e: React.MouseEvent<HTMLElement>) => {},
    }

    return (
      <div>
        <Modal title={ title } detail={ detail } closeButton={ selectCloseBtn } confirmButton={ confirmBtn } resetButton={ resetBtn } isOpen={ true }>
        <SortFilter />
      </Modal>
      </div>
    );
  }
}

const StyledSortFilterModalTest = styled(SortFilterModalTest)`
`;


export default StyledSortFilterModalTest;






