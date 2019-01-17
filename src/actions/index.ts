import { StateType } from '../state/type';
import { SORT_ORDER } from '../enums';
import { PosEnum } from '../domains/pos';
import { ActionType } from './type';


/****************************************************
 * ActionCreator Creator
 ****************************************************/
export const addNewWordActionCreator = ( nextWord: StateType.IEntityWord, nextDef: StateType.IEntityDef ) => {
  return {
    type: ActionType.ADD_NEW_WORD,
    nextWord: nextWord,
    nextDef: nextDef,
  }
}

export const removeWordActionCreator = (wordId: string) => {
  return {
    type: ActionType.REMOVE_WORD,
    wordId,
  }
};

export const updateWordNameActionCreator = (id: string, nextWordName: string) => {
  return {
    type: ActionType.UPDATE_WORD_NAME,
    id: id,
    nextWordName: nextWordName,
  }
};


export const addNewDefActionCreator = (wordId: string, nextDef: StateType.IEntityDef) => {
  return {
    type: ActionType.ADD_NEW_DEF,
    nextDef: nextDef,
    wordId: wordId,
    defIds: Object.keys(nextDef),
  }
};

export const removeDefActionCreator = (wordId: string, defIds: string[]) => {
  return {
    type: ActionType.REMOVE_DEF,
    wordId: wordId,
    defIds: defIds,
  }
};

export const updateDefPosActionCreator = (id: string, nextPos: PosEnum) => {
  return {
    type: ActionType.UPDATE_DEF_POS,
    id: id,
    nextPos: nextPos,
  }
};

export const updateDefTextActionCreator = (id: string, nextText: string) => {
  return {
    type: ActionType.UPDATE_DEF_TEXT,
    id: id,
    nextText: nextText,
  }
};

export const updateDefImageActionCreator= (id: string, nextImage: string) => {
  return {
    type: ActionType.UPDATE_DEF_IMAGE,
    id: id,
    nextImage: nextImage,
  }
};

export const changeSortActionCreator = ( nextSort: SORT_ORDER, nextSortedWordList: StateType.ISortedWordList) => ({
  type: ActionType.CHANGE_SORT,
  currentSort: nextSort,
  nextSortedWordList: nextSortedWordList,
});

export const changeFilterActionCreator = ( nextFilter: StateType.ICurrentFilter, nextSortedWordList: StateType.ISortedWordList) => ({
  type: ActionType.CHANGE_FILTER,
  currentFilter: nextFilter,
  nextSortedWordList: nextSortedWordList,
});

export const changeSearchKeyWordActionCreator = (nextSearchKey: string, nextSearchedWordList: StateType.ISearchedWordList) => ({
  type: ActionType.CHANGE_SEARCH_TEXT,
  nextSearchKey: nextSearchKey,
  nextSearchedWordList: nextSearchedWordList,
});


export const changeDisplayedWordListActionCreator = (nextDisplayedWordList: StateType.IDisplayedWordList) => ({
  type: ActionType.CHANGE_DISPLAYED_WORD_LIST,
  nextDisplayedWordList: nextDisplayedWordList,
})

export const toggleSelectWarningModalActionCreator = (isSelectWarningModalOpen: boolean) => ({
  type: ActionType.TOGGLE_SELECT_WARNING_MODAL,
  isSelectWarningModalOpen: isSelectWarningModalOpen,
})

export const toggleDeleteConfirmModalActionCreator = (isDeleteConfirmModalOpen: boolean) => ({
  type: ActionType.TOGGLE_DELETE_CONFIRM_MODAL,
  isDeleteConfirmModalOpen: isDeleteConfirmModalOpen,
})

export const toggleSortFilterModalActionCreator = (isSortFilterModalOpen: boolean) => ({
  type: ActionType.TOGGLE_SORT_FILTER_MODAL,
  isSortFilterModalOpen: isSortFilterModalOpen,
})

export const toggleSearchWordModalActionCreator = (isSearchWordModalOpen: boolean) => ({
  type: ActionType.TOGGLE_SEARCH_WORD_MODAL,
  isSearchWordModalOpen: isSearchWordModalOpen,
})

export const toggleSelectedWordListActionCreator = (wordId: string) => ({
  type: ActionType.TOGGLE_SELECT_WORD,
  wordId: wordId,
});

export const selectAllSelectedWordListActionCreator = (nextSelectedWordList: string[]) => ({
  type: ActionType.SELECT_ALL_WORD,
  nextSelectedWordList: nextSelectedWordList,
});

export const emptySelectedWordListActionCreator = () => ({
  type: ActionType.EMPTY_SELECTED_WORD,
});

export const resetStateActionCreator = () => ({
  type: ActionType.RESET_STATE,
});


