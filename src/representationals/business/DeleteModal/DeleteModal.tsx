import * as React from 'react';
import styled from '../../story/styledComponents';
import Modal from '../../base/Modal/Modal';

interface Props {
  className?: string;
}

interface button {
  name: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

class DeleteModal extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const title = 'Are you sure you want to delete these itmes?'; 
    const detail = 'Once you delete these words, you can NOT restore them permanentaly, so please make sure it before deleting. ';
    const confirmBtn: button = {
      name: "Confirm",
      onClick: (e: React.MouseEvent<HTMLElement>) => {},
    }
    const selectCloseBtn: button = {
      name: "Close",
      onClick: (e: React.MouseEvent<HTMLElement>) => {},
    }
    return (
        <Modal title={ title } detail={ detail } closeButton={ selectCloseBtn} confirmButton={ confirmBtn } isOpen={ true }></Modal>
    );
  }
}

const StyledDeleteModal = styled(DeleteModal)`
`;


export default StyledDeleteModal;

