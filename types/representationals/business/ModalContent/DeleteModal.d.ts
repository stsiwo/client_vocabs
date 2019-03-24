import * as React from 'react';
import { toggleClickType } from '../../../containers/type';
interface Props {
    className?: string;
    isDeleteConfirmModalOpen: boolean;
    toggleDeleteConfirmModalClick: toggleClickType;
    deleteConfirmClick: () => void;
}
declare class DeleteModal extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    render(): JSX.Element;
}
declare const StyledDeleteModal: import("styled-components").StyledComponent<typeof DeleteModal, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledDeleteModal;
