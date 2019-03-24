/*****************************************
 * action creator and action
 ****************************************/
/**
 * action type's type interface
 **/
export interface IActionType {
    BULK_UPDATE_WORD: string;
    REMOVE_WORD: string;
    CHANGE_SORT: string;
    CHANGE_FILTER: string;
    RESET_SORT_FILTER: string;
    TOGGLE_LOGIN_STATE: string;
    TOGGLE_SELECT_WARNING_MODAL: string;
    TOGGLE_DELETE_CONFIRM_MODAL: string;
    TOGGLE_SORT_FILTER_MODAL: string;
    TOGGLE_SEARCH_WORD_MODAL: string;
    TOGGLE_DEFINE_WARNING_MODAL: string;
    TOGGLE_SIGNUP_MODAL: string;
    TOGGLE_LOGIN_MODAL: string;
    TOGGLE_ERROR_FLASHMESSAGE: string;
    TOGGLE_SELECT_WORD: string;
    SELECT_ALL_WORD: string;
    EMPTY_SELECTED_WORD: string;
    CHANGE_SORTED_WORD_LIST: string;
    CHANGE_SEARCHED_WORD_LIST: string;
    CHANGE_DISPLAYED_WORD_LIST: string;
    TOGGLE_WORD_FORM_ERROR: string;
    CHANGE_SEARCH_TEXT: string;
    RESET_STATE: string;
    START_INITIAL_WORDS_FETCH_REQUEST: string;
    FINISH_INITIAL_WORDS_FETCH_REQUEST: string;
}
/**
 * action type
 **/
export declare const ActionType: IActionType;
