import * as React from 'react';
import styled from '../../story/styledComponents';
import Modal from '../../base/Modal/Modal';
import CloseButton from '../Button/CloseButton';
import { toggleClickType } from '../../../containers/type';

interface Props {
  className?: string;
  isDefineWarningModalOpen: boolean;
  toggleDefineWarningModalClick: toggleClickType; 
}

class DefineWarningModal extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const title = 'Plase define word (at least name and one definition) before leaving this page.';
    const detail = 'Some of your word have not defined completely. Please define those word before moving to another page.';
    return (
        <Modal 
          title={ title } 
          detail={ detail } 
          closeButton={ <CloseButton onClose={ this.props.toggleDefineWarningModalClick }/> } 
          onClose={ this.props.toggleDefineWarningModalClick } 
          isOpen={ this.props.isDefineWarningModalOpen }>
        </Modal>
    );
  }
}

const StyledDefineWarningModal = styled(DefineWarningModal)`
`;
StyledDefineWarningModal.displayName = "DefineWarningModalSelector";


export default StyledDefineWarningModal;

