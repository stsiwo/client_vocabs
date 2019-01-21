import { Action } from 'redux';
import { StateType } from '../state/type';
import { initialNormalizedState } from '../state/index';
import { IAction } from '../actions/index';
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
  export type CaseReducerType<T, A = Action> = (state: T, action: A) => T;

  /**
   * case reducers:
   *  - case reducers act like Repository so make it simple as much as possible and avoid any business logic
   *  - if you need some logic, the logic belongs to thunk not here
   *  - this place is to implement simple CUD (not R) operation to state
   **/

  /*********************************************
   * entities.words CaseReducer
   *********************************************/
  export const addWordEntityCaseReducer: CaseReducerType<StateType.IEntityWord, IAction.IAddNewWordAction> = (words, action) => ({
    ...words,
    ...action.word,
  });


  export const removeWordEntityCaseReducer: CaseReducerType<StateType.IEntityWord, IAction.IRemoveWordAction> = (words, action) => omit(words, action.wordId);


  export const updateWordNameCaseReducer: CaseReducerType<StateType.IEntityWord, IAction.IUpdateWordNameAction> = (words, action) => ({
    ...words,
    [words[action.wordId].id]: {
      ...words[action.wordId],
      name: action.wordName,
    }
  });

  // append or pluck def id from word.defs
  export const toggleWordDefsCaseReducer: CaseReducerType<StateType.IEntityWord, IAction.IAddNewDefAction | IAction.IRemoveDefAction> = (words, action) => {
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
  //export const updateWordDefsCaseReducer: CaseReducerType<StateType.IEntityWord> = (words, action) => ({
    //...words,
    //[words[action.wordId].wordId]: {
      //...words[action.wordId],
      //defs: action.nextDefIds,
    //}
  //});

  export const resetWordsCaseReducer: CaseReducerType<StateType.IEntityWord, IAction.IResetStateAction> = (words, action) => Object.assign({}, words, initialNormalizedState.entities.words);

  /*********************************************
   * entities.defs CaseReducer
   *********************************************/
  export const addDefEntityCaseReducer: CaseReducerType<StateType.IEntityDef, IAction.IAddNewWordAction | IAction.IAddNewDefAction> = (defs, action) => ({
    ...defs,
    ...action.def,
  });

  export const removeDefEntityCaseReducer: CaseReducerType<StateType.IEntityDef, IAction.IRemoveDefAction> = (defs, action) => omit(defs, action.defIds);

  /***************
   * TS2367: This condition will always return 'false' since the types 'IDef' and 'string' have no overlap.
   *  - this is bug?? obviously comparing string of def._wordId and action.wordId
   *  - it is definitely bug.
   *  - solved:  use string() function to make it string
   ***************/
  export const removeDefEntitiesCaseReducer: CaseReducerType<StateType.IEntityDef, IAction.IRemoveWordAction> = (defs, action) => omitBy(defs, ( def: StateType.IEntityDef ) => String(def._wordId) === action.wordId);

  export const updateDefPosCaseReducer: CaseReducerType<StateType.IEntityDef, IAction.IUpdateDefPosAction> = (defs, action) => ({
    ...defs,
    [defs[action.defId].id]: {
      ...defs[action.defId],
      pos: action.defPos,
    }
  });


  export const updateDefTextCaseReducer: CaseReducerType<StateType.IEntityDef, IAction.IUpdateDefTextAction> = (defs, action) => ({
    ...defs,
    [ defs[action.defId].id]: {
      ...defs[action.defId],
      def: action.defText,
    }
  });

  export const updateDefImageCaseReducer: CaseReducerType<StateType.IEntityDef, IAction.IUpdateDefImageAction> = (defs, action) => ({
    ...defs,
    [defs[action.defId].id]: {
      ...defs[action.defId],
      image: action.defImage,
    }
  });


  export const resetDefsCaseReducer: CaseReducerType<StateType.IEntityDef, IAction.IResetStateAction> = (defs, action) => Object.assign({}, defs, initialNormalizedState.entities.defs);


  /*********************************************
   * currentSort CaseReducer
   *********************************************/
  export const changeCurrentSortCaseReducer: CaseReducerType<StateType.ICurrentSort, IAction.IChangeSortAction> = (currentSort, action) => action.currentSort;

  export const resetCurrentSortCaseReducer: CaseReducerType<StateType.ICurrentSort, IAction.IResetStateAction> = (currentSort, action) => initialNormalizedState.currentSort;


  /*********************************************
   * currentFilter CaseReducer
   *********************************************/
  export const changeCurrentFilterCaseReducer: CaseReducerType<StateType.ICurrentFilter, IAction.IChangeFilterAction> = (currentFilter, action) => action.currentFilter;

  export const resetCurrentFilterCaseReducer: CaseReducerType<StateType.ICurrentFilter, IAction.IResetStateAction> = (currentFilter, action) => initialNormalizedState.currentFilter;



  /*********************************************
   * selectedWordList CaseReducer
   *********************************************/
  // add word id to selectedWordList
  export const toggleSelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList, IAction.IToggleSelectedWordListAction | IAction.IRemoveWordAction> = (selectedWordList, action) => {
    // if action.selectedWordId exist in state, remove otherwise add it
    return xor(selectedWordList, [ action.wordId ]);
  };
  // empty selectedWordList (SelectAll controller item)
  export const emptySelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList, IAction.IEmptySelectedWordListAction> = (selectedWordList, action) => [];

  // select all available word item (assign sortedWordList values to selectedWordList)
  export const selectAllSelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList, IAction.ISelectAllSelectedWordListAction> = (selectedWordList, action) => [ ...action.nextSelectedWordList ];

  export const resetSelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList, IAction.IResetStateAction> = (selectedWordList, action) => initialNormalizedState.selectedWordList;

  /*********************************************
   * sortedWordList CaseReducer
   *********************************************/
  export const toggleSortedWordListCaseReducer: CaseReducerType<StateType.ISortedWordList, IAction.IRemoveWordAction> = (sortedWordList, action) => {
    // if action.sortedWordId exist in state, remove otherwise add it
    return xor(sortedWordList, [ action.wordId ]);
  };
  // update ( replace ) the entire sortedWordList
  export const changeSortedWordListCaseReducer: CaseReducerType<StateType.ISortedWordList, IAction.IChangeSortAction | IAction.IChangeFilterAction> = (sortedWordList, action) => action.currentSortedWordList;

  export const resetSortedWordListCaseReducer: CaseReducerType<StateType.ISortedWordList, IAction.IResetStateAction> = (sortedWordList, action) => initialNormalizedState.sortedWordList;

  /*********************************************
   * displayedWordList CaseReducer
   *********************************************/
  // add word id to selectedWordList
  export const toggleDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList, IAction.IRemoveWordAction> = (displayedWordList, action) => {
    // if action.selectedWordId exist in state, remove otherwise add it
    return xor(displayedWordList, [ action.wordId ]);
  };
  // change DisplayedWordList to sortedWordList or searchedWordList (nextDisplayedWordList)
  export const changeDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList, IAction.IChangeDisplayedWordListAction> = (displayedWordList, action) => action.nextDisplayedWordList;

  export const resetDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList, IAction.IResetStateAction> = (displayedWordList, action) => initialNormalizedState.displayedWordList;


  /*********************************************
   * searchedWordList CaseReducer
   *********************************************/
  export const changeSearchedWordListCaseReducer: CaseReducerType<StateType.ISearchedWordList, IAction.IChangeSearchKeyWordAction> = (searchedWordList, action) => action.nextSearchedWordList;

export const resetSearchedWordListCaseReducer: CaseReducerType<StateType.ISearchedWordList, IAction.IResetStateAction> = (searchedWordList, action) => initialNormalizedState.searchedWordList;

  /*********************************************
   * searchKeyWord CaseReducer
   *********************************************/
  export const changeSearchKeyWordCaseReducer: CaseReducerType<StateType.ISearchKeyWord, IAction.IChangeSearchKeyWordAction> = (searchKeyWord, action) => action.nextSearchKey;

  export const resetSearchKeyWordCaseReducer: CaseReducerType<StateType.ISearchKeyWord, IAction.IResetStateAction> = (searchKeyWord, action) => initialNormalizedState.searchKeyWord;

  /*********************************************
   * ui CaseReducer
   *********************************************/
  export const toggleSelectWarningModalCaseReducer: CaseReducerType<StateType.IUi, IAction.IToggleSelectWarningModalAction> = (ui, action) => Object.assign({}, ui, { isSelectWarningModalOpen: action.isSelectWarningModalOpen });;

  export const toggleDeleteConfirmModalCaseReducer: CaseReducerType<StateType.IUi, IAction.IToggleDeleteConfirmModalAction> = (ui, action) => Object.assign({}, ui, { isDeleteConfirmModalOpen: action.isDeleteConfirmModalOpen });

  export const toggleSortFilterModalCaseReducer: CaseReducerType<StateType.IUi, IAction.IToggleSortFilterModalAction> = (ui, action) => Object.assign({}, ui, { isSortFilterModalOpen: action.isSortFilterModalOpen });

  export const toggleSearchWordModalCaseReducer: CaseReducerType<StateType.IUi, IAction.IToggleSearchWordModalAction> = (ui, action) => Object.assign({}, ui, { isSearchWordModalOpen: action.isSearchWordModalOpen });

  export const resetUiCaseReducer: CaseReducerType<StateType.IUi, IAction.IResetStateAction> = (ui, action) => Object.assign({}, ui, initialNormalizedState.ui);

  export const toggleDefineWarningModalCaseReducer: CaseReducerType<StateType.IUi, IAction.IToggleDefineWarningModalAction> = (ui, action) => Object.assign({}, ui, { isDefineWarningModalOpen: action.isDefineWarningModalOpen });;
} 
