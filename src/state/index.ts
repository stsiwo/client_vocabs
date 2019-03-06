import { IWordImm } from '../domains/word';
import { IState, StateType } from './type';
import { Record, Map, OrderedSet, Set } from 'immutable';

/**
 * normalized empty initial state
 * @type { IState } 
 **/
export const initialState: IState = {
  entities: Record<StateType.IEntity>({
    words: Map<string, IWordImm>(), 
  })(),
  login: false,
  currentSort: 1, 
  sortedWordList: OrderedSet<string>(),
  searchedWordList: OrderedSet<string>(),
  selectedWordList: OrderedSet<string>(),
  displayedWordList: OrderedSet<string>(), 
  searchKeyWord: '',
  currentFilter: Set<number>([0,1,2,3,4,5,6,7,8,9]),
  wordFormError: false,
  ui: Record<StateType.IUi>({
    isSelectWarningModalOpen: false,
    isDeleteConfirmModalOpen: false,
    isSortFilterModalOpen: false,
    isSearchWordModalOpen: false,
    isDefineWarningModalOpen: false,
    isSignUpModalOpen: false,
    isLoginModalOpen: false,
    isErrorFlashMessageOpen: false
  })(),
  asyncs: Record<StateType.IAsyncs>({
    isInitialWordsFetching: false,
  })(),
}

export const initialStateRecordFactory = Record(initialState); 


