import { ActionType, IActionType } from '../actions/type';
// since every functions are used in here so import whole modules
import { CaseReducer } from './caseReducer';
// since every functions are used in here so import whole modules
import { StateType } from '../state/type';
import { Record } from 'immutable';

export namespace ActionHandler {
  /**
   * Hander type
   * must match property name with action type of a domain
   * and value name with the name of the slice reducer function
   * also relationship between action and CaseReducer is M:N
   **/
  /**************************
   * this is source of error : Final loading didn't return a buffer or string .... 
   *  - SOLVED: i was putting object in where it would be supposed to be interface ( IActionType )
   **************************/
  export type HandlerType<T> = {
    [P in keyof IActionType]?: CaseReducer.CaseReducerType<T>;
  }


  /*****************************************
   * entities.words handler
   ****************************************/
  export const wordsHandler: HandlerType<StateType.IEntityWord> = {
    [ActionType.BULK_UPDATE_WORD]: CaseReducer.bulkUpdateWordCaseReducer, // ok
    [ActionType.REMOVE_WORD]: CaseReducer.removeWordEntityCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetWordsCaseReducer,
  }

  /*****************************************
   * currentSort
   ****************************************/
  export const currentSortHandler: HandlerType<StateType.ICurrentSort> = {
    [ActionType.CHANGE_SORT]: CaseReducer.changeCurrentSortCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetCurrentSortCaseReducer,
    [ActionType.RESET_SORT_FILTER]: CaseReducer.resetCurrentSortCaseReducer,
  }

  /*****************************************
   * currentFilter
   ****************************************/
  export const currentFilterHandler: HandlerType<StateType.ICurrentFilter> = {
    [ActionType.CHANGE_FILTER]: CaseReducer.changeCurrentFilterCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetCurrentFilterCaseReducer,
    [ActionType.RESET_SORT_FILTER]: CaseReducer.resetCurrentFilterCaseReducer,
  }

  /*****************************************
   * ui
   ****************************************/
  export const uiHandler: HandlerType<Record<StateType.IUi>> = {
    [ActionType.TOGGLE_SELECT_WARNING_MODAL]: CaseReducer.toggleSelectWarningModalCaseReducer, // ok
    [ActionType.TOGGLE_DELETE_CONFIRM_MODAL]: CaseReducer.toggleDeleteConfirmModalCaseReducer, // ok
    [ActionType.TOGGLE_SORT_FILTER_MODAL]: CaseReducer.toggleSortFilterModalCaseReducer, // ok
    [ActionType.TOGGLE_SEARCH_WORD_MODAL]: CaseReducer.toggleSearchWordModalCaseReducer, // ok
    [ActionType.TOGGLE_DEFINE_WARNING_MODAL]: CaseReducer.toggleDefineWarningModalCaseReducer, // ok
    [ActionType.TOGGLE_SIGNUP_MODAL]: CaseReducer.toggleSignUpModalCaseReducer, // ok
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
    [ActionType.BULK_UPDATE_WORD]: CaseReducer.addSortedWordListCaseReducer, // ok
    [ActionType.CHANGE_SORT]: CaseReducer.changeSortedWordListCaseReducer, // ok
    [ActionType.CHANGE_FILTER]: CaseReducer.changeSortedWordListCaseReducer, // ok
    [ActionType.REMOVE_WORD]: CaseReducer.toggleSortedWordListCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetSortedWordListCaseReducer,
    [ActionType.RESET_SORT_FILTER]: CaseReducer.changeSortedWordListCaseReducer, // ok
  }

  /*****************************************
   * searchedWordList
   ****************************************/
  export const searchedWordListHandler: HandlerType<StateType.ISearchedWordList> = {
    [ActionType.CHANGE_SEARCH_TEXT]: CaseReducer.changeSearchedWordListCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetSearchedWordListCaseReducer, // ok
  }

  /*****************************************
   * displayedWordList
   ****************************************/
  export const displayedWordListHandler: HandlerType<StateType.IDisplayedWordList> = {
    [ActionType.CHANGE_DISPLAYED_WORD_LIST]: CaseReducer.changeDisplayedWordListCaseReducer, // ok
    [ActionType.BULK_UPDATE_WORD]: CaseReducer.addDisplayedWordListCaseReducer, // ok
    [ActionType.REMOVE_WORD]: CaseReducer.toggleDisplayedWordListCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetDisplayedWordListCaseReducer, // ok
    [ActionType.RESET_SORT_FILTER]: CaseReducer.changeDisplayedWordListCaseReducer, // ok
  }

  /*****************************************
   * wordFormError
   ****************************************/
  export const wordFormErrorHandler: HandlerType<StateType.IWordFormError> = {
    [ActionType.TOGGLE_WORD_FORM_ERROR]: CaseReducer.toggleWordFormErrorCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetWordFormErrorCaseReducer, // ok
  }

  /*****************************************
   * searchKeyWord
   ****************************************/
  export const searchKeyWordHandler: HandlerType<StateType.ISearchKeyWord> = {
    [ActionType.CHANGE_SEARCH_TEXT]: CaseReducer.changeSearchKeyWordCaseReducer, // ok
    [ActionType.RESET_STATE]: CaseReducer.resetSearchKeyWordCaseReducer, // ok
  }

  /*****************************************
   * asyncs - isInitialWordsFetching
   ****************************************/
  export const asyncsHandler: HandlerType<Record<StateType.IAsyncs>> = {
    [ActionType.START_INITIAL_WORDS_FETCH_REQUEST]: CaseReducer.startInitialWordsFetchRequestCaseReducer, 
    [ActionType.FINISH_INITIAL_WORDS_FETCH_REQUEST]: CaseReducer.finishInitialWordsFetchRequestCaseReducer, 
  }
}
