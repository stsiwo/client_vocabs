import { IWord } from '../domains/word';
import { IState, StateType } from './type';
import { Record, Map, List, Set } from 'immutable';

/**
 * normalized empty initial state
 * @type { IState } 
 **/
export const initialState: IState = {
  entities: Record<StateType.IEntity>({
    words: Map<string, IWord>(), 
  })(),
  currentSort: 1, 
  sortedWordList: List<string>(),
  searchedWordList: List<string>(),
  selectedWordList: List<string>(),
  displayedWordList: List<string>(), 
  searchKeyWord: '',
  currentFilter: Set<number>([0,1,2,3,4,5,6,7,8,9]),
  wordFormError: false,
  ui: Record<StateType.IUi>({
    isSelectWarningModalOpen: false,
    isDeleteConfirmModalOpen: false,
    isSortFilterModalOpen: false,
    isSearchWordModalOpen: false,
    isDefineWarningModalOpen: false,
  })(),
  asyncs: Record<StateType.IAsyncs>({
    isInitialWordsFetching: false,
  })(),
}

export const initialStateRecordFactory = Record(initialState); 


