import { IActionType } from '../actions/type';
import { CaseReducer } from './caseReducer';
import { StateType } from '../state/type';
import { Record } from 'immutable';
export declare namespace ActionHandler {
    /**
     * Hander type
     * must match property name with action type of a domain
     * and value name with the name of the slice reducer function
     * also relationship between action and CaseReducer is M:N
     **/
    /**************************
     * this is source of error : Final loading didn't return a buffer or string ....
     *  - SOLVED: i was putting object in where it would be supposed to be interface ( IActionType )
     **************************/
    type HandlerType<T> = {
        [P in keyof IActionType]?: CaseReducer.CaseReducerType<T>;
    };
    /*****************************************
     * entities.words handler
     ****************************************/
    const wordsHandler: HandlerType<StateType.IEntityWord>;
    /*****************************************
     * entities.login handler
     ****************************************/
    const loginHandler: HandlerType<StateType.ILogin>;
    /*****************************************
     * currentSort
     ****************************************/
    const currentSortHandler: HandlerType<StateType.ICurrentSort>;
    /*****************************************
     * currentFilter
     ****************************************/
    const currentFilterHandler: HandlerType<StateType.ICurrentFilter>;
    /*****************************************
     * ui
     ****************************************/
    const uiHandler: HandlerType<Record<StateType.IUi>>;
    /*****************************************
     * selectedWordList
     ****************************************/
    const selectedWordListHandler: HandlerType<StateType.ISelectedWordList>;
    /*****************************************
     * sortedWordList
     ****************************************/
    const sortedWordListHandler: HandlerType<StateType.ISortedWordList>;
    /*****************************************
     * searchedWordList
     ****************************************/
    const searchedWordListHandler: HandlerType<StateType.ISearchedWordList>;
    /*****************************************
     * displayedWordList
     ****************************************/
    const displayedWordListHandler: HandlerType<StateType.IDisplayedWordList>;
    /*****************************************
     * wordFormError
     ****************************************/
    const wordFormErrorHandler: HandlerType<StateType.IWordFormError>;
    /*****************************************
     * searchKeyWord
     ****************************************/
    const searchKeyWordHandler: HandlerType<StateType.ISearchKeyWord>;
    /*****************************************
     * asyncs - isInitialWordsFetching
     ****************************************/
    const asyncsHandler: HandlerType<Record<StateType.IAsyncs>>;
}
