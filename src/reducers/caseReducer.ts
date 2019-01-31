import { Action } from 'redux';
import { StateType } from '../state/type';
import { initialState } from '../state/index';
import { IAction } from '../actions/index';
import { List, Record, Set } from 'immutable';


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
  export const bulkUpdateWordCaseReducer: CaseReducerType<StateType.IEntityWord, IAction.IBulkUpdateWordAction> = (words, action) => {
    return words.withMutations(( words ) => {
      action.words.forEach(( word ) => words.set( word.id, word ));
    })
  }

  export const removeWordEntityCaseReducer: CaseReducerType<StateType.IEntityWord, IAction.IRemoveWordAction> = (words, action) => words.delete(action.wordId); 

  export const resetWordsCaseReducer: CaseReducerType<StateType.IEntityWord, IAction.IResetStateAction> = (words, action) => words.clear();


  /***************
   * TS2367: This condition will always return 'false' since the types 'IDef' and 'string' have no overlap.
   *  - this is bug?? obviously comparing string of def._wordId and action.wordId
   *  - it is definitely bug.
   *  - solved:  use string() function to make it string
   ***************/

  /*********************************************
   * currentSort CaseReducer
   *********************************************/
  export const changeCurrentSortCaseReducer: CaseReducerType<StateType.ICurrentSort, IAction.IChangeSortAction> = (currentSort, action) => action.currentSort;

  export const resetCurrentSortCaseReducer: CaseReducerType<StateType.ICurrentSort, IAction.IResetStateAction> = (currentSort, action) => initialState.currentSort;


  /*********************************************
   * currentFilter CaseReducer
   *********************************************/
  export const changeCurrentFilterCaseReducer: CaseReducerType<StateType.ICurrentFilter, IAction.IChangeFilterAction> = (currentFilter, action) => Set<number>(action.currentFilter);

  export const resetCurrentFilterCaseReducer: CaseReducerType<StateType.ICurrentFilter, IAction.IResetStateAction> = (currentFilter, action) => initialState.currentFilter;



  /*********************************************
   * selectedWordList CaseReducer
   *********************************************/
  // add word id to selectedWordList
  export const toggleSelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList, IAction.IToggleSelectedWordListAction | IAction.IRemoveWordAction> = (selectedWordList, action) => {
    const targetIndex = selectedWordList.indexOf(action.wordId);
    // if action.selectedWordId exist in state, remove otherwise add it
    // delete method takes O(N) so don't want to use that. is there any way to do this? 
    // - is it possible to use map for this case, so easily identify element
    return targetIndex > 0 ? selectedWordList.delete(targetIndex) : selectedWordList.push(action.wordId); 
  };
  // empty selectedWordList (SelectAll controller item)
  export const emptySelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList, IAction.IEmptySelectedWordListAction> = (selectedWordList, action) => initialState.selectedWordList;

  // select all available word item (assign sortedWordList values to selectedWordList)
  //  - just return sortedWordList (a value in action) 
  //  - I believe returning immutable collection, it automatically creates and returns the copy of the collection ( I just assuming so need to make sure haha ) 
  export const selectAllSelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList, IAction.ISelectAllSelectedWordListAction> = (selectedWordList, action) => action.nextSelectedWordList; 

  export const resetSelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList, IAction.IResetStateAction> = (selectedWordList, action) => initialState.selectedWordList; 

  /*********************************************
   * sortedWordList CaseReducer
   *********************************************/
  export const toggleSortedWordListCaseReducer: CaseReducerType<StateType.ISortedWordList, IAction.IRemoveWordAction> = (sortedWordList, action) => {

    // if action.sortedWordList exist in state, remove otherwise add it
    const targetIndex = sortedWordList.indexOf(action.wordId);
    // delete method takes O(N) so don't want to use that. is there any way to do this? 
    // - is it possible to use map for this case, so easily identify element
    return targetIndex > 0 ? sortedWordList.delete(targetIndex) : sortedWordList.push(action.wordId); 
  };
  
  // update ( replace ) the entire sortedWordList
  export const changeSortedWordListCaseReducer: CaseReducerType<StateType.ISortedWordList, IAction.IChangeSortAction | IAction.IChangeFilterAction> = (sortedWordList, action) => action.currentSortedWordList;

  export const resetSortedWordListCaseReducer: CaseReducerType<StateType.ISortedWordList, IAction.IResetStateAction> = (sortedWordList, action) => initialState.sortedWordList; 

  /*********************************************
   * displayedWordList CaseReducer
   *********************************************/
  // add word id to selectedWordList
  export const toggleDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList, IAction.IRemoveWordAction> = (displayedWordList, action) => {
    // if action.sortedWordList exist in state, remove otherwise add it
    const targetIndex = displayedWordList.indexOf(action.wordId);
    // delete method takes O(N) so don't want to use that. is there any way to do this? 
    // - is it possible to use map for this case, so easily identify element
    return targetIndex > 0 ? displayedWordList.delete(targetIndex) : displayedWordList.push(action.wordId); 
  };
  // change DisplayedWordList to displayedWordList or searchedWordList (nextDisplayedWordList)
  export const changeDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList, IAction.IChangeDisplayedWordListAction> = (displayedWordList, action) => action.nextDisplayedWordList;

  export const resetDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList, IAction.IResetStateAction> = (displayedWordList, action) => initialState.displayedWordList; 

  /*********************************************
   * wordFormError CaseReducer
   *********************************************/
  export const toggleWordFormErrorCaseReducer: CaseReducerType<StateType.IWordFormError, IAction.IToggleWordFormErrorAction> = (wordFormError, action) => action.wordFormError;

