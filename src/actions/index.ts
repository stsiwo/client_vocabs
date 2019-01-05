import { ISortedWordList, ICurrentFilter } from '../state/type';
import { IWord } from '../domains/word';
import { IDef } from '../domains/def';
import { SORT_ORDER } from '../enums';
import { WordActionType, DefActionType, SortActionType, FilterActionType, UiActionType } from './type'; 
import { normalizeWordObject, normalizeDefsArray } from '../state/index';

/**
 * action 
 **/
export const addNewWordAction = (input: IWord) => {
  const normalizedNewWord = normalizeWordObject(input);
  return {
    type: WordActionType.ADD_NEW_WORD,
    entities: normalizedNewWord.entities,
  }
};

export const removeWordAction = (id: number) => {
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

export const addNewDefAction = (def: IDef[]) => {
  const normalizedNewDef = normalizeDefsArray(def);
  return {
    type: DefActionType.ADD_NEW_DEF,
    entities: normalizedNewDef.entities,
  }
};

export const removeDefAction = (id: number, _wordId: number) => {
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

export const changeSortAction = (sortedWordList: ISortedWordList, nextSort: SORT_ORDER) => ({
  type: SortActionType.CHANGE_SORT,
  sortedWordList,
  currentSort: nextSort,
});

export const changeFilterAction = (sortedWordList: ISortedWordList, nextFilter: ICurrentFilter ) => ({
  type: FilterActionType.CHANGE_FILTER, 
  sortedWordList,
  currentFilter: nextFilter,
});

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
