import { StateType } from '../state/type';
import { IWord } from '../domains/word';
import { Action, AnyAction } from 'redux';
/****************************************************
 * Action type interface
 ****************************************************/
export declare namespace IAction {
    interface IBulkUpdateWordAction extends Action<string> {
        words: IWord[];
    }
    interface IRemoveWordAction extends Action<string> {
        wordId: string;
    }
    interface IToggleLoginAction extends Action<string> {
        isLogin: boolean;
    }
    interface IChangeSortAction extends Action<string> {
        currentSort: StateType.ICurrentSort;
        sortedWordList: StateType.ISortedWordList;
    }
    interface IChangeFilterAction extends Action<string> {
        currentFilter: number;
        sortedWordList: StateType.ISortedWordList;
    }
    interface IChangeSearchKeyWordAction extends Action<string> {
        nextSearchKey: string;
        nextSearchedWordList: string[];
    }
    interface IChangeDisplayedWordListAction extends Action<string> {
        displayedWordList: StateType.IDisplayedWordList;
    }
    interface IToggleSelectWarningModalAction extends Action<string> {
        isSelectWarningModalOpen: boolean;
    }
    interface IToggleDeleteConfirmModalAction extends Action<string> {
        isDeleteConfirmModalOpen: boolean;
    }
    interface IToggleSortFilterModalAction extends Action<string> {
        isSortFilterModalOpen: boolean;
    }
    interface IToggleSearchWordModalAction extends Action<string> {
        isSearchWordModalOpen: boolean;
    }
    interface IToggleDefineWarningModalAction extends Action<string> {
        isDefineWarningModalOpen: boolean;
    }
    interface IToggleSignUpModalAction extends Action<string> {
        isSignUpModalOpen: boolean;
    }
    interface IToggleLoginModalAction extends Action<string> {
        isLoginModalOpen: boolean;
    }
    interface IToggleErrorFlashMessageAction extends Action<string> {
        isErrorFlashMessageOpen: boolean;
    }
    interface IToggleWordFormErrorAction extends Action<string> {
        wordFormError: boolean;
    }
    interface IToggleSelectedWordListAction extends Action<string> {
        wordId: string;
    }
    interface ISelectAllSelectedWordListAction extends Action<string> {
        nextSelectedWordList: StateType.ISelectedWordList;
    }
    type IEmptySelectedWordListAction = Action<string>;
    type IResetStateAction = Action<string>;
    interface IResetSortFilterAction extends Action<string> {
        sortedWordList: StateType.ISortedWordList;
        displayedWordList: StateType.IDisplayedWordList;
    }
    interface IStartInitialWordsFetchRequestAction extends Action<string> {
        isInitialWordsFetching: boolean;
    }
    interface IFinishInitialWordsFetchRequestAction extends Action<string> {
        isInitialWordsFetching: boolean;
    }
}
/****************************************************
 * ActionCreator call signature
 ****************************************************/
export declare type IActionCreatorBaseType = (...args: any[]) => AnyAction;
/************************************************
 * name of this type should be changed to "updateWords or something
 ************************************************/
