import { SORT_ORDER } from '../enums';
import { IWord } from '../domains/word';
import { PosEnum } from '../domains/pos';
// immutablejs
import { Map, OrderedSet, Record, Set } from 'immutable';

export namespace StateType {

  export type IEntityWord = Map<string, IWord>;

  // entities
  export interface IEntity {
    words: IEntityWord;
  }

  export interface IUi {
    isSelectWarningModalOpen: boolean;
    isDeleteConfirmModalOpen: boolean;
    isSortFilterModalOpen: boolean;
    isSearchWordModalOpen: boolean;
    isDefineWarningModalOpen: boolean;
  }

  export interface IAsyncs {
    isInitialWordsFetching: boolean;
  }

  // currentSort
  export type ICurrentSort = SORT_ORDER; 

  // sortedWordList 
  export type ISortedWordList = OrderedSet<string>; 

  // searchedWordList 
  export type ISearchedWordList = OrderedSet<string>; 

  // displayedWordList 
  export type IDisplayedWordList = OrderedSet<string>; 

  // selectedWordList 
  export type ISelectedWordList = OrderedSet<string>; 

  // currentFilter
  export type ICurrentFilter = Set<PosEnum>;

  // wordFormError
  export type IWordFormError = boolean; 

  export type ISearchKeyWord = string;
}

export interface IState { 
  entities: Record<StateType.IEntity>;
  sortedWordList: StateType.ISortedWordList;
  selectedWordList: StateType.ISortedWordList;
  searchedWordList: StateType.ISearchedWordList;
  displayedWordList: StateType.IDisplayedWordList;
  currentSort: StateType.ICurrentSort;
  currentFilter: StateType.ICurrentFilter;  
  wordFormError: StateType.IWordFormError;
  searchKeyWord: StateType.ISearchKeyWord;
  ui: Record<StateType.IUi>;
  asyncs: Record<StateType.IAsyncs>;
}