export const resetWordFormErrorCaseReducer: CaseReducerType<StateType.IWordFormError, IAction.IResetStateAction> = (wordFormError, action) => initialState.wordFormError;

  /*********************************************
   * searchedWordList CaseReducer
   *********************************************/
export const changeSearchedWordListCaseReducer: CaseReducerType<StateType.ISearchedWordList, IAction.IChangeSearchKeyWordAction> = (searchedWordList, action) => List<string>(action.nextSearchedWordList);

export const resetSearchedWordListCaseReducer: CaseReducerType<StateType.ISearchedWordList, IAction.IResetStateAction> = (searchedWordList, action) => initialState.searchedWordList; 

  /*********************************************
   * searchKeyWord CaseReducer
   *********************************************/
  export const changeSearchKeyWordCaseReducer: CaseReducerType<StateType.ISearchKeyWord, IAction.IChangeSearchKeyWordAction> = (searchKeyWord, action) => action.nextSearchKey;

  export const resetSearchKeyWordCaseReducer: CaseReducerType<StateType.ISearchKeyWord, IAction.IResetStateAction> = (searchKeyWord, action) => initialState.searchKeyWord;

  /*********************************************
   * ui CaseReducer
   *********************************************/
  export const toggleSelectWarningModalCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleSelectWarningModalAction> = (ui, action) => ui.set('isSelectWarningModalOpen', action.isSelectWarningModalOpen); 

  export const toggleDeleteConfirmModalCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleDeleteConfirmModalAction> = (ui, action) => ui.set('isDeleteConfirmModalOpen', action.isDeleteConfirmModalOpen);  
  
  export const toggleSortFilterModalCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleSortFilterModalAction> = (ui, action) => ui.set('isSortFilterModalOpen', action.isSortFilterModalOpen);

  export const toggleSearchWordModalCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleSearchWordModalAction> = (ui, action) => ui.set('isSearchWordModalOpen', action.isSearchWordModalOpen);

  export const resetUiCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IResetStateAction> = (ui, action) => initialState.ui; 

  export const toggleDefineWarningModalCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleDefineWarningModalAction> = (ui, action) => ui.set('isDefineWarningModalOpen', action.isDefineWarningModalOpen);

  /*********************************************
   * asyncs CaseReducer
   *********************************************/
  export const startInitialWordsFetchRequestCaseReducer: CaseReducerType<Record<StateType.IAsyncs>, IAction.IStartInitialWordsFetchRequestAction> = (asyncs, action) => asyncs.set('isInitialWordsFetching', action.isInitialWordsFetching);

  export const finishInitialWordsFetchRequestCaseReducer: CaseReducerType<Record<StateType.IAsyncs>, IAction.IFinishInitialWordsFetchRequestAction> = (asyncs, action) => asyncs.set('isInitialWordsFetching', action.isInitialWordsFetching);
} 
