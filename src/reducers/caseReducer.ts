import { AnyAction } from 'redux';
import { caseReducer } from './caseReducer';
import { IEntityWord, IEntityDef, ISortedWordList, ICurrentSort, ICurrentFilter, IUi } from '../state/type'; 
/**
 *  case reducer type
 **/
export type caseReducer<T> = (state: T, action: AnyAction) => T;

/**
 * case reducers
 **/
export const addNewDefsByWordActionReducer: caseReducer<IEntityDef> = (defs, action) => ({
  ...defs,
  ...action.entities.defs,
});

export const removeDefsByWordActionReducer: caseReducer<IEntityDef> = (defs, action) => {
  const copy = JSON.parse(JSON.stringify(defs)); 
  // find properties whose _wordId is action.id and put those into array
  Object.keys(copy).map(( key ) => { 
    copy[key]._wordId === action.id ? delete copy[key] : ''; 
  });
  return copy;
}

export const updateDefsByWordActionReducer: caseReducer<IEntityDef> = (defs, action) => {
  return Object.assign({}, defs, action.entities.defs);
};

export const removeDefsByDefActionReducer: caseReducer<IEntityDef> = (defs, action) => {
  const copy = JSON.parse(JSON.stringify(defs)); 
  delete copy[action.id];
  return copy;
}

export const addNewWordByWordActionReducer: caseReducer<IEntityWord> = (words, action) => ({
  ...words,
  ...action.entities.words,
});

export const removeWordByWordActionReducer: caseReducer<IEntityWord> = (words, action) => {
  const copy = JSON.parse(JSON.stringify(words)); 
  delete copy[action.id];
  return copy;
}

export const updateWordByWordActionReducer: caseReducer<IEntityWord> = (words, action) => {
  return Object.assign({}, words, action.entities.words);
};

export const appendNewDefsToWordByDefActionReducer: caseReducer<IEntityWord> = (words, action) => {
  const copy = JSON.parse(JSON.stringify(words));
  const targetWordId = action.entities.defs[Object.getOwnPropertyNames(action.entities.defs)[0]]._wordId;
  // object keys function return string element of array so need to use map(Number) to convert those to number
  copy[targetWordId].defs = copy[targetWordId].defs.concat(Object.keys(action.entities.defs).map(Number));
  return copy;
}

export const removeDefsFromWordByDefActionReducer: caseReducer<IEntityWord> = (words, action) => {
  const copy = JSON.parse(JSON.stringify(words));
  const targetIndex = copy[action._wordId].defs.indexOf(action.id);
  copy[action._wordId].defs.splice(targetIndex, 1);
  return copy;
}

export const currentSortCaseReducer: caseReducer<ICurrentSort> = (currentSort, action) => action.currentSort;

export const sortedWordListCaseReducer: caseReducer<ISortedWordList> = (sortedWordList, action) => action.sortedWordList;

export const currentFilterCaseReducer: caseReducer<ICurrentFilter> = (currentFilter, action) => action.currentFilter;

export const toggleSelectWarningModalReducer: caseReducer<IUi> = (ui, action) => Object.assign({}, ui, { isSelectWarningModalOpen: action.isSelectWarningModalOpen });;

export const toggleDeleteConfirmModalReducer: caseReducer<IUi> = (ui, action) => Object.assign({}, ui, { isDeleteConfirmModalOpen: action.isDeleteConfirmModalOpen });

export const toggleSortFilterModalReducer: caseReducer<IUi> = (ui, action) => Object.assign({}, ui, { isSortFilterModalOpen: action.isSortFilterModalOpen });

export const toggleSearchWordModalReducer: caseReducer<IUi> = (ui, action) => Object.assign({}, ui, { isSearchWordModalOpen: action.isSearchWordModalOpen });
