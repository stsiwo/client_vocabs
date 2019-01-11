import { ISortedWordList, ICurrentFilter, ISearchedWordList, IDisplayedWordList, IEntityWord, IEntityDef } from '../state/type';
import { IWord } from '../domains/word';
import { IDef } from '../domains/def';
import { SORT_ORDER } from '../enums';
import { WordActionType, DefActionType, SortActionType, FilterActionType, UiActionType, SelectedWordListActionType, ResetActionType, SearchKeyWordActionType, SortedWordListActionType, SearchedWordListActionType, DisplayedWordListActionType } from './type'; 
import { normalizeWordObject, normalizeDefsArray } from '../state/index';

/**
 * action 
 **/
export const addNewWordAction = ( nextWord: IEntityWord ) => {
  return {
    type: WordActionType.ADD_NEW_WORD,
    nextWord: nextWord,
  }
}

export const removeWordAction = (id: string) => {
  return {
    type: WordActionType.REMOVE_WORD,
    id,
  }
};

export const updateWordAction = (updateWord: IWord) => {
  const normalizedUpdateWord = normalizeWordObject(updateWord);
  return {
    type: WordActionType.UPDATE_WORD,
    entities: normalizedUpdateWord.entities,
  }
};

export const addNewDefAction = (nextDef: IEntityDef) => {
  return {
    type: DefActionType.ADD_NEW_DEF,
    nextDef: nextDef,
  }
};

export const removeDefAction = (id: string, _wordId: string) => {
  return {
    type: DefActionType.REMOVE_DEF,
    id,
    _wordId,
  }
};

export const updateDefAction = (updateDef: IDef[]) => {
  const normalizedUpdateDef = normalizeDefsArray(updateDef);
  return {
    type: DefActionType.UPDATE_DEF,
    entities: normalizedUpdateDef.entities,
  }
};

export const changeSortAction = ( nextSort: SORT_ORDER ) => ({
  type: SortActionType.CHANGE_SORT,
  currentSort: nextSort,
});

export const changeFilterAction = ( nextFilter: ICurrentFilter ) => ({
  type: FilterActionType.CHANGE_FILTER, 
  currentFilter: nextFilter,
});

export const changeSortedWordListAction = (nextSortedWordList: ISortedWordList) => ({
  type: SortedWordListActionType.CHANGE_SORTED_WORD_LIST,
  nextSortedWordList: nextSortedWordList,
})

export const changeSearchedWordListAction = (nextSearchedWordList: ISearchedWordList) => ({
  type: SearchedWordListActionType.CHANGE_SEARCHED_WORD_LIST,
  nextSearchedWordList: nextSearchedWordList,
})

export const changeDisplayedWordListAction = (nextDisplayedWordList: IDisplayedWordList) => ({
  type: DisplayedWordListActionType.CHANGE_DISPLAYED_WORD_LIST,
  nextDisplayedWordList: nextDisplayedWordList,
})

export const toggleSelectWarningModalAction = (isSelectWarningModalOpen: boolean) => ({
  type: UiActionType.TOGGLE_SELECT_WARNING_MODAL,
  isSelectWarningModalOpen: isSelectWarningModalOpen,
})

export const toggleDeleteConfirmModalAction = (isDeleteConfirmModalOpen: boolean) => ({
  type: UiActionType.TOGGLE_DELETE_CONFIRM_MODAL,
  isDeleteConfirmModalOpen: isDeleteConfirmModalOpen,
})

export const toggleSortFilterModalAction = (isSortFilterModalOpen: boolean) => ({
  type: UiActionType.TOGGLE_SORT_FILTER_MODAL,
  isSortFilterModalOpen: isSortFilterModalOpen,
})

export const toggleSearchWordModalAction = (isSearchWordModalOpen: boolean) => ({
  type: UiActionType.TOGGLE_SEARCH_WORD_MODAL,
  isSearchWordModalOpen: isSearchWordModalOpen,
})

export const toggleSelectWordAction = (nextSelectedWordList: string[]) => ({
  type: SelectedWordListActionType.TOGGLE_SELECT_WORD,
  nextSelectedWordList: nextSelectedWordList,
});

export const addSelectedWordListAction = (nextSelectedWordList: string[]) => ({
  type: SelectedWordListActionType.ADD_SELECT_WORD,
  nextSelectedWordList: nextSelectedWordList,
});

export const selectAllWordAction = (nextSelectedWordList: string[]) => ({
  type: SelectedWordListActionType.SELECT_ALL_WORD,
  nextSelectedWordList: nextSelectedWordList,
});

export const resetStateAction = () => ({
  type: ResetActionType.RESET_STATE,
});

export const searchKeyWordAction = (nextSearchKey: string) => ({
  type: SearchKeyWordActionType.CHANGE_SEARCH_TEXT,
  nextSearchKey: nextSearchKey,
});
