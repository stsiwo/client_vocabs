import { Action } from 'redux';
import { StateType } from '../state/type';
import { IAction } from '../actions/index';
import { Record } from 'immutable';
export declare namespace CaseReducer {
    /**
     *  case reducer type
     **/
    type CaseReducerType<T, A = Action> = (state: T, action: A) => T;
    /**
     * case reducers:
     *  - case reducers act like Repository so make it simple as much as possible and avoid any business logic
     *  - if you need some logic, the logic belongs to thunk not here
     *  - this place is to implement simple CUD (not R) operation to state
     **/
    /*********************************************
     * entities.words CaseReducer
     *********************************************/
    const bulkUpdateWordCaseReducer: CaseReducerType<StateType.IEntityWord, IAction.IBulkUpdateWordAction>;
    const removeWordEntityCaseReducer: CaseReducerType<StateType.IEntityWord, IAction.IRemoveWordAction>;
    const resetWordsCaseReducer: CaseReducerType<StateType.IEntityWord, IAction.IResetStateAction>;
    /*********************************************
     * login CaseReducer
     *********************************************/
    const toggleLoginCaseReducer: CaseReducerType<StateType.ILogin, IAction.IToggleLoginAction>;
    /***************
     * TS2367: This condition will always return 'false' since the types 'IDef' and 'string' have no overlap.
     *  - this is bug?? obviously comparing string of def.wordId and action.wordId
     *  - it is definitely bug.
     *  - solved:  use string() function to make it string
     ***************/
    /*********************************************
     * currentSort CaseReducer
     *********************************************/
    const changeCurrentSortCaseReducer: CaseReducerType<StateType.ICurrentSort, IAction.IChangeSortAction>;
    const resetCurrentSortCaseReducer: CaseReducerType<StateType.ICurrentSort, IAction.IResetStateAction>;
    /*********************************************
     * currentFilter CaseReducer
     *********************************************/
    const changeCurrentFilterCaseReducer: CaseReducerType<StateType.ICurrentFilter, IAction.IChangeFilterAction>;
    const resetCurrentFilterCaseReducer: CaseReducerType<StateType.ICurrentFilter, IAction.IResetStateAction>;
    /*********************************************
     * selectedWordList CaseReducer
     *********************************************/
    const toggleSelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList, IAction.IToggleSelectedWordListAction | IAction.IRemoveWordAction>;
    const emptySelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList, IAction.IEmptySelectedWordListAction>;
    const selectAllSelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList, IAction.ISelectAllSelectedWordListAction>;
    const resetSelectedWordListCaseReducer: CaseReducerType<StateType.ISelectedWordList, IAction.IResetStateAction>;
    /*********************************************
     * sortedWordList CaseReducer
     *********************************************/
    const toggleSortedWordListCaseReducer: CaseReducerType<StateType.ISortedWordList, IAction.IRemoveWordAction>;
    const changeSortedWordListCaseReducer: CaseReducerType<StateType.ISortedWordList, IAction.IChangeSortAction | IAction.IChangeFilterAction | IAction.IResetSortFilterAction>;
    /**
     * copy word id to sortedWordList if the id does not exits
     **/
    const addSortedWordListCaseReducer: CaseReducerType<StateType.ISortedWordList, IAction.IBulkUpdateWordAction>;
    const resetSortedWordListCaseReducer: CaseReducerType<StateType.ISortedWordList, IAction.IResetStateAction>;
    /*********************************************
     * displayedWordList CaseReducer
     *********************************************/
    const toggleDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList, IAction.IRemoveWordAction>;
    const changeDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList, IAction.IChangeDisplayedWordListAction | IAction.IResetSortFilterAction>;
    /**
     * copy word id to displayedWordList if the id does not exits
     **/
    const addDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList, IAction.IBulkUpdateWordAction>;
    const resetDisplayedWordListCaseReducer: CaseReducerType<StateType.IDisplayedWordList, IAction.IResetStateAction>;
    /*********************************************
     * wordFormError CaseReducer
     *********************************************/
    const toggleWordFormErrorCaseReducer: CaseReducerType<StateType.IWordFormError, IAction.IToggleWordFormErrorAction>;
    const resetWordFormErrorCaseReducer: CaseReducerType<StateType.IWordFormError, IAction.IResetStateAction>;
    /*********************************************
     * searchedWordList CaseReducer
     *********************************************/
    const changeSearchedWordListCaseReducer: CaseReducerType<StateType.ISearchedWordList, IAction.IChangeSearchKeyWordAction>;
    const resetSearchedWordListCaseReducer: CaseReducerType<StateType.ISearchedWordList, IAction.IResetStateAction>;
    /*********************************************
     * searchKeyWord CaseReducer
     *********************************************/
    const changeSearchKeyWordCaseReducer: CaseReducerType<StateType.ISearchKeyWord, IAction.IChangeSearchKeyWordAction>;
    const resetSearchKeyWordCaseReducer: CaseReducerType<StateType.ISearchKeyWord, IAction.IResetStateAction>;
    /*********************************************
     * ui CaseReducer
     *********************************************/
    const toggleSelectWarningModalCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleSelectWarningModalAction>;
    const toggleDeleteConfirmModalCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleDeleteConfirmModalAction>;
    const toggleSortFilterModalCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleSortFilterModalAction>;
    const toggleSearchWordModalCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleSearchWordModalAction>;
    const resetUiCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IResetStateAction>;
    const toggleDefineWarningModalCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleDefineWarningModalAction>;
    const toggleSignUpModalCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleSignUpModalAction>;
    const toggleLoginModalCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleLoginModalAction>;
    const toggleErrorFlashMessageCaseReducer: CaseReducerType<Record<StateType.IUi>, IAction.IToggleErrorFlashMessageAction>;
    /*********************************************
     * asyncs CaseReducer
     *********************************************/
    const startInitialWordsFetchRequestCaseReducer: CaseReducerType<Record<StateType.IAsyncs>, IAction.IStartInitialWordsFetchRequestAction>;
    const finishInitialWordsFetchRequestCaseReducer: CaseReducerType<Record<StateType.IAsyncs>, IAction.IFinishInitialWordsFetchRequestAction>;
}
