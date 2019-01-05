import * as React from 'react';
import styled from '../../story/styledComponents';
import Modal from '../../base/Modal/Modal';
import CloseButton from '../Button/CloseButton';
import { toggleSelectWarningModalClickType } from '../../../containers/type';

interface Props {
  className?: string;
  isSelectWarningModalOpen: boolean;
  toggleSelectWarningModalClick: toggleSelectWarningModalClickType; 
}

class SelectModal extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const title = 'Please select your word items before action.';
    const detail = 'you must select at leat one word to perform delete or edit action. Just tap or click words in order to select those.';
    return (
        <Modal title={ title } detail={ detail } closeButton={ <CloseButton /> } onClose={ this.props.toggleSelectWarningModalClick } isOpen={ this.props.isSelectWarningModalOpen }></Modal>
    );
  }
}

const StyledSelectModal = styled(SelectModal)`
`;


export default StyledSelectModal;
