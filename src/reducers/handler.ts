import { IWordActionType, WordActionType, DefActionType, SortActionType } from '../actions/type';
import { caseReducer } from './caseReducer';
import { 
  addNewDefsByWordActionReducer, 
  removeDefsByWordActionReducer, 
  updateDefsByWordActionReducer, 
  removeDefsByDefActionReducer, 
  addNewWordByWordActionReducer, 
  removeWordByWordActionReducer, 
  updateWordByWordActionReducer, 
  appendNewDefsToWordByDefActionReducer, 
  removeDefsFromWordByDefActionReducer, 
  currentSortCaseReducer, 
  sortedWordListCaseReducer 
} from './caseReducer';
import { IEntityDef, IEntityWord, ICurrentSort, ISortedWordList } from '../state';
/**
 * Hander type
 * must match property name with action type of a domain
 * and value name with the name of the slice reducer function
 **/
export type Handler<T> = {
  [P in keyof IWordActionType]?: caseReducer<T>;
}

export const defsHandler: Handler<IEntityDef> = {
  [WordActionType.ADD_NEW_WORD]: addNewDefsByWordActionReducer,
  [WordActionType.REMOVE_WORD]: removeDefsByWordActionReducer,
  [WordActionType.UPDATE_WORD]: updateDefsByWordActionReducer,
  [DefActionType.ADD_NEW_DEF]: addNewDefsByWordActionReducer,
  [DefActionType.REMOVE_DEF]: removeDefsByDefActionReducer, // can't use removeDefsByWordActionReducer
  [DefActionType.UPDATE_DEF]: updateDefsByWordActionReducer,
}   

export const wordsHandler: Handler<IEntityWord> = {
  [WordActionType.ADD_NEW_WORD]: addNewWordByWordActionReducer,
  [WordActionType.REMOVE_WORD]: removeWordByWordActionReducer,
  [WordActionType.UPDATE_WORD]: updateWordByWordActionReducer,
  [DefActionType.ADD_NEW_DEF]: appendNewDefsToWordByDefActionReducer,
  [DefActionType.REMOVE_DEF]: removeDefsFromWordByDefActionReducer,
  // update does not relating word entity since id hasn't change at all
  //[DefActionType.UPDATE_DEF]: updateDefsOfWordByDefActionReducer,
}   

export const currentSortHandler: Handler<ICurrentSort> = {
  [SortActionType.CHANGE_SORT]: currentSortCaseReducer,
}

export const sortedWordListHandler: Handler<ISortedWordList> = {
  [SortActionType.CHANGE_SORT]: sortedWordListCaseReducer,
}
