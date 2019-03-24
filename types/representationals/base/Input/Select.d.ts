import * as React from 'react';
import { IPos, PosEnum } from '../../../domains/pos';
interface WrapperProps {
    className?: string;
    items: IPos[];
    posId: PosEnum;
    labelName: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children: string;
    onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
}
declare const StyledWrapperSelect: import("styled-components").StyledComponent<React.FunctionComponent<WrapperProps>, import("../../story/theme").ThemeInterface, {}, never>;
export default StyledWrapperSelect;
