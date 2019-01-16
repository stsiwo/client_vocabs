import { ActionType } from '../actions/type';
// since every functions are used in here so import whole modules
import { CaseReducer } from './caseReducer';
// since every functions are used in here so import whole modules
import { StateType } from '../state/type';

/**
 * Hander type
 * must match property name with action type of a domain
 * and value name with the name of the slice reducer function
 * also relationship between action and caseReducer is M:N
 **/
/**************************
 * this is source of error : Final loading didn't return a buffer or string .... 
 **************************/
//export type Handler<T> = {
  //[P in keyof ActionType]?: caseReducer.caseReducerType<T>;
//}


/*****************************************
 * entities.words handler
 ****************************************/
export const wordsHandler: Handler<stateType.IEntityWord> = {
  [ActionType.ADD_NEW_WORD]: caseReducer.addWordEntityCaseReducer, // ok
  [ActionType.REMOVE_WORD]: caseReducer.removeWordEntityCaseReducer, // ok
  [ActionType.ADD_NEW_DEF]: caseReducer.toggleWordDefsCaseReducer, // ok
  [ActionType.UPDATE_WORD_NAME]: caseReducer.updateWordNameCaseReducer, // ok
  [ActionType.REMOVE_DEF]: caseReducer.toggleWordDefsCaseReducer, // ok
  [ActionType.RESET_STATE]: caseReducer.resetWordsCaseReducer,
}

/*****************************************
 * entities.defs handler
 ****************************************/
export const defsHandler: Handler<stateType.IEntityDef> = {
  [ActionType.ADD_NEW_WORD]: caseReducer.addDefEntityCaseReducer, // ok
  [ActionType.REMOVE_WORD]: caseReducer.removeDefEntityCaseReducer, // ok
  [ActionType.ADD_NEW_DEF]: caseReducer.addDefEntityCaseReducer, // ok
  [ActionType.REMOVE_DEF]: caseReducer.removeDefEntityCaseReducer, // ok
  [ActionType.UPDATE_DEF_POS]: caseReducer.updateDefPosCaseReducer, // ok
  [ActionType.UPDATE_DEF_TEXT]: caseReducer.updateDefTextCaseReducer, // ok
  [ActionType.UPDATE_DEF_IMAGE]: caseReducer.updateDefImageCaseReducer,  // ok
  [ActionType.RESET_STATE]: caseReducer.resetDefsCaseReducer,
}

/*****************************************
 * currentSort
 ****************************************/
export const currentSortHandler: Handler<stateType.ICurrentSort> = {
  [ActionType.CHANGE_SORT]: caseReducer.changeCurrentSortCaseReducer, // ok
  [ActionType.RESET_STATE]: caseReducer.resetCurrentSortCaseReducer,
}

/*****************************************
 * currentFilter
 ****************************************/
export const currentFilterHandler: Handler<stateType.ICurrentFilter> = {
  [ActionType.CHANGE_FILTER]: caseReducer.changeCurrentFilterCaseReducer, // ok
  [ActionType.RESET_STATE]: caseReducer.resetCurrentFilterCaseReducer,
}

/*****************************************
 * ui
 ****************************************/
export const uiHandler: Handler<stateType.IUi> = {
  [ActionType.TOGGLE_SELECT_WARNING_MODAL]: toggleSelectWarningModalReducer, // ok
  [ActionType.TOGGLE_DELETE_CONFIRM_MODAL]: toggleDeleteConfirmModalReducer, // ok
  [ActionType.TOGGLE_SORT_FILTER_MODAL]: toggleSortFilterModalReducer, // ok
  [ActionType.TOGGLE_SEARCH_WORD_MODAL]: toggleSearchWordModalReducer, // ok
  [ActionType.RESET_STATE]: caseReducer.resetUiCaseReducer,
}

/*****************************************
 * selectedWordList
 ****************************************/
export const selectedWordListHandler: Handler<stateType.ISelectedWordList> = {
  [ActionType.TOGGLE_SELECT_WORD]: caseReducer.toggleSelectedWordListCaseReducer, // ok
  [ActionType.SELECT_ALL_WORD]: caseReducer.selectAllSelectedWordListCaseReducer, // ok
  [ActionType.EMPTY_SELECTED_WORD]: caseReducer.emptySelectedWordListCaseReducer, // ok
  [ActionType.RESET_STATE]: caseReducer.resetSelectedWordListCaseReducer,
}

/*****************************************
 * sortedWordList
 ****************************************/
export const sortedWordListHandler: Handler<stateType.ISortedWordList> = {
  [ActionType.CHANGE_SORTED_WORD_LIST]: caseReducer.changeSortedWordListCaseReducer, // ok
  [ActionType.RESET_STATE]: caseReducer.resetSortedWordListCaseReducer,
}


/*****************************************
 * searchedWordList
 ****************************************/
export const searchedWordListHandler: Handler<stateType.ISearchedWordList> = {
  [ActionType.CHANGE_SEARCHED_WORD_LIST]: caseReducer.changeSearchedWordListCaseReducer, // ok
  [ActionType.RESET_STATE]: caseReducer.resetSearchedWordListCaseReducer, // ok
}

/*****************************************
 * displayedWordList
 ****************************************/
export const displayedWordListHandler: Handler<stateType.IDisplayedWordList> = {
  [ActionType.CHANGE_DISPLAYED_WORD_LIST]: caseReducer.changeDisplayedWordListCaseReducer, // ok
  [ActionType.RESET_STATE]: caseReducer.resetDisplayedWordListCaseReducer, // ok
}

/*****************************************
 * searchKeyWord
 ****************************************/
export const searchKeyWordHandler: Handler<stateType.ISearchKeyWord> = {
  [ActionType.CHANGE_SEARCH_TEXT]: caseReducer.searchKeyWordCaseReducer, // ok
  [ActionType.RESET_STATE]: caseReducer.resetSearchKeyWordCaseReducer, // ok
}

