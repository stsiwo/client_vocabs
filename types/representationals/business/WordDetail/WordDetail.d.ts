import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IWord } from '../../../domains/word';
interface Props extends RouteComponentProps<{}> {
    className?: string;
    words: IWord[];
    isDefineWarningModalOpen: boolean;
    wordFormErrorCheck: (isError: boolean) => void;
}
declare const StyledWordDetail: import("styled-components").StyledComponent<React.ComponentType<Props>, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledWordDetail;
