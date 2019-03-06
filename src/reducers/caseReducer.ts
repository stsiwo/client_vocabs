import { Action } from 'redux';
import { StateType } from '../state/type';
import { initialState } from '../state/index';
import { IAction } from '../actions/index';
import { OrderedSet, Record, fromJS } from 'immutable';


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
    /*******************************************
     * use withMutations for bulk update or set since it is really performant; immutabljs does create a copy every time which is time and memory consuming rather than it just create temporary copy and udpate or set multiple entries at once.
     *******************************************/
    // convert plain js words object to immutable map (defs is converted list)
    return words.withMutations(( words ) => {
      action.words.forEach(( word ) => words.set( word.id, fromJS( word )));
    })
  }

  export const removeWordEntityCaseReducer: CaseReducerType<StateType.IEntityWord, IAction.IRemoveWordAction> = (words, action) => words.delete(action.wordId); 

  export const resetWordsCaseReducer: CaseReducerType<StateType.IEntityWord, IAction.IResetStateAction> = (words, action) => words.clear();

  /*********************************************
   * login CaseReducer
   *********************************************/
  export const toggleLoginCaseReducer: CaseReducerType<StateType.ILogin, IAction.IToggleLoginAction> = (login, action) => action.isLogin;

  /***************
   * TS2367: This condition will always return 'false' since the types 'IDef' and 'string' have no overlap.
   *  - this is bug?? obviously comparing string of def.wordId and action.wordId
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
  export const changeCurrentFilterCaseReducer: CaseReducerType<StateType.ICurrentFilter, IAction.IChangeFilterAction> = (currentFilter, action) => { 
    return currentFilter.includes(action.currentFilter) ? currentFilter.delete(action.currentFilter) : currentFilter.add(action.currentFilter); 
  }

  export const resetCurrentFilterCaseReducer: CaseReducerType<StateType.ICurrentFilter, IAction.IResetStateAction> = (currentFilter, action) => initialState.currentFilter;



  /*********************************************
   * selectedWordList CaseReducer
   *********************************************/
  // add word id to selectedWordList
  export const toggleSelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList, IAction.IToggleSelectedWordListAction | IAction.IRemoveWordAction> = (selectedWordList, action) => {
    // if action.selectedWordId exist in state, remove otherwise add it
    return selectedWordList.includes(action.wordId) ? selectedWordList.delete(action.wordId) : selectedWordList.add(action.wordId); 
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

    // if action.selectedWordId exist in state, remove otherwise add it
    return sortedWordList.includes(action.wordId) ? sortedWordList.delete(action.wordId) : sortedWordList.add(action.wordId); 
  };
  
  // update ( replace ) the entire sortedWordList
  export const changeSortedWordListCaseReducer: CaseReducerType<StateType.ISortedWordList, IAction.IChangeSortAction | IAction.IChangeFilterAction | IAction.IResetSortFilterAction> = (sortedWordList, action) => action.sortedWordList;
  /**
   * copy word id to sortedWordList if the id does not exits
   **/
  export const addSortedWordListCaseReducer: CaseReducerType<StateType.ISortedWordList, IAction.IBulkUpdateWordAction> = (sortedWordList, action) => {
    return sortedWordList.union(action.words.map(( word ) => word.id));
  }

  export const resetSortedWordListCaseReducer: CaseReducerType<StateType.ISortedWordList, IAction.IResetStateAction> = (sortedWordList, action) => initialState.sortedWordList; 

  /*********************************************
   * displayedWordList CaseReducer
   *********************************************/
  // add word id to selectedWordList
  export const toggleDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList, IAction.IRemoveWordAction> = (displayedWordList, action) => {
    // if action.selectedWordId exist in state, remove otherwise add it
    return displayedWordList.includes(action.wordId) ? displayedWordList.delete(action.wordId) : displayedWordList.add(action.wordId); 
  };
  // change DisplayedWordList to displayedWordList or searchedWordList (nextDisplayedWordList)
  export const changeDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList, IAction.IChangeDisplayedWordListAction | IAction.IResetSortFilterAction > = (displayedWordList, action) => action.displayedWordList;

  /**
   * copy word id to displayedWordList if the id does not exits
   **/
  export const addDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList, IAction.IBulkUpdateWordAction> = (displayedWordList, action) => {
    return displayedWordList.union(action.words.map(( word ) => word.id));
  }

  export const resetDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList, IAction.IResetStateAction> = (displayedWordList, action) => initialState.displayedWordList; 

  /*********************************************
   * wordFormError CaseReducer
   *********************************************/
  export const toggleWordFormErrorCaseReducer: CaseReducerType<StateType.IWordFormError, IAction.IToggleWordFormErrorAction> = (wordFormError, action) => action.wordFormError;

export const resetWordFormErrorCaseReducer: CaseReducerType<StateType.IWordFormError, IAction.IResetStateAction> = (wordFormError, action) => initialState.wordFormError;

  /*********************************************
   * searchedWordList CaseReducer
   *********************************************/
export const changeSearchedWordListCaseReducer: CaseReducerType<StateType.ISearchedWordList, IAction.IChangeSearchKeyWordAction> = (searchedWordList, action) => OrderedSet<string>(action.nextSearchedWordList);

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

  export const toggleSignUpModalCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleSignUpModalAction> = (ui, action) => ui.set('isSignUpModalOpen', action.isSignUpModalOpen);

  export const toggleLoginModalCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleLoginModalAction> = (ui, action) => ui.set('isLoginModalOpen', action.isLoginModalOpen);

  export const toggleErrorFlashMessageCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleErrorFlashMessageAction> = (ui, action) => ui.set('isErrorFlashMessageOpen', action.isErrorFlashMessageOpen);
  /*********************************************
   * asyncs CaseReducer
   *********************************************/
  export const startInitialWordsFetchRequestCaseReducer: CaseReducerType<Record<StateType.IAsyncs>, IAction.IStartInitialWordsFetchRequestAction> = (asyncs, action) => asyncs.set('isInitialWordsFetching', action.isInitialWordsFetching);

  export const finishInitialWordsFetchRequestCaseReducer: CaseReducerType<Record<StateType.IAsyncs>, IAction.IFinishInitialWordsFetchRequestAction> = (asyncs, action) => asyncs.set('isInitialWordsFetching', action.isInitialWordsFetching);
} 
