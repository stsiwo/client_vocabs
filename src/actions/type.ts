/**
 * action type interface 
 **/
interface ISortActionType {
  CHANGE_SORT: string,
}

interface IFilterActionType {
  CHANGE_FILTER: string,
}

export interface IWordActionType {
  ADD_NEW_WORD: string;
  REMOVE_WORD: string;
  UPDATE_WORD: string;
}

export interface IDefActionType {
  ADD_NEW_DEF: string;
  REMOVE_DEF: string;
  UPDATE_DEF: string;
}

interface IUiActionType {
  TOGGLE_SELECT_WARNING_MODAL: string;
  TOGGLE_DELETE_CONFIRM_MODAL: string;
  TOGGLE_SORT_FILTER_MODAL: string;
  TOGGLE_SEARCH_WORD_MODAL: string;
}

interface ISelectedWordListActionType {
  TOGGLE_SELECT_WORD: string;
  SELECT_ALL_WORD: string;
}

interface ISearchedWordListActionType {
  CHANGE_SEARCHED_WORD_LIST: string;
}

interface IResetActionType {
  RESET_STATE: string;
}

interface ISearchKeyWordActionType {
  CHANGE_SEARCH_TEXT: string;
}

interface ISortedWordListActionType {
  CHANGE_SORTED_WORD_LIST: string;
}

interface IDisplayedWordListActionType {
  CHANGE_DISPLAYED_WORD_LIST: string;
}
/**
 * action type
 **/
export const SortActionType: ISortActionType = {
  CHANGE_SORT: "CHANGE_SORT",
}

export const FilterActionType: IFilterActionType = {
  CHANGE_FILTER: "CHANGE_FILTER",
}

export const WordActionType: IWordActionType = {
  ADD_NEW_WORD: "ADD_NEW_WORD",
  REMOVE_WORD: "REMOVE_WORD",
  UPDATE_WORD: "UPDATE_WORD",
}

export const DefActionType: IDefActionType = {
  ADD_NEW_DEF: "ADD_NEW_DEF",
  REMOVE_DEF: "REMOVE_DEF",
  UPDATE_DEF: "UPDATE_DEF",
}

export const UiActionType: IUiActionType = {
  TOGGLE_SELECT_WARNING_MODAL: "TOGGLE_SELECT_WARNING_MODAL",
  TOGGLE_DELETE_CONFIRM_MODAL: "TOGGLE_DELETE_CONFIRM_MODAL",
  TOGGLE_SORT_FILTER_MODAL: "TOGGLE_SORT_FILTER_MODAL",
  TOGGLE_SEARCH_WORD_MODAL: "TOGGLE_SEARCH_WORD_MODAL",
}

export const SortedWordListActionType: ISortedWordListActionType = {
  CHANGE_SORTED_WORD_LIST: 'CHANGE_SORTED_WORD_LIST',
}

export const SelectedWordListActionType: ISelectedWordListActionType = {
  TOGGLE_SELECT_WORD: "TOGGLE_SELECT_WORD",
  SELECT_ALL_WORD: "SELECT_ALL_WORD",
}

export const ResetActionType: IResetActionType = {
  RESET_STATE: "RESET_STATE",
}

export const SearchKeyWordActionType: ISearchKeyWordActionType = {
  CHANGE_SEARCH_TEXT: "CHANGE_SEARCH_TEXT",
}

export const SearchedWordListActionType: ISearchedWordListActionType = {
  CHANGE_SEARCHED_WORD_LIST: 'CHANGE_SEARCHED_WORD_LIST',
}


export const DisplayedWordListActionType: IDisplayedWordListActionType = {
  CHANGE_DISPLAYED_WORD_LIST: 'CHANGE_DISPLAYED_WORD_LIST',
}

/**
 * each action type 
 **/
export interface ISelectAllWordActionType {
  type: string;
  nextSelectedWordList: number[];
}

export interface IChangeSortedWordListAction {
  type: string;
  nextSortedWordList: number[];
}
