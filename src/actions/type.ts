/*****************************************
 * action creator and action
 ****************************************/
/**
 * action type's type interface
 **/
export interface IActionType {

  // words
  ADD_NEW_WORD: string; // ok
  REMOVE_WORD: string; // ok
  UPDATE_WORD_NAME: string; // ok

  // def logic
  ADD_NEW_DEF: string; // ok
  REMOVE_DEF: string; // ok
  UPDATE_DEF_POS: string; // ok
  UPDATE_DEF_TEXT: string; // ok
  UPDATE_DEF_IMAGE: string; // ok

  // sort & filter
  CHANGE_SORT: string, // ok
  CHANGE_FILTER: string, // ok

  // ui
  TOGGLE_SELECT_WARNING_MODAL: string; // ok
  TOGGLE_DELETE_CONFIRM_MODAL: string; // ok
  TOGGLE_SORT_FILTER_MODAL: string; // ok
  TOGGLE_SEARCH_WORD_MODAL: string; // ok

  // selectedWordList
  TOGGLE_SELECT_WORD: string; // ok
  SELECT_ALL_WORD: string;  // ok
  EMPTY_SELECTED_WORD: string; // ok

  // sortedWordList
  CHANGE_SORTED_WORD_LIST: string; // ok

  // searchedWordList
  CHANGE_SEARCHED_WORD_LIST: string; // ok

  // displayedWordList
  CHANGE_DISPLAYED_WORD_LIST: string; // ok

  // searchKeyWord
  CHANGE_SEARCH_TEXT: string; // ok

  // reset to initial state
  RESET_STATE: string; // ok
}

/**
 * action type
 **/
export const ActionType: IActionType = {

  ADD_NEW_WORD: "ADD_NEW_WORD",
  REMOVE_WORD: "REMOVE_WORD",
  UPDATE_WORD_NAME: "UPDATE_WORD_NAME",

  ADD_NEW_DEF: "ADD_NEW_DEF",
  REMOVE_DEF: "REMOVE_DEF",
  UPDATE_DEF_POS: "UPDATE_DEF_POS",
  UPDATE_DEF_TEXT: "UPDATE_DEF_TEXT",
  UPDATE_DEF_IMAGE: "UPDATE_DEF_IMAGE",

  CHANGE_SORT: "CHANGE_SORT",
  CHANGE_FILTER: "CHANGE_FILTER",

  TOGGLE_SELECT_WARNING_MODAL: "TOGGLE_SELECT_WARNING_MODAL",
  TOGGLE_DELETE_CONFIRM_MODAL: "TOGGLE_DELETE_CONFIRM_MODAL",
  TOGGLE_SORT_FILTER_MODAL: "TOGGLE_SORT_FILTER_MODAL",
  TOGGLE_SEARCH_WORD_MODAL: "TOGGLE_SEARCH_WORD_MODAL",

  TOGGLE_SELECT_WORD: "TOGGLE_SELECT_WORD",
  SELECT_ALL_WORD: "SELECT_ALL_WORD",
  EMPTY_SELECTED_WORD: "EMPTY_SELECTED_WORD",

  CHANGE_SORTED_WORD_LIST: 'CHANGE_SORTED_WORD_LIST',

  CHANGE_SEARCHED_WORD_LIST: 'CHANGE_SEARCHED_WORD_LIST',

  CHANGE_SEARCH_TEXT: "CHANGE_SEARCH_TEXT",

  CHANGE_DISPLAYED_WORD_LIST: 'CHANGE_DISPLAYED_WORD_LIST',

  RESET_STATE: "RESET_STATE",
}

/**
 * action type 
 **/
export interface ISelectAllWordActionType {
  type: string;
  nextSelectedWordList: string[];
}

export interface IChangeSortedWordListActionCreator {
  type: string;
  nextSortedWordList: string[];
}

