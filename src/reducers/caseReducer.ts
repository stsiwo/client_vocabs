import { AnyAction } from 'redux';
import { caseReducer } from './caseReducer';
import { IEntityWord, IEntityDef, ISortedWordList, ICurrentSort, ICurrentFilter, IUi, ISelectedWordList, ISearchKeyWord, ISearchedWordList, IDisplayedWordList } from '../state/type'; 
import { ISelectAllWordActionType } from '../actions/type';
import { initialNormalizedState } from '../state/index';
const xor = require('lodash/xor');
const isEqual = require('lodash/isEqual');
const sortBy = require('lodash/sortBy');
const omit = require('lodash/omit');
const omitBy = require('lodash/omitBy');

/**
 *  case reducer type
 **/
export type caseReducer<T, A = AnyAction> = (state: T, action: A) => T;

/**
 * case reducers
 **/
// defs entity
export const addDefEntityCaseReducer: caseReducer<IEntityDef> = (defs, action) => ({
  ...defs,
  ...action.nextDef,
});

export const removeDefEntityCaseReducer: caseReducer<IEntityDef> = (defs, action) => omit(defs, action.defId); 
 
// remove defs of a particular word when the word is remvoed
export const removeDefsCaseReducer: caseReducer<IEntityDef> = (defs, action) => omitBy(defs, ( property: IEntityDef ) => property._wordId === action.id); 

export const updateDefPosCaseReducer: caseReducer<IEntityDef> = (defs, action) => ({
  ...defs,
  [defs[action.id].id]: {
    ...defs[action.id],
    pos: action.nextPos,
  }
});


export const updateDefTextCaseReducer: caseReducer<IEntityDef> = (defs, action) => ({
  ...defs,
  [ defs[action.id].id]: {
    ...defs[action.id],
    def: action.nextText,
  }
});

export const updateDefImageCaseReducer: caseReducer<IEntityDef> = (defs, action) => ({
  ...defs,
  [defs[action.id].id]: {
    ...defs[action.id],
    image: action.nextImage,
  }
});


export const resetDefsCaseReducer: caseReducer<IEntityDef> = (defs, action) => Object.assign({}, defs, initialNormalizedState.entities.defs); 

// words entity
export const addWordEntityCaseReducer: caseReducer<IEntityWord> = (words, action) => ({
  ...words,
  ...action.nextWord,
});

// modify word.defs property to add new def when add new def icon is clicked
export const addDefCaseReducer: caseReducer<IEntityWord> = (words, action) => {
  const defId = Object.keys(action.nextDef)[0];
  const def = action.nextDef[defId];
  const wordId = def._wordId;
  
  return {
    ...words,
    [wordId]: {
      ...words[wordId],
      defs: words[wordId].defs.concat([ def.id ]),
    }
  }
}


export const removeWordEntityCaseReducer: caseReducer<IEntityWord> = (words, action) => omit(words, action.id); 


export const updateWordNameCaseReducer: caseReducer<IEntityWord> = (words, action) => ({
  ...words,
  [words[action.id].id]: {
    ...words[action.id],
    name: action.nextWordName,
  }
});

export const resetWordsCaseReducer: caseReducer<IEntityWord> = (words, action) => Object.assign({}, words, initialNormalizedState.entities.words); 

  // remove target def id from defs property of word entitiy when def is removed
export const removeDefCaseReducer: caseReducer<IEntityWord> = (words, action) => ({
  ...words, 
  [words[action.wordId].id]: {
    ...words[action.wordId],
    defs: words[action.wordId].defs.filter(( def ) => def !== action.defId) 
  }
});

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
