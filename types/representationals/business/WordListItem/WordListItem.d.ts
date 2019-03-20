import * as React from 'react';
import { toggleSelectWordDispatchType } from '../../../containers/type';
import { IWordListItem } from '../../../domains/word';
interface Props {
    className?: string;
    word: IWordListItem;
    wordId: string;
    toggleSelectWordChange: toggleSelectWordDispatchType;
}
declare class WordListItem extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    onCheckChange(e: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
declare const StyledWordListItem: import("styled-components").StyledComponent<typeof WordListItem, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledWordListItem;
