import { IDef } from '../domains/def';
import { IWord, INormalizedWord } from '../domains/word';
import { SORT_ORDER } from '../enums';
import { PosEnum } from '../domains/pos';

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
export interface INormalizedState { 
  entities: IEntity;
  sortedWordList: ISortedWordList;
  selectedWordList: ISortedWordList;
  searchedWordList: ISearchedWordList;
  displayedWordList: IDisplayedWordList;
  currentSort: ICurrentSort;
  currentFilter: ICurrentFilter;  
  searchKeyWord: ISearchKeyWord;
  ui: IUi;
}

