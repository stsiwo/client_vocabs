import { IDef } from '../domains/def';
import { INormalizedWord } from '../domains/word';
import { SORT_ORDER } from '../enums';
import { PosEnum } from '../domains/pos';

export namespace StateType {
  // entities.defs
  export interface IEntityDef {
    [id: string]: IDef;
  }

  // entities.words
  export interface IEntityWord {
    [id: string]: INormalizedWord;
  }

  // entities
  export interface IEntity {
    words: IEntityWord,
      defs: IEntityDef,
  }

  export interface IUi {
    isSelectWarningModalOpen: boolean;
    isDeleteConfirmModalOpen: boolean;
    isSortFilterModalOpen: boolean;
    isSearchWordModalOpen: boolean;
    isDefineWarningModalOpen: boolean;
  }

  // currentSort
  export type ICurrentSort = SORT_ORDER; 

  // sortedWordList 
  export type ISortedWordList = string[]; 

  // searchedWordList 
  export type ISearchedWordList = string[]; 

  // displayedWordList 
  export type IDisplayedWordList = string[]; 

  // selectedWordList 
  export type ISelectedWordList = string[]; 

  // currentFilter
  export type ICurrentFilter = PosEnum[];

  export type ISearchKeyWord = string;
  /**
   * normalized state shape interface 
   **/
}

export interface INormalizedState { 
  entities: StateType.IEntity;
  sortedWordList: StateType.ISortedWordList;
  selectedWordList: StateType.ISortedWordList;
  searchedWordList: StateType.ISearchedWordList;
  displayedWordList: StateType.IDisplayedWordList;
  currentSort: StateType.ICurrentSort;
  currentFilter: StateType.ICurrentFilter;  
  searchKeyWord: StateType.ISearchKeyWord;
  ui: StateType.IUi;
}
