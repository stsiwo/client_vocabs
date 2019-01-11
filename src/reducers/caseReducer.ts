import { AnyAction } from 'redux';
import { caseReducer } from './caseReducer';
import { IEntityWord, IEntityDef, ISortedWordList, ICurrentSort, ICurrentFilter, IUi, ISelectedWordList, ISearchKeyWord, ISearchedWordList, IDisplayedWordList } from '../state/type'; 
import { ISelectAllWordActionType } from '../actions/type';
import { initialNormalizedState } from '../state/index';
const xor = require('lodash/xor');
const isEqual = require('lodash/isEqual');
const sortBy = require('lodash/sortBy');
/**
 *  case reducer type
 **/
export type caseReducer<T, A = AnyAction> = (state: T, action: A) => T;

/**
 * case reducers
 **/
export const addDefEntityCaseReducer: caseReducer<IEntityDef> = (defs, action) => ({
  ...defs,
  ...action.nextDef,
});

export const removeDefEntityCaseReducer: caseReducer<IEntityDef> = (defs, action) => ({
  ...defs,
  ...action.nextDef,
});

export const updateDefEntityCaseReducer: caseReducer<IEntityDef> = (defs, action) => ({
  ...defs,
  ...action.nextDef,
});

//export const removeDefsByWordActionReducer: caseReducer<IEntityDef> = (defs, action) => {
  //const copy = JSON.parse(JSON.stringify(defs)); 
  //// find properties whose _wordId is action.id and put those into array
  //Object.keys(copy).map(( key ) => { 
    //copy[key]._wordId === action.id ? delete copy[key] : ''; 
  //});
  //return copy;
//}

//export const updateDefsByWordActionReducer: caseReducer<IEntityDef> = (defs, action) => {
  //return Object.assign({}, defs, action.entities.defs);
//};

//export const removeDefsByDefActionReducer: caseReducer<IEntityDef> = (defs, action) => {
  //const copy = JSON.parse(JSON.stringify(defs)); 
  //delete copy[action.id];
  //return copy;
//}

export const resetDefsCaseReducer: caseReducer<IEntityDef> = (defs, action) => Object.assign({}, defs, initialNormalizedState.entities.defs); 

export const addWordEntityCaseReducer: caseReducer<IEntityWord> = (words, action) => ({
  ...words,
  ...action.nextWord,
});

export const removeWordEntityCaseReducer: caseReducer<IEntityWord> = (words, action) => ({
  ...words,
  ...action.nextWord,
});

export const updateWordEntityCaseReducer: caseReducer<IEntityWord> = (words, action) => ({
  ...words,
  ...action.nextWord,
});
//export const removeWordByWordActionReducer: caseReducer<IEntityWord> = (words, action) => {
  //const copy = JSON.parse(JSON.stringify(words)); 
  //delete copy[action.id];
  //return copy;
//}

//export const updateWordByWordActionReducer: caseReducer<IEntityWord> = (words, action) => {
  //return Object.assign({}, words, action.entities.words);
//};

//export const appendNewDefsToWordByDefActionReducer: caseReducer<IEntityWord> = (words, action) => {
  //const copy = JSON.parse(JSON.stringify(words));
  //const targetWordId = action.entities.defs[Object.getOwnPropertyNames(action.entities.defs)[0]]._wordId;
  //// object keys function return string element of array so need to use map(Number) to convert those to number
  //copy[targetWordId].defs = copy[targetWordId].defs.concat(Object.keys(action.entities.defs).map(Number));
  //return copy;
//}

//export const removeDefsFromWordByDefActionReducer: caseReducer<IEntityWord> = (words, action) => {
  //const copy = JSON.parse(JSON.stringify(words));
  //const targetIndex = copy[action._wordId].defs.indexOf(action.id);
  //copy[action._wordId].defs.splice(targetIndex, 1);
  //return copy;
//}

export const resetWordsCaseReducer: caseReducer<IEntityWord> = (words, action) => Object.assign({}, words, initialNormalizedState.entities.words); 

export const currentSortCaseReducer: caseReducer<ICurrentSort> = (currentSort, action) => action.currentSort;

export const resetCurrentSortCaseReducer: caseReducer<ICurrentSort> = (currentSort, action) => initialNormalizedState.currentSort;

export const sortedWordListCaseReducer: caseReducer<ISortedWordList> = (sortedWordList, action) => action.nextSortedWordList;

export const searchedWordListCaseReducer: caseReducer<ISearchedWordList> = (searchedWordList, action) => action.nextSearchedWordList;

export const displayedWordListCaseReducer: caseReducer<IDisplayedWordList> = (displayedWordList, action) => action.nextDisplayedWordList;

export const resetSortedWordListCaseReducer: caseReducer<ISortedWordList> = (sortedWordList, action) => initialNormalizedState.sortedWordList;

// inidividual click event of word name
export const toggleSelectedWordListCaseReducer: caseReducer<ISelectedWordList> = (selectedWordList, action) => {
  // if action.selectedWordId exist in state, remove otherwise add it
  return xor(selectedWordList, action.nextSelectedWordList);
};

// add new word to selectedWordList esp when adding new word form
export const addSelectedWordListCaseReducer: caseReducer<ISelectedWordList> = (selectedWordList, action) => selectedWordList.concat(action.nextSelectedWordList); 

// select all icon click event
export const selectAllSelectedWordListCaseReducer: caseReducer<ISelectedWordList, ISelectAllWordActionType> = (selectedWordList, action) => {
  // there are 3 cases to consider (action.nextSelectedWordList is always return sortedWordList array):
  // 1. state.selectedWordList is empty
  // 2. state.selectedWordList contains some value
  // 3. state.selectedWordList is selected all ( = action.nextSelectedWordList)
  // case A: 1.) and 2.) => must return action.nextSelectedWordList as it is
  // case B: 3.) => must return empty array
  if (!isEqual(sortBy(selectedWordList), sortBy(action.nextSelectedWordList))) {
    // case A:
    return [ ...action.nextSelectedWordList ];
  } else {
    // case B:
    return []; 
  }
}

export const resetSelectedWordListCaseReducer: caseReducer<ISelectedWordList> = (selectedWordList, action) => initialNormalizedState.selectedWordList; 

export const currentFilterCaseReducer: caseReducer<ICurrentFilter> = (currentFilter, action) => action.currentFilter;

export const resetCurrentFilterCaseReducer: caseReducer<ICurrentFilter> = (currentFilter, action) => initialNormalizedState.currentFilter;

export const toggleSelectWarningModalReducer: caseReducer<IUi> = (ui, action) => Object.assign({}, ui, { isSelectWarningModalOpen: action.isSelectWarningModalOpen });;

export const toggleDeleteConfirmModalReducer: caseReducer<IUi> = (ui, action) => Object.assign({}, ui, { isDeleteConfirmModalOpen: action.isDeleteConfirmModalOpen });

export const toggleSortFilterModalReducer: caseReducer<IUi> = (ui, action) => Object.assign({}, ui, { isSortFilterModalOpen: action.isSortFilterModalOpen });

export const toggleSearchWordModalReducer: caseReducer<IUi> = (ui, action) => Object.assign({}, ui, { isSearchWordModalOpen: action.isSearchWordModalOpen });

export const resetUiCaseReducer: caseReducer<IUi> = (ui, action) => Object.assign({}, ui, initialNormalizedState.ui);

export const searchKeyWordCaseReducer: caseReducer<ISearchKeyWord> = (searchKeyWord, action) => action.nextSearchKey; 
