import { ActionType, IActionType } from '../actions/type';
// since every functions are used in here so import whole modules
import { CaseReducer } from './caseReducer';
// since every functions are used in here so import whole modules
import { StateType } from '../state/type';

export namespace ActionHandler {
  /**
   * Hander type
   * must match property name with action type of a domain
   * and value name with the name of the slice reducer function
   * also relationship between action and CaseReducer is M:N
   **/
  /**************************
   * this is source of error : Final loading didn't return a buffer or string .... 
   **************************/
  export type HandlerType<T> = {
    [P in keyof IActionType]?: CaseReducer.CaseReducerType<T>;
  }


  /*****************************************
   * entities.words handler
   ****************************************/
  export const wordsHandler: HandlerType<StateType.IEntityWord> = {
    [ActionType.ADD_NEW_WORD]: CaseReducer.addWordEntityCaseReducer, // ok
    [ActionType.REMOVE_WORD]: CaseReducer.removeWordEntityCaseReducer, // ok
    [ActionType.ADD_NEW_DEF]: CaseReducer.toggleWordDefsCaseReducer, // ok
    [ActionType.UPDATE_WORD_NAME]: CaseReducer.updateWordNameCaseReducer, // ok
    [ActionType.REMOVE_DEF]: CaseReducer.toggleWordDefsCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetWordsCaseReducer,
  }

  /*****************************************
   * entities.defs handler
   ****************************************/
  export const defsHandler: HandlerType<StateType.IEntityDef> = {
    [ActionType.ADD_NEW_WORD]: CaseReducer.addDefEntityCaseReducer, // ok
    [ActionType.REMOVE_WORD]: CaseReducer.removeDefEntitiesCaseReducer, // ok
    [ActionType.ADD_NEW_DEF]: CaseReducer.addDefEntityCaseReducer, // ok
    [ActionType.REMOVE_DEF]: CaseReducer.removeDefEntityCaseReducer, // ok
    [ActionType.UPDATE_DEF_POS]: CaseReducer.updateDefPosCaseReducer, // ok
    [ActionType.UPDATE_DEF_TEXT]: CaseReducer.updateDefTextCaseReducer, // ok
    [ActionType.UPDATE_DEF_IMAGE]: CaseReducer.updateDefImageCaseReducer,  // ok
    [ActionType.RESET_STATE]: CaseReducer.resetDefsCaseReducer,
  }

  /*****************************************
   * currentSort
   ****************************************/
  export const currentSortHandler: HandlerType<StateType.ICurrentSort> = {
    [ActionType.CHANGE_SORT]: CaseReducer.changeCurrentSortCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetCurrentSortCaseReducer,
  }

  /*****************************************
   * currentFilter
   ****************************************/
  export const currentFilterHandler: HandlerType<StateType.ICurrentFilter> = {
    [ActionType.CHANGE_FILTER]: CaseReducer.changeCurrentFilterCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetCurrentFilterCaseReducer,
  }

  /*****************************************
   * ui
   ****************************************/
  export const uiHandler: HandlerType<StateType.IUi> = {
    [ActionType.TOGGLE_SELECT_WARNING_MODAL]: CaseReducer.toggleSelectWarningModalCaseReducer, // ok
    [ActionType.TOGGLE_DELETE_CONFIRM_MODAL]: CaseReducer.toggleDeleteConfirmModalCaseReducer, // ok
    [ActionType.TOGGLE_SORT_FILTER_MODAL]: CaseReducer.toggleSortFilterModalCaseReducer, // ok
    [ActionType.TOGGLE_SEARCH_WORD_MODAL]: CaseReducer.toggleSearchWordModalCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetUiCaseReducer,
  }

  /*****************************************
   * selectedWordList
   ****************************************/
  export const selectedWordListHandler: HandlerType<StateType.ISelectedWordList> = {
    [ActionType.TOGGLE_SELECT_WORD]: CaseReducer.toggleSelectedWordListCaseReducer, // ok
    [ActionType.SELECT_ALL_WORD]: CaseReducer.selectAllSelectedWordListCaseReducer, // ok
    [ActionType.EMPTY_SELECTED_WORD]: CaseReducer.emptySelectedWordListCaseReducer, // ok
    [ActionType.REMOVE_WORD]: CaseReducer.toggleSelectedWordListCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetSelectedWordListCaseReducer,

  }

  /*****************************************
   * sortedWordList
   ****************************************/
  export const sortedWordListHandler: HandlerType<StateType.ISortedWordList> = {
    [ActionType.CHANGE_SORT]: CaseReducer.changeSortedWordListCaseReducer, // ok
    [ActionType.CHANGE_FILTER]: CaseReducer.changeSortedWordListCaseReducer, // ok
    [ActionType.REMOVE_WORD]: CaseReducer.toggleSortedWordListCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetSortedWordListCaseReducer,
  }


  /*****************************************
   * searchedWordList
   ****************************************/
  export const searchedWordListHandler: HandlerType<StateType.ISearchedWordList> = {
    [ActionType.CHANGE_SEARCHED_WORD_LIST]: CaseReducer.changeSearchedWordListCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetSearchedWordListCaseReducer, // ok
  }

  /*****************************************
   * displayedWordList
   ****************************************/
  export const displayedWordListHandler: HandlerType<StateType.IDisplayedWordList> = {
    [ActionType.CHANGE_DISPLAYED_WORD_LIST]: CaseReducer.changeDisplayedWordListCaseReducer, // ok
    [ActionType.REMOVE_WORD]: CaseReducer.toggleDisplayedWordListCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetDisplayedWordListCaseReducer, // ok
  }

  /*****************************************
   * searchKeyWord
   ****************************************/
  export const searchKeyWordHandler: HandlerType<StateType.ISearchKeyWord> = {
    [ActionType.CHANGE_SEARCH_TEXT]: CaseReducer.changeSearchKeyWordCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetSearchKeyWordCaseReducer, // ok
  }
}
