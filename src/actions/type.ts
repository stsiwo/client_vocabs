/*****************************************
 * action creator and action
 ****************************************/
/**
 * action type's type interface
 **/
export interface IActionType {

  // words
  BULK_UPDATE_WORD: string;
  REMOVE_WORD: string; // ok

  // sort & filter
  CHANGE_SORT: string, // ok
  CHANGE_FILTER: string, // ok
  RESET_SORT_FILTER: string, 

  // ui
  TOGGLE_SELECT_WARNING_MODAL: string; // ok
  TOGGLE_DELETE_CONFIRM_MODAL: string; // ok
  TOGGLE_SORT_FILTER_MODAL: string; // ok
  TOGGLE_SEARCH_WORD_MODAL: string; // ok
  TOGGLE_DEFINE_WARNING_MODAL: string; // ok

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

  // wordFormError
  TOGGLE_WORD_FORM_ERROR: string;

  // searchKeyWord
  CHANGE_SEARCH_TEXT: string; // ok

  // reset to initial state
  RESET_STATE: string; // ok

  // initial words fetch request start
  START_INITIAL_WORDS_FETCH_REQUEST: string;

  // initial words fetch request done
  FINISH_INITIAL_WORDS_FETCH_REQUEST: string;
}

/**
 * action type
 **/
export const ActionType: IActionType = {

  BULK_UPDATE_WORD: "BULK_UPDATE_WORD",
  REMOVE_WORD: "REMOVE_WORD",

  CHANGE_SORT: "CHANGE_SORT",
  CHANGE_FILTER: "CHANGE_FILTER",
  RESET_SORT_FILTER: "RESET_SORT_FILTER",

  TOGGLE_SELECT_WARNING_MODAL: "TOGGLE_SELECT_WARNING_MODAL",
  TOGGLE_DELETE_CONFIRM_MODAL: "TOGGLE_DELETE_CONFIRM_MODAL",
  TOGGLE_SORT_FILTER_MODAL: "TOGGLE_SORT_FILTER_MODAL",
  TOGGLE_SEARCH_WORD_MODAL: "TOGGLE_SEARCH_WORD_MODAL",
  TOGGLE_DEFINE_WARNING_MODAL: "TOGGLE_DEFINE_WARNING_MODAL",

  TOGGLE_SELECT_WORD: "TOGGLE_SELECT_WORD",
  SELECT_ALL_WORD: "SELECT_ALL_WORD",
  EMPTY_SELECTED_WORD: "EMPTY_SELECTED_WORD",

  CHANGE_SORTED_WORD_LIST: 'CHANGE_SORTED_WORD_LIST',

  CHANGE_SEARCHED_WORD_LIST: 'CHANGE_SEARCHED_WORD_LIST',

  TOGGLE_WORD_FORM_ERROR: "TOGGLE_WORD_FORM_ERROR",

  CHANGE_SEARCH_TEXT: "CHANGE_SEARCH_TEXT",

  CHANGE_DISPLAYED_WORD_LIST: 'CHANGE_DISPLAYED_WORD_LIST',

  RESET_STATE: "RESET_STATE",

  START_INITIAL_WORDS_FETCH_REQUEST: "START_INITIAL_WORDS_FETCH_REQUEST",

  FINISH_INITIAL_WORDS_FETCH_REQUEST: "FINISH_INITIAL_WORDS_FETCH_REQUEST",
}


