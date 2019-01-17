import { StateType } from '../state/type';
import { PosEnum } from '../domains/pos';
import { ActionType} from './type';
import { Action } from 'redux';

/****************************************************
 * Action type interface
 ****************************************************/
export interface IAddNewWordAction extends Action<string> {
  word: StateType.IEntityWord;
  def: StateType.IEntityDef;
}

export interface IRemoveWordAction extends Action<string> {
  wordId: string;
}


export interface IUpdateWordNameAction extends Action<string> {
  wordId: string;
  wordName: string;
}


export interface IAddNewDefAction extends Action<string> {
  def: StateType.IEntityDef;
  wordId: string;
  defIds: string[];
}

export interface IRemoveDefAction extends Action<string> {
  wordId: string;
  defIds: string[];
}

export interface IUpdateDefPosAction extends Action<string> {
  defId: string;
  defPos: PosEnum;
}

export interface IUpdateDefTextAction extends Action<string> {
  defId: string;
  defText: string;
}

export interface IUpdateDefImageAction extends Action<string> {
  defId: string;
  defImage: string;
}

export interface IChangeSortAction extends Action<string> {
  currentSort: StateType.ICurrentSort;
  currentSortedWordList: StateType.ISortedWordList;
}

export interface IChangeFilterAction extends Action<string> {
  currentFilter: StateType.ICurrentFilter;
  currentSortedWordList: StateType.ISortedWordList;
}

export interface IChangeSearchKeyWordAction extends Action<string> {
  nextSearchKey: string;
  nextSearchedWordList: StateType.ISearchedWordList;
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

export interface IToggleSelectedWordListAction extends Action<string> {
  wordId: string;
}

export interface ISelectAllSelectedWordListAction extends Action<string> {
  nextSelectedWordList: string[];
}

export type IEmptySelectedWordListAction = Action<string>; 

export type IResetStateAction = Action<string>; 

/****************************************************
 * ActionCreator call signature
 ****************************************************/
type IAddNewWordActionCreator = (word: StateType.IEntityWord, def: StateType.IEntityDef) =>  IAddNewWordAction;

type IRemoveWordActionCreator = (wordId: string) =>  IRemoveWordAction;

type IUpdateWordNameActionCreator = (wordId: string, wordName: string) =>  IUpdateWordNameAction;

type IAddNewDefActionCreator = (def: StateType.IEntityDef, wordId: string) =>  IAddNewDefAction;

type IRemoveDefActionCreator = (wordId: string, defIds: string[]) =>  IRemoveDefAction;

type IUpdateDefPosActionCreator = (defId: string, defPos: PosEnum) =>  IUpdateDefPosAction;

type IUpdateDefTextActionCreator = (defId: string, defText: string) =>  IUpdateDefTextAction;

type IUpdateDefImageActionCreator = (defId: string, defImage: string) =>  IUpdateDefImageAction;

type IChangeSortActionCreator = (currentSort: StateType.ICurrentSort, currentSortedWordList: StateType.ISortedWordList) =>  IChangeSortAction;

type IChangeFilterActionCreator = ( currentFilter: StateType.ICurrentFilter, currentSortedWordList: StateType.ISortedWordList) =>  IChangeFilterAction;

type IChangeSearchKeyWordActionCreator = (nextSearchKey: string, nextSearchedWordList: StateType.ISearchedWordList) =>  IChangeSearchKeyWordAction;

type IChangeDisplayedWordListActionCreator = (nextDisplayedWordList: StateType.IDisplayedWordList) =>  IChangeDisplayedWordListAction;

type IToggleSelectWarningModalActionCreator = (isSelectWarningModalOpen: boolean) =>  IToggleSelectWarningModalAction;

type IToggleDeleteConfirmModalActionCreator = (isDeleteConfirmModalOpen: boolean) =>  IToggleDeleteConfirmModalAction;

type IToggleSortFilterModalActionCreator = (isSortFilterModalOpen: boolean) =>  IToggleSortFilterModalAction;

type IToggleSearchWordModalActionCreator = (isSearchWordModalOpen: boolean) =>  IToggleSearchWordModalAction;

type IToggleSelectedWordListActionCreator = (wordId: string) =>  IToggleSelectedWordListAction;

type ISelectAllSelectedWordListActionCreator = (nextSelectedWordList: string[]) =>  ISelectAllSelectedWordListAction;

type IEmptySelectedWordListActionCreator = () =>  IEmptySelectedWordListAction;

type IResetStateActionCreator = () =>  IResetStateAction;
/****************************************************
 * ActionCreator Creator
 ****************************************************/
export const addNewWordActionCreator: IAddNewWordActionCreator = ( word, def ) => {
  return {
    type: ActionType.ADD_NEW_WORD,
    word: word,
    def: def,
  }
}

export const removeWordActionCreator: IRemoveWordActionCreator = (wordId) => {
  return {
    type: ActionType.REMOVE_WORD,
    wordId,
  }
};

export const updateWordNameActionCreator: IUpdateWordNameActionCreator = (wordId, wordName) => {
  return {
    type: ActionType.UPDATE_WORD_NAME,
    wordId: wordId,
    wordName: wordName,
  }
};


export const addNewDefActionCreator: IAddNewDefActionCreator = (def, wordId) => {
  return {
    type: ActionType.ADD_NEW_DEF,
    def: def,
    wordId: wordId,
    defIds: Object.keys(def),
  }
};

export const removeDefActionCreator: IRemoveDefActionCreator = (wordId, defIds) => {
  return {
    type: ActionType.REMOVE_DEF,
    wordId: wordId,
    defIds: defIds,
  }
};

export const updateDefPosActionCreator: IUpdateDefPosActionCreator = (defId, defPos) => {
  return {
    type: ActionType.UPDATE_DEF_POS,
    defId: defId,
    defPos: defPos,
  }
};

export const updateDefTextActionCreator: IUpdateDefTextActionCreator = (defId, defText) => {
  return {
    type: ActionType.UPDATE_DEF_TEXT,
    defId: defId,
    defText: defText,
  }
};

export const updateDefImageActionCreator: IUpdateDefImageActionCreator = (defId, defImage) => {
  return {
    type: ActionType.UPDATE_DEF_IMAGE,
    defId: defId,
    defImage: defImage,
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


