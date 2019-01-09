import { IDef } from '../domains/def';
import { IWord } from '../domains/word';
import { SORT_ORDER } from '../enums';
import { PosEnum } from '../domains/pos';

// entities.defs
export interface IEntityDef {
  [id: number]: IDef;
}

// entities.words
export interface IEntityWord {
  [id: number]: IWord;
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
export type ISortedWordList = number[]; 

// searchedWordList 
export type ISearchedWordList = number[]; 

// displayedWordList 
export type IDisplayedWordList = number[]; 

// selectedWordList 
export type ISelectedWordList = number[]; 

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

