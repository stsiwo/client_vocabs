import { StateType } from '../state/type';
import { IWord } from '../domains/word';
import { ActionType } from './type';
import { Action, AnyAction } from 'redux';
import { List } from 'immutable';

/****************************************************
 * Action type interface
 ****************************************************/
export namespace IAction { 

  export interface IBulkUpdateWordAction extends Action<string> {
    words: IWord[];
  }

  export interface IRemoveWordAction extends Action<string> {
    wordId: string;
  }

  export interface IChangeSortAction extends Action<string> {
    currentSort: StateType.ICurrentSort;
    currentSortedWordList: StateType.ISortedWordList;
  }

  export interface IChangeFilterAction extends Action<string> {
    currentFilter: number[]; 
    currentSortedWordList: StateType.ISortedWordList;
  }

  export interface IChangeSearchKeyWordAction extends Action<string> {
    nextSearchKey: string;
    nextSearchedWordList: string[]; 
  }

  export interface IChangeDisplayedWordListAction extends Action<string> {
    nextDisplayedWordList: StateType.IDisplayedWordList;
  }

  export interface IToggleSelectWarningModalAction extends Action<string> {
    isSelectWarningModalOpen: boolean;
  }

  export interface IToggleDeleteConfirmModalAction extends Action<string> {
    isDeleteConfirmModalOpen: boolean;
  }

  export interface IToggleSortFilterModalAction extends Action<string> {
    isSortFilterModalOpen: boolean;
  }

  export interface IToggleSearchWordModalAction extends Action<string> {
    isSearchWordModalOpen: boolean;
  }

  export interface IToggleDefineWarningModalAction extends Action<string> {
    isDefineWarningModalOpen: boolean;
  }

  export interface IToggleWordFormErrorAction extends Action<string> {
    wordFormError: boolean;
  }

  export interface IToggleSelectedWordListAction extends Action<string> {
    wordId: string;
  }

  export interface ISelectAllSelectedWordListAction extends Action<string> {
    nextSelectedWordList: List<string>;
  }

  export type IEmptySelectedWordListAction = Action<string>; 

  export type IResetStateAction = Action<string>; 

  export interface IStartInitialWordsFetchRequestAction extends Action<string> {
    isInitialWordsFetching: boolean; 
  }
  
  export interface IFinishInitialWordsFetchRequestAction extends Action<string> {
    isInitialWordsFetching: boolean; 
  }
}
/****************************************************
 * ActionCreator call signature
 ****************************************************/
export type IActionCreatorBaseType = (...args: any[]) => AnyAction;

/************************************************
 * name of this type should be changed to "updateWords or something
 ************************************************/
type IBulkUpdateWordActionCreator = (words: IWord[]) =>  IAction.IBulkUpdateWordAction;

type IRemoveWordActionCreator = (wordId: string) =>  IAction.IRemoveWordAction;

type IChangeSortActionCreator = (currentSort: StateType.ICurrentSort, currentSortedWordList: StateType.ISortedWordList) =>  IAction.IChangeSortAction;

type IChangeFilterActionCreator = ( currentFilter: number[], currentSortedWordList: StateType.ISortedWordList) =>  IAction.IChangeFilterAction;

type IChangeSearchKeyWordActionCreator = (nextSearchKey: string, nextSearchedWordList: string[]) =>  IAction.IChangeSearchKeyWordAction;

type IChangeDisplayedWordListActionCreator = (nextDisplayedWordList: StateType.IDisplayedWordList) =>  IAction.IChangeDisplayedWordListAction;

type IToggleSelectWarningModalActionCreator = (isSelectWarningModalOpen: boolean) =>  IAction.IToggleSelectWarningModalAction;

type IToggleDeleteConfirmModalActionCreator = (isDeleteConfirmModalOpen: boolean) =>  IAction.IToggleDeleteConfirmModalAction;

type IToggleSortFilterModalActionCreator = (isSortFilterModalOpen: boolean) =>  IAction.IToggleSortFilterModalAction;

type IToggleSearchWordModalActionCreator = (isSearchWordModalOpen: boolean) =>  IAction.IToggleSearchWordModalAction;

type IToggleDefineWarningModalActionCreator = (isDefineWarningModalOpen: boolean) =>  IAction.IToggleDefineWarningModalAction;

type IToggleWordFormErrorActionCreator = (wordFormError: boolean) =>  IAction.IToggleWordFormErrorAction;

type IToggleSelectedWordListActionCreator = (wordId: string) =>  IAction.IToggleSelectedWordListAction;

type ISelectAllSelectedWordListActionCreator = (nextSelectedWordList: List<string>) =>  IAction.ISelectAllSelectedWordListAction;

type IEmptySelectedWordListActionCreator = () =>  IAction.IEmptySelectedWordListAction;

type IResetStateActionCreator = () =>  IAction.IResetStateAction;

