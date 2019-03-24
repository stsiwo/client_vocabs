import * as React from 'react';
import { changeSearchKeyWordDispatchType } from '../../../containers/type';
interface Props {
    className?: string;
    searchKeyWord: string;
    changeSearchKeyWord: changeSearchKeyWordDispatchType;
}
declare class SearchWordModal extends React.PureComponent<Props, {}> {
    private ref;
    constructor(props: Props);
    stopBubblingUpCloseEvent(e: React.MouseEvent<HTMLElement>): void;
    handleChangeSearchKeyWord(e: React.ChangeEvent<HTMLInputElement>): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
declare const StyledSearchWordModal: import("styled-components").StyledComponent<typeof SearchWordModal, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledSearchWordModal;
