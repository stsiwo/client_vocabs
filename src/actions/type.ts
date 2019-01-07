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

export const SelectedWordListActionType: ISelectedWordListActionType = {
  TOGGLE_SELECT_WORD: "TOGGLE_SELECT_WORD",
}

