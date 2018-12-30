import { IDef } from '../domains/def';
import { IWord } from '../domains/word';
import { SORT_ORDER } from './enums';

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

// currentSort
export type ICurrentSort = SORT_ORDER; 

// sortedWordList 
export type ISortedWordList = number[]; 

/**
 * normalized state shape interface 
 **/
export interface INormalizedState { 
  entities: IEntity,
  sortedWordList: ISortedWordList,
  currentSort: ICurrentSort,
}

