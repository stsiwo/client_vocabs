import { SORT_ORDER } from '../enums/index';
import { PosEnum } from '../domains/pos';

export type toggleSelectWarningModalClickType = (isOpen: boolean) => void;

export type toggleClickType = (isOpen: boolean) => void;

export type changeSortDispatchType = (nextSort: SORT_ORDER) => void;

export type changeFilterDispatchType = (nextFilter: PosEnum[]) => void;

export type toggleSelectWordDispatchType = (nextSelectedWordList: number[]) => void;


