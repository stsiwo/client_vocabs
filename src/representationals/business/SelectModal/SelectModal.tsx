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

class SelectModal extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const title = 'Please select your word items before action.';
    const detail = 'you must select at leat one word to perform delete or edit action. Just tap or click words in order to select those.';
    const selectCloseBtn: button = {
      name: "Close",
      onClick: (e: React.MouseEvent<HTMLElement>) => {},
    }
    return (
        <Modal title={ title } detail={ detail } closeButton={ selectCloseBtn} isOpen={ true }></Modal>
    );
  }
}

const StyledSelectModal = styled(SelectModal)`
`;


export default StyledSelectModal;
