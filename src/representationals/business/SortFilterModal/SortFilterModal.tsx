import * as React from 'react';
import styled from '../../story/styledComponents';
import Modal from '../../base/Modal/Modal';
import SortFilter from './SortFilterContent';
import { toggleClickType } from '../../../containers/type';
import CloseButton from '../Button/CloseButton';
import ResetButtonCont from '../../../containers/Button/ResetButtonCont';

interface Props {
  className?: string;
  isSortFilterModalOpen: boolean;
  toggleSortFilterModalClick: toggleClickType;
}

class SortFilterModal extends React.PureComponent<Props, {}> {
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
          closeButton={ <CloseButton onClose={ this.props.toggleSortFilterModalClick } />} 
          resetButton={ <ResetButtonCont /> } 
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
StyledSortFilterModal.displayName = "SortFilterModalSelector";


export default StyledSortFilterModal;






