import { IWordActionType, WordActionType, DefActionType, SortActionType, FilterActionType, UiActionType, SelectedWordListActionType, ResetActionType, SearchKeyWordActionType, SortedWordListActionType, SearchedWordListActionType, DisplayedWordListActionType } from '../actions/type';
import { caseReducer } from './caseReducer';
import { 
  addDefEntityCaseReducer, 
  removeDefEntityCaseReducer, 
  removeDefCaseReducer,
  updateDefPosCaseReducer,
  updateDefTextCaseReducer,
  updateDefImageCaseReducer,
  addWordEntityCaseReducer, 
  addDefCaseReducer,
  removeWordEntityCaseReducer,
  removeDefsCaseReducer,
  updateWordNameCaseReducer,
  currentSortCaseReducer, 
  sortedWordListCaseReducer, 
  currentFilterCaseReducer,
  toggleSelectWarningModalReducer,
  toggleDeleteConfirmModalReducer,
  toggleSortFilterModalReducer,
  toggleSearchWordModalReducer,
  toggleSelectedWordListCaseReducer,
  addSelectedWordListCaseReducer,
  selectAllSelectedWordListCaseReducer,
  resetDefsCaseReducer,
  resetWordsCaseReducer,
  resetCurrentSortCaseReducer,
  resetCurrentFilterCaseReducer,
  resetSortedWordListCaseReducer,
  resetSelectedWordListCaseReducer,
  resetUiCaseReducer,
  searchKeyWordCaseReducer,
  searchedWordListCaseReducer,
  displayedWordListCaseReducer
} from './caseReducer';
import { IEntityDef, IEntityWord, ICurrentSort, ISortedWordList, ICurrentFilter, IUi, ISelectedWordList, ISearchKeyWord, ISearchedWordList, IDisplayedWordList } from '../state/type';
/**
 * Hander type
 * must match property name with action type of a domain
 * and value name with the name of the slice reducer function
 **/
export type Handler<T> = {
  [P in keyof IWordActionType]?: caseReducer<T>;
}

export const defsHandler: Handler<IEntityDef> = {
  [DefActionType.ADD_NEW_DEF]: addDefEntityCaseReducer,
  [DefActionType.REMOVE_DEF]: removeDefEntityCaseReducer, 
  [DefActionType.UPDATE_DEF_POS]: updateDefPosCaseReducer,
  [DefActionType.UPDATE_DEF_TEXT]: updateDefTextCaseReducer,
  [DefActionType.UPDATE_DEF_IMAGE]: updateDefImageCaseReducer,
  // remove defs of a particular word when the word is remvoed
  [WordActionType.REMOVE_WORD]: removeDefsCaseReducer,
  [ResetActionType.RESET_STATE]: resetDefsCaseReducer,
}   

export const wordsHandler: Handler<IEntityWord> = {
  [WordActionType.ADD_NEW_WORD]: addWordEntityCaseReducer,
  // need this when add new word because it also has to change words entity's defs property
  [DefActionType.ADD_NEW_DEF]: addDefCaseReducer,
  [WordActionType.REMOVE_WORD]: removeWordEntityCaseReducer,
  [WordActionType.UPDATE_WORD_NAME]: updateWordNameCaseReducer,
  // remove target def id from defs property of word entitiy when def is removed
  [DefActionType.REMOVE_DEF]: removeDefCaseReducer, 
  [ResetActionType.RESET_STATE]: resetWordsCaseReducer,
}   

export const currentSortHandler: Handler<ICurrentSort> = {
  [SortActionType.CHANGE_SORT]: currentSortCaseReducer,
  [ResetActionType.RESET_STATE]: resetCurrentSortCaseReducer,
}

export const currentFilterHandler: Handler<ICurrentFilter> = {
  [FilterActionType.CHANGE_FILTER]: currentFilterCaseReducer,
  [ResetActionType.RESET_STATE]: resetCurrentFilterCaseReducer,
}

export const sortedWordListHandler: Handler<ISortedWordList> = {
  [ResetActionType.RESET_STATE]: resetSortedWordListCaseReducer,
  [SortedWordListActionType.CHANGE_SORTED_WORD_LIST]: sortedWordListCaseReducer,
}

export const searchedWordListHandler: Handler<ISearchedWordList> = {
  [SearchedWordListActionType.CHANGE_SEARCHED_WORD_LIST]: searchedWordListCaseReducer,
}

export const displayedWordListHandler: Handler<IDisplayedWordList> = {
  [DisplayedWordListActionType.CHANGE_DISPLAYED_WORD_LIST]: displayedWordListCaseReducer,
}

export const selectedWordListHandler: Handler<ISelectedWordList> = {
  [SelectedWordListActionType.TOGGLE_SELECT_WORD]: toggleSelectedWordListCaseReducer,
  [SelectedWordListActionType.SELECT_ALL_WORD]: selectAllSelectedWordListCaseReducer,
  [SelectedWordListActionType.ADD_SELECT_WORD]: addSelectedWordListCaseReducer,
  [ResetActionType.RESET_STATE]: resetSelectedWordListCaseReducer,
}

export const uiHandler: Handler<IUi> = {
  [UiActionType.TOGGLE_SELECT_WARNING_MODAL]: toggleSelectWarningModalReducer,
  [UiActionType.TOGGLE_DELETE_CONFIRM_MODAL]: toggleDeleteConfirmModalReducer,
  [UiActionType.TOGGLE_SORT_FILTER_MODAL]: toggleSortFilterModalReducer,
  [UiActionType.TOGGLE_SEARCH_WORD_MODAL]: toggleSearchWordModalReducer,
  [ResetActionType.RESET_STATE]: resetUiCaseReducer,
}

export const searchKeyWordHandler: Handler<ISearchKeyWord> = {
  [SearchKeyWordActionType.CHANGE_SEARCH_TEXT]: searchKeyWordCaseReducer,
}
