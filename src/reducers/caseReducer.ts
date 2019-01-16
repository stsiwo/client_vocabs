import { AnyAction } from 'redux';
import { StateType } from '../state/type';
import { initialNormalizedState } from '../state/index';
const xor = require('lodash/xor');
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
 *      - changeSearchKeyWordCaseReducer
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
  export type CaseReducerType<T, A = AnyAction> = (state: T, action: A) => T;

  /**
   * case reducers:
   *  - case reducers act like Repository so make it simple as much as possible and avoid any business logic
   *  - if you need some logic, the logic belongs to thunk not here
   *  - this place is to implement simple CUD (not R) operation to state
   **/

  /*********************************************
   * entities.words CaseReducer
   *********************************************/
  export const addWordEntityCaseReducer: CaseReducerType<StateType.IEntityWord> = (words, action) => ({
    ...words,
    ...action.nextWord,
  });


  export const removeWordEntityCaseReducer: CaseReducerType<StateType.IEntityWord> = (words, action) => omit(words, action.wordId);


  export const updateWordNameCaseReducer: CaseReducerType<StateType.IEntityWord> = (words, action) => ({
    ...words,
    [words[action.id].id]: {
      ...words[action.id],
      name: action.nextWordName,
    }
  });

  // append or pluck def id from word.defs
  export const toggleWordDefsCaseReducer: CaseReducerType<StateType.IEntityWord> = (words, action) => {
    // if action.defId exist in state, remove otherwise add it
    return {
      ...words,
      [action.wordId]: {
        ...words[action.wordId],
        defs: xor(words[action.wordId].defs, action.defIds ),  
      }
    }
  };

  // update (replace) the entire word.defs
  export const updateWordDefsCaseReducer: CaseReducerType<StateType.IEntityWord> = (words, action) => ({
    ...words,
    [words[action.id].id]: {
      ...words[action.id],
      defs: action.nextDefIds,
    }
  });

  export const resetWordsCaseReducer: CaseReducerType<StateType.IEntityWord> = (words, action) => Object.assign({}, words, initialNormalizedState.entities.words);

  /*********************************************
   * entities.defs CaseReducer
   *********************************************/
  export const addDefEntityCaseReducer: CaseReducerType<StateType.IEntityDef> = (defs, action) => ({
    ...defs,
    ...action.nextDef,
  });

  export const removeDefEntityCaseReducer: CaseReducerType<StateType.IEntityDef> = (defs, action) => omit(defs, action.defIds);

  export const removeDefEntitiesCaseReducer: CaseReducerType<StateType.IEntityDef> = (defs, action) => omitBy(defs, ( def: StateType.IEntityDef ) => def._wordId === action.wordId);

  export const updateDefPosCaseReducer: CaseReducerType<StateType.IEntityDef> = (defs, action) => ({
    ...defs,
    [defs[action.id].id]: {
      ...defs[action.id],
      pos: action.nextPos,
    }
  });


  export const updateDefTextCaseReducer: CaseReducerType<StateType.IEntityDef> = (defs, action) => ({
    ...defs,
    [ defs[action.id].id]: {
      ...defs[action.id],
      def: action.nextText,
    }
  });

  export const updateDefImageCaseReducer: CaseReducerType<StateType.IEntityDef> = (defs, action) => ({
    ...defs,
    [defs[action.id].id]: {
      ...defs[action.id],
      image: action.nextImage,
    }
  });


  export const resetDefsCaseReducer: CaseReducerType<StateType.IEntityDef> = (defs, action) => Object.assign({}, defs, initialNormalizedState.entities.defs);


  /*********************************************
   * currentSort CaseReducer
   *********************************************/
  export const changeCurrentSortCaseReducer: CaseReducerType<StateType.ICurrentSort> = (currentSort, action) => action.currentSort;

  export const resetCurrentSortCaseReducer: CaseReducerType<StateType.ICurrentSort> = (currentSort, action) => initialNormalizedState.currentSort;


  /*********************************************
   * currentFilter CaseReducer
   *********************************************/
  export const changeCurrentFilterCaseReducer: CaseReducerType<StateType.ICurrentFilter> = (currentFilter, action) => action.currentFilter;

  export const resetCurrentFilterCaseReducer: CaseReducerType<StateType.ICurrentFilter> = (currentFilter, action) => initialNormalizedState.currentFilter;



  /*********************************************
   * selectedWordList CaseReducer
   *********************************************/
  // add word id to selectedWordList
  export const toggleSelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList> = (selectedWordList, action) => {
    // if action.selectedWordId exist in state, remove otherwise add it
    return xor(selectedWordList, [ action.nextWordId ]);
  };
  // empty selectedWordList (SelectAll controller item)
  export const emptySelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList> = (selectedWordList, action) => [];

  // select all available word item (assign sortedWordList values to selectedWordList)
  export const selectAllSelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList> = (selectedWordList, action) => [ ...action.nextSelectedWordList ];

  export const resetSelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList> = (selectedWordList, action) => initialNormalizedState.selectedWordList;

  /*********************************************
   * sortedWordList CaseReducer
   *********************************************/
  // update ( replace ) the entire sortedWordList
  export const changeSortedWordListCaseReducer: CaseReducerType<StateType.ISortedWordList> = (sortedWordList, action) => action.nextSortedWordList;

  export const resetSortedWordListCaseReducer: CaseReducerType<StateType.ISortedWordList> = (sortedWordList, action) => initialNormalizedState.sortedWordList;

  /*********************************************
   * displayedWordList CaseReducer
   *********************************************/
  // change DisplayedWordList to sortedWordList or searchedWordList (nextDisplayedWordList)
  export const changeDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList> = (displayedWordList, action) => action.nextDisplayedWordList;

  export const resetDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList> = (displayedWordList, action) => initialNormalizedState.displayedWordList;


  /*********************************************
   * searchedWordList CaseReducer
   *********************************************/
  export const changeSearchedWordListCaseReducer: CaseReducerType<StateType.ISearchedWordList> = (searchedWordList, action) => action.nextSearchedWordList;

  export const resetSearchedWordListCaseReducer: CaseReducerType<StateType.ISearchedWordList> = (searchedWordList, action) => initialNormalizedState.searchedWordList;

  /*********************************************
   * searchKeyWord CaseReducer
   *********************************************/
  export const changeSearchKeyWordCaseReducer: CaseReducerType<StateType.ISearchKeyWord> = (searchKeyWord, action) => action.nextSearchKey;

  export const resetSearchKeyWordCaseReducer: CaseReducerType<StateType.ISearchKeyWord> = (searchKeyWord, action) => initialNormalizedState.searchKeyWord;

  /*********************************************
   * ui CaseReducer
   *********************************************/
  export const toggleSelectWarningModalCaseReducer: CaseReducerType<StateType.IUi> = (ui, action) => Object.assign({}, ui, { isSelectWarningModalOpen: action.isSelectWarningModalOpen });;

  export const toggleDeleteConfirmModalCaseReducer: CaseReducerType<StateType.IUi> = (ui, action) => Object.assign({}, ui, { isDeleteConfirmModalOpen: action.isDeleteConfirmModalOpen });

  export const toggleSortFilterModalCaseReducer: CaseReducerType<StateType.IUi> = (ui, action) => Object.assign({}, ui, { isSortFilterModalOpen: action.isSortFilterModalOpen });

  export const toggleSearchWordModalCaseReducer: CaseReducerType<StateType.IUi> = (ui, action) => Object.assign({}, ui, { isSearchWordModalOpen: action.isSearchWordModalOpen });

  export const resetUiCaseReducer: CaseReducerType<StateType.IUi> = (ui, action) => Object.assign({}, ui, initialNormalizedState.ui);
} 
