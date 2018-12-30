/**
 * action type interface 
 **/
interface ISortActionType {
  CHANGE_SORT: string,
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

/**
 * action type
 **/
export const SortActionType: ISortActionType = {
  CHANGE_SORT: "CHANGE_SORT",
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