declare type IBulkUpdateWordActionCreator = (words: IWord[]) => IAction.IBulkUpdateWordAction;
declare type IRemoveWordActionCreator = (wordId: string) => IAction.IRemoveWordAction;
declare type IToggleLoginActionCreator = (isLogin: boolean) => IAction.IToggleLoginAction;
declare type IChangeSortActionCreator = (currentSort: StateType.ICurrentSort, sortedWordList: StateType.ISortedWordList) => IAction.IChangeSortAction;
declare type IChangeFilterActionCreator = (currentFilter: number, sortedWordList: StateType.ISortedWordList) => IAction.IChangeFilterAction;
declare type IChangeSearchKeyWordActionCreator = (nextSearchKey: string, nextSearchedWordList: string[]) => IAction.IChangeSearchKeyWordAction;
declare type IChangeDisplayedWordListActionCreator = (displayedWordList: StateType.IDisplayedWordList) => IAction.IChangeDisplayedWordListAction;
declare type IToggleSelectWarningModalActionCreator = (isSelectWarningModalOpen: boolean) => IAction.IToggleSelectWarningModalAction;
declare type IToggleDeleteConfirmModalActionCreator = (isDeleteConfirmModalOpen: boolean) => IAction.IToggleDeleteConfirmModalAction;
declare type IToggleSortFilterModalActionCreator = (isSortFilterModalOpen: boolean) => IAction.IToggleSortFilterModalAction;
declare type IToggleSearchWordModalActionCreator = (isSearchWordModalOpen: boolean) => IAction.IToggleSearchWordModalAction;
declare type IToggleDefineWarningModalActionCreator = (isDefineWarningModalOpen: boolean) => IAction.IToggleDefineWarningModalAction;
declare type IToggleSignUpModalActionCreator = (isSignUpModalOpen: boolean) => IAction.IToggleSignUpModalAction;
declare type IToggleLoginModalActionCreator = (isLoginModalOpen: boolean) => IAction.IToggleLoginModalAction;
declare type IToggleErrorFlashMessageActionCreator = (isErrorFlashMessageOpen: boolean) => IAction.IToggleErrorFlashMessageAction;
declare type IToggleWordFormErrorActionCreator = (wordFormError: boolean) => IAction.IToggleWordFormErrorAction;
declare type IToggleSelectedWordListActionCreator = (wordId: string) => IAction.IToggleSelectedWordListAction;
declare type ISelectAllSelectedWordListActionCreator = (nextSelectedWordList: StateType.ISelectedWordList) => IAction.ISelectAllSelectedWordListAction;
declare type IEmptySelectedWordListActionCreator = () => IAction.IEmptySelectedWordListAction;
declare type IResetStateActionCreator = () => IAction.IResetStateAction;
declare type IResetSortFilterActionCreator = (sortedWordList: StateType.ISortedWordList, displayedWordList: StateType.IDisplayedWordList) => IAction.IResetSortFilterAction;
declare type IStartInitialWordsFetchRequestActionCreator = () => IAction.IStartInitialWordsFetchRequestAction;
declare type IFinishInitialWordsFetchRequestActionCreator = () => IAction.IFinishInitialWordsFetchRequestAction;
/****************************************************
 * ActionCreator Creator
 ****************************************************/
/**
 * bulk update words (including defs entities)
 *
 * @param {IWord[]} words- words to be updated in redux state
 * @return {IAction.IAddNewDefAction} action
 *
 */
export declare const bulkUpdateWordActionCreator: IBulkUpdateWordActionCreator;
export declare const removeWordActionCreator: IRemoveWordActionCreator;
export declare const toggleLoginActionCreator: IToggleLoginActionCreator;
export declare const changeSortActionCreator: IChangeSortActionCreator;
export declare const changeFilterActionCreator: IChangeFilterActionCreator;
export declare const changeSearchKeyWordActionCreator: IChangeSearchKeyWordActionCreator;
export declare const changeDisplayedWordListActionCreator: IChangeDisplayedWordListActionCreator;
export declare const toggleSelectWarningModalActionCreator: IToggleSelectWarningModalActionCreator;
export declare const toggleDeleteConfirmModalActionCreator: IToggleDeleteConfirmModalActionCreator;
export declare const toggleSortFilterModalActionCreator: IToggleSortFilterModalActionCreator;
export declare const toggleSearchWordModalActionCreator: IToggleSearchWordModalActionCreator;
export declare const toggleDefineWarningModalActionCreator: IToggleDefineWarningModalActionCreator;
export declare const toggleSignUpModalActionCreator: IToggleSignUpModalActionCreator;
export declare const toggleLoginModalActionCreator: IToggleLoginModalActionCreator;
export declare const toggleErrorFlashMessageActionCreator: IToggleErrorFlashMessageActionCreator;
export declare const toggleWordFormErrorActionCreator: IToggleWordFormErrorActionCreator;
export declare const toggleSelectedWordListActionCreator: IToggleSelectedWordListActionCreator;
export declare const selectAllSelectedWordListActionCreator: ISelectAllSelectedWordListActionCreator;
export declare const emptySelectedWordListActionCreator: IEmptySelectedWordListActionCreator;
export declare const resetStateActionCreator: IResetStateActionCreator;
export declare const resetSortFilterActionCreator: IResetSortFilterActionCreator;
/**
 * start initial words fetch request (ation creator)
 *
 * @return {IAction.IStartInitialWordsFetchRequestAction} action
 *
 */
export declare const startInitialWordsFetchRequestActionCreator: IStartInitialWordsFetchRequestActionCreator;
/**
 * finish initial words fetch request (ation creator)
 *
 * @return {IAction.IFinishInitialWordsFetchRequestAction} action
 *
 */
export declare const finishInitialWordsFetchRequestActionCreator: IFinishInitialWordsFetchRequestActionCreator;
export {};
