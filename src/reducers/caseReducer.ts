import { AnyAction } from 'redux';
import { StateType } from '../state/type';
import { ISelectAllWordActionType } from '../actions/type';
import { initialNormalizedState } from '../state/index';
const xor = require('lodash/xor');
const isEqual = require('lodash/isEqual');
const sortBy = require('lodash/sortBy');
const omit = require('lodash/omit');
const omitBy = require('lodash/omitBy');

/**
 * case reducer
 *  - entities
 *    - defs:
 *      - addDefEntityCaseReducer
 *      - removeDefEntityCaseReducer
 *      - updateDefPosCaseReducer
 *      - updateDefTextCaseReducer
 *      - updateDefImageCaseReducer
 *      - resetDefsCaseReducer
 *    - words:
 *      - addWordEntityCaseReducer
 *      - removeWordEntityCaseReducer
 *      - updateWordNameCaseReducer
 *      - updateWordDefsCaseReducer
 *      - resetWordsCaseReducer
 *  - sortedWordList:
 *      - updateSortedWordListCaseReducer,
 *      - resetSortedWordListCaseReducer,
 *  - displayedWordList:
 *      - changeDisplayedWordListCaseReducer,
 *      - resetDisplayedWordListCaseReducer
 *  - currentSort:
 *      - changeCurrentSortCaseReducer
 *      - resetCurrentSortCaseReducer
 *  - currentFilter:
 *      - changeCurrentFilterCaseRuducer
 *      - resetCurrentFilterCaseRuducer
 *  - searchedWordList:
 *      - changeSearchedWordListCaseReducer
 *      - resetSearchedWordListCaseReducer
 *  - searchKeyWord:
 *      - changeSearchedWordListCaseReducer
 *      - resetSearchKeyWordCaseReducer
 *  - selectedWordList:
 *      - toggleSelectedWordListCaseReducer
 *      - emptySelectedWordListCaseReducer,
 *      - selectAllSelectedWordListCaseReducer
 *      - resetSelectedWordListCaseReducer
 *  - ui
 *    - isSelectWarningModalOpen:
 *      - toggleSelectWarningModalCaseReducer
 *    - isDeleteConfirmModalOpen:
 *      - toggleDeleteConfirmModalCaseReducer
 *    - isSortFilterModalOpen:
 *      - toggleSortFilterModalCaseReducer
 *    - isSearchWordModalOpen:
 *      - toggleSearchWordModalCaseReducer
 **/

export namespace CaseReducer {
  /**
   *  case reducer type
   **/
  export type caseReducerType<T, A = AnyAction> = (state: T, action: A) => T;

  /**
   * case reducers:
   *  - case reducers act like Repository so make it simple as much as possible and avoid any business logic
   *  - if you need some logic, the logic belongs to thunk not here
   *  - this place is to implement simple CUD (not R) operation to state
   **/

  /*********************************************
   * entities.words CaseReducer
   *********************************************/
  export const addWordEntityCaseReducer: caseReducerType<stateType.IEntityWord> = (words, action) => ({
    ...words,
    ...action.nextWord,
  });


  export const removeWordEntityCaseReducer: caseReducerType<stateType.IEntityWord> = (words, action) => omit(words, action.id);


  export const updateWordNameCaseReducer: caseReducerType<stateType.IEntityWord> = (words, action) => ({
    ...words,
    [words[action.id].id]: {
      ...words[action.id],
      name: action.nextWordName,
    }
  });

  // append or pluck def id from word.defs
  export const toggleWordDefsCaseReducer: caseReducerType<stateType.IEntityWord> = (words, action) => {
    // if action.defId exist in state, remove otherwise add it
    return xor(selectedWordList, [ action.defId ]);
  };

  // update (replace) the entire word.defs
  export const updateWordDefsCaseReducer: caseReducerType<stateType.IEntityWord> = (words, action) => ({
    ...words,
    [words[action.id].id]: {
      ...words[action.id],
      defs: action.nextDefIds,
    }
  });
  export const resetWordsCaseReducer: caseReducerType<stateType.IEntityWord> = (words, action) => Object.assign({}, words, initialNormalizedState.entities.words);
  /*********************************************
   * entities.words CaseReducer
   *********************************************/
  export const addWordEntityCaseReducer: caseReducerType<stateType.IEntityWord> = (words, action) => ({
    ...words,
    ...action.nextWord,
  });


  export const removeWordEntityCaseReducer: caseReducerType<stateType.IEntityWord> = (words, action) => omit(words, action.id);


  export const updateWordNameCaseReducer: caseReducerType<stateType.IEntityWord> = (words, action) => ({
    ...words,
    [words[action.id].id]: {
      ...words[action.id],
      name: action.nextWordName,
    }
  });

  // append or pluck def id from word.defs
  export const toggleWordDefsCaseReducer: caseReducerType<stateType.IEntityWord> = (words, action) => {
    // if action.defId exist in state, remove otherwise add it
    return xor(selectedWordList, [ action.defId ]);
  };

  // update (replace) the entire word.defs
  export const updateWordDefsCaseReducer: caseReducerType<stateType.IEntityWord> = (words, action) => ({
    ...words,
    [words[action.id].id]: {
      ...words[action.id],
      defs: action.nextDefIds,
    }
  });

  export const resetWordsCaseReducer: caseReducerType<stateType.IEntityWord> = (words, action) => Object.assign({}, words, initialNormalizedState.entities.words);

  /*********************************************
   * entities.defs CaseReducer
   *********************************************/
  export const addDefEntityCaseReducer: caseReducerType<stateType.IEntityDef> = (defs, action) => ({
    ...defs,
    ...action.nextDef,
  });

