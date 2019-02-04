import * as React from 'react';
import styled from '../../story/styledComponents';
import Modal from '../../base/Modal/Modal';
import { toggleClickType } from '../../../containers/type'; 
import ConfirmButton from '../Button/ConfirmButton';
import CloseButton from '../Button/CloseButton';

interface Props {
  className?: string;
  isDeleteConfirmModalOpen: boolean;
  toggleDeleteConfirmModalClick: toggleClickType; 
  deleteConfirmClick: () => void;
}

class DeleteModal extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const title = 'Are you sure you want to delete these itmes?'; 
    const detail = 'Once you delete these words, you can NOT restore them permanentaly, so please make sure it before deleting.';
    return (
        <Modal 
          title={ title } 
          detail={ detail } 
          closeButton={ <CloseButton onClose={ this.props.toggleDeleteConfirmModalClick } /> } 
          confirmButton={ <ConfirmButton onConfirm={ this.props.deleteConfirmClick } /> } 
          onClose={ this.props.toggleDeleteConfirmModalClick } 
          isOpen={ this.props.isDeleteConfirmModalOpen }>
        </Modal>
    );
  }
}

const StyledDeleteModal = styled(DeleteModal)`
`;
StyledDeleteModal.displayName = "DeleteModalSelector";


export default StyledDeleteModal;

