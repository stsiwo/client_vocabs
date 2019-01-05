import * as React from 'react';
import styled from '../../story/styledComponents';
import Modal from '../../base/Modal/Modal';
import SortFilter from './SortFilterContent';
import { toggleClickType } from '../../../containers/type';
import CloseButton from '../Button/CloseButton';
import ResetButton from '../Button/ResetButton';
import ConfirmButton from '../Button/ConfirmButton';

interface Props {
  className?: string;
  isSortFilterModalOpen: boolean;
  toggleSortFilterModalClick: toggleClickType;
}


class SortFilterModal extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const title = 'Sort and/or filter your words.'; 
    const detail = 'please check sort/filter items you want to display. You can also check multiple items.'; 
 
    return (
      <div>
        <Modal 
          title={ title } 
          detail={ detail } 
          closeButton={ <CloseButton />} 
          confirmButton={ <ConfirmButton /> } 
          resetButton={ <ResetButton /> } 
          onClose={ this.props.toggleSortFilterModalClick }
          isOpen={ this.props.isSortFilterModalOpen }>
          <SortFilter />
        </Modal>
      </div>
    );
  }
}

const StyledSortFilterModal = styled(SortFilterModal)`
`;


export default StyledSortFilterModal;