  export const removeDefEntityCaseReducer: caseReducerType<stateType.IEntityDef> = (defs, action) => omit(defs, action.defIds);

  export const updateDefPosCaseReducer: caseReducerType<stateType.IEntityDef> = (defs, action) => ({
    ...defs,
    [defs[action.id].id]: {
      ...defs[action.id],
      pos: action.nextPos,
    }
  });


  export const updateDefTextCaseReducer: caseReducerType<stateType.IEntityDef> = (defs, action) => ({
    ...defs,
    [ defs[action.id].id]: {
      ...defs[action.id],
      def: action.nextText,
    }
  });

  export const updateDefImageCaseReducer: caseReducerType<stateType.IEntityDef> = (defs, action) => ({
    ...defs,
    [defs[action.id].id]: {
      ...defs[action.id],
      image: action.nextImage,
    }
  });


  export const resetDefsCaseReducer: caseReducerType<stateType.IEntityDef> = (defs, action) => Object.assign({}, defs, initialNormalizedState.entities.defs);


  /*********************************************
   * currentSort CaseReducer
   *********************************************/
  export const changeCurrentSortCaseReducer: caseReducerType<stateType.ICurrentSort> = (currentSort, action) => action.currentSort;

  export const resetCurrentSortCaseReducer: caseReducerType<stateType.ICurrentSort> = (currentSort, action) => initialNormalizedState.currentSort;


  /*********************************************
   * currentFilter CaseReducer
   *********************************************/
  export const changeCurrentFilterCaseReducer: caseReducerType<stateType.ICurrentFilter> = (currentFilter, action) => action.currentFilter;

  export const resetCurrentFilterCaseReducer: caseReducerType<stateType.ICurrentFilter> = (currentFilter, action) => initialNormalizedState.currentFilter;



  /*********************************************
   * selectedWordList CaseReducer
   *********************************************/
  // add word id to selectedWordList
  export const toggleSelectedWordListCaseReducer: caseReducerType<stateType.ISelectedWordList> = (selectedWordList, action) => {
    // if action.selectedWordId exist in state, remove otherwise add it
    return xor(selectedWordList, [ action.nextWordId ]);
  };
  // empty selectedWordList (SelectAll controller item)
  export const emptySelectedWordListCaseReducer: caseReducerType<stateType.ISelectedWordList> = (selectedWordList, action) => [];

  // select all available word item (assign sortedWordList values to selectedWordList)
  export const selectAllSelectedWordListCaseReducer: caseReducerType<stateType.ISelectedWordList, stateType.ISelectAllWordActionType> = (selectedWordList, action) => [ ...action.nextSelectedWordList ];

  export const resetSelectedWordListCaseReducer: caseReducerType<stateType.ISelectedWordList> = (selectedWordList, action) => initialNormalizedState.selectedWordList;

  /*********************************************
   * sortedWordList CaseReducer
   *********************************************/
  // update ( replace ) the entire sortedWordList
  export const changeSortedWordListCaseReducer: caseReducerType<stateType.ISortedWordList> = (sortedWordList, action) => action.nextSortedWordList;

  export const resetSortedWordListCaseReducer: caseReducerType<stateType.ISortedWordList> = (sortedWordList, action) => initialNormalizedState.sortedWordList;

  /*********************************************
   * displayedWordList CaseReducer
   *********************************************/
  // change DisplayedWordList to sortedWordList or searchedWordList (nextDisplayedWordList)
  export const changeDisplayedWordListCaseReducer: caseReducerType<stateType.IDisplayedWordList> = (displayedWordList, action) => action.nextDisplayedWordList;

  export const resetDisplayedWordListCaseReducer: caseReducerType<stateType.IDisplayedWordList> = (displayedWordList, action) => initialNormalizedState.displayedWordList;


  /*********************************************
   * searchedWordList CaseReducer
   *********************************************/
  export const changeSearchedWordListCaseReducer: caseReducerType<stateType.ISearchedWordList> = (searchedWordList, action) => action.nextSearchedWordList;

  export const resetSearchedWordListCaseReducer: caseReducerType<stateType.ISearchedWordList> = (searchedWordList, action) => initialNormalizedState.searchedWordList;

  /*********************************************
   * searchKeyWord CaseReducer
   *********************************************/
  export const changeSearchKeyWordCaseReducer: caseReducerType<stateType.ISearchKeyWord> = (searchKeyWord, action) => action.nextSearchKey;

  export const resetSearchKeyWordCaseReducer: caseReducerType<stateType.ISearchKeyWord> = (searchKeyWord, action) => initialNormalizedState.searchKeyWord;

  /*********************************************
   * ui CaseReducer
   *********************************************/
  export const toggleSelectWarningModalCaseReducer: caseReducerType<stateType.IUi> = (ui, action) => Object.assign({}, ui, { isSelectWarningModalOpen: action.sortedWordList });;

  export const toggleDeleteConfirmModalCaseReducer: caseReducerType<stateType.IUi> = (ui, action) => Object.assign({}, ui, { isDeleteConfirmModalOpen: action.isDeleteConfirmModalOpen });

  export const toggleSortFilterModalCaseReducer: caseReducerType<stateType.IUi> = (ui, action) => Object.assign({}, ui, { isSortFilterModalOpen: action.isSortFilterModalOpen });

  export const toggleSearchWordModalCaseReducer: caseReducerType<stateType.IUi> = (ui, action) => Object.assign({}, ui, { isSearchWordModalOpen: action.isSearchWordModalOpen });

  export const resetUiCaseReducer: caseReducerType<stateType.IUi> = (ui, action) => Object.assign({}, ui, initialNormalizedState.ui);
} 