type IStartInitialWordsFetchRequestActionCreator = () =>  IAction.IStartInitialWordsFetchRequestAction;

type IFinishInitialWordsFetchRequestActionCreator = () => IAction.IFinishInitialWordsFetchRequestAction;
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
export const bulkUpdateWordActionCreator: IBulkUpdateWordActionCreator = ( words ) => {
  return {
    type: ActionType.BULK_UPDATE_WORD,
    words: words,
  }
}

export const removeWordActionCreator: IRemoveWordActionCreator = (wordId) => {
  return {
    type: ActionType.REMOVE_WORD,
    wordId,
  }
};

export const changeSortActionCreator: IChangeSortActionCreator = ( currentSort, currentSortedWordList) => ({
  type: ActionType.CHANGE_SORT,
  currentSort: currentSort,
  currentSortedWordList: currentSortedWordList,
});

export const changeFilterActionCreator: IChangeFilterActionCreator = ( currentFilter, currentSortedWordList) => ({
  type: ActionType.CHANGE_FILTER,
  currentFilter: currentFilter,
  currentSortedWordList: currentSortedWordList,
});

export const changeSearchKeyWordActionCreator: IChangeSearchKeyWordActionCreator = (nextSearchKey, nextSearchedWordList) => ({
  type: ActionType.CHANGE_SEARCH_TEXT,
  nextSearchKey: nextSearchKey,
  nextSearchedWordList: nextSearchedWordList,
});


export const changeDisplayedWordListActionCreator: IChangeDisplayedWordListActionCreator = (nextDisplayedWordList) => ({
  type: ActionType.CHANGE_DISPLAYED_WORD_LIST,
  nextDisplayedWordList: nextDisplayedWordList,
})

export const toggleSelectWarningModalActionCreator: IToggleSelectWarningModalActionCreator = (isSelectWarningModalOpen) => ({
  type: ActionType.TOGGLE_SELECT_WARNING_MODAL,
  isSelectWarningModalOpen: isSelectWarningModalOpen,
})

export const toggleDeleteConfirmModalActionCreator: IToggleDeleteConfirmModalActionCreator = (isDeleteConfirmModalOpen) => ({
  type: ActionType.TOGGLE_DELETE_CONFIRM_MODAL,
  isDeleteConfirmModalOpen: isDeleteConfirmModalOpen,
})

export const toggleSortFilterModalActionCreator: IToggleSortFilterModalActionCreator = (isSortFilterModalOpen) => ({
  type: ActionType.TOGGLE_SORT_FILTER_MODAL,
  isSortFilterModalOpen: isSortFilterModalOpen,
})

export const toggleSearchWordModalActionCreator: IToggleSearchWordModalActionCreator = (isSearchWordModalOpen) => ({
  type: ActionType.TOGGLE_SEARCH_WORD_MODAL,
  isSearchWordModalOpen: isSearchWordModalOpen,
})

export const toggleDefineWarningModalActionCreator: IToggleDefineWarningModalActionCreator = (isDefineWarningModalOpen) => ({
  type: ActionType.TOGGLE_DEFINE_WARNING_MODAL,
  isDefineWarningModalOpen: isDefineWarningModalOpen,
})

export const toggleWordFormErrorActionCreator: IToggleWordFormErrorActionCreator = (wordFormError) => ({
  type: ActionType.TOGGLE_WORD_FORM_ERROR,
  wordFormError: wordFormError,
})

export const toggleSelectedWordListActionCreator: IToggleSelectedWordListActionCreator = (wordId) => ({
  type: ActionType.TOGGLE_SELECT_WORD,
  wordId: wordId,
});

export const selectAllSelectedWordListActionCreator: ISelectAllSelectedWordListActionCreator = (nextSelectedWordList) => ({
  type: ActionType.SELECT_ALL_WORD,
  nextSelectedWordList: nextSelectedWordList,
});

export const emptySelectedWordListActionCreator: IEmptySelectedWordListActionCreator = () => ({
  type: ActionType.EMPTY_SELECTED_WORD,
});

export const resetStateActionCreator: IResetStateActionCreator = () => ({
  type: ActionType.RESET_STATE,
});

/**
 * start initial words fetch request (ation creator) 
 *
 * @return {IAction.IStartInitialWordsFetchRequestAction} action 
 *
 */
export const startInitialWordsFetchRequestActionCreator: IStartInitialWordsFetchRequestActionCreator = () => ({
  type: ActionType.START_INITIAL_WORDS_FETCH_REQUEST,
  isInitialWordsFetching: true,
});

/**
 * finish initial words fetch request (ation creator) 
 *
 * @return {IAction.IFinishInitialWordsFetchRequestAction} action 
 *
 */
export const finishInitialWordsFetchRequestActionCreator: IFinishInitialWordsFetchRequestActionCreator = () => ({
  type: ActionType.FINISH_INITIAL_WORDS_FETCH_REQUEST,
  isInitialWordsFetching: false,
});
