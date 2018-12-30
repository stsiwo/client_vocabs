import { normalize, schema } from 'normalizr';
import { PosEnum, Pos } from './domains/pos';
import { IWord } from './domains/word';
import { IDef } from './domains/def';
import { SORT_ORDER } from './actions/type';

/**
 * normalized state
 *  - entities
 *    - defs: 
 *    - words: 
 *  - sortedWordList:
 *  - currentSort: 
 *  
 **/

const defSchema = new schema.Entity('defs');
const defListSchema = new schema.Array(defSchema);
export const wordSchema = new schema.Entity('words', { defs: [defSchema] });
export const wordListSchema = new schema.Array(wordSchema);

export type State = IWord[];

export interface IEntityDef {
  [id: number]: IDef;
}

export interface IEntityWord {
  [id: number]: IWord;
}

export interface IEntity {
  words: IEntityWord,
  defs: IEntityDef,
}

export type ICurrentSort = SORT_ORDER; 

export type ISortedWordList = number[]; 

export interface INormalizedState { 
  entities: IEntity,
  sortedWordList: ISortedWordList,
  currentSort: ICurrentSort,
}

export const initialNormalizedState: INormalizedState = {
  entities: {
    defs: {},
    words: {},
  },
  currentSort: 1, 
  sortedWordList: [],
}

export const initialState: State = [
  {
    id: 0,
    name: "sport",
    createDate: "1995-12-17T03:24:00",
    defs: [
      {
        id: 0,
        pos: Pos[PosEnum.NOUN],
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 0,
      },
      {
        id: 1,
        pos: Pos[PosEnum.NOUN],
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        _wordId: 0,
      },
      {
        id: 2,
        pos: Pos[PosEnum.NOUN],
        def: "a formal speech:",
        image: "image1",
        _wordId: 0,
      },
      {
        id: 3,
        pos: Pos[PosEnum.VERB],
        def: "to speak or write to someone:",
        image: "image1",
        _wordId: 0,
      },
    ],
  },
  {
    id: 1,
    name: "hypothesis",
    createDate: "1996-12-17T03:24:00",
    defs: [
      {
        id: 4,
        pos: Pos[PosEnum.NOUN],
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 1,
      },
      {
        id: 5,
        pos: Pos[PosEnum.NOUN],
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        _wordId: 1,
      },
      {
        id: 6,
        pos: Pos[PosEnum.NOUN],
        def: "a formal speech:",
        image: "image1",
        _wordId: 1,
      },
      {
        id: 7,
        pos: Pos[PosEnum.VERB],
        def: "to speak or write to someone:",
        image: "image1",
        _wordId: 1,
      },
    ],
  },
  {
    id: 2,
    name: "address",
    createDate: "1997-12-17T03:24:00",
    defs: [
      {
        id: 8,
        pos: Pos[PosEnum.NOUN],
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 2,
      },
    ],
  },
  {
    id: 3,
    name: "longevity",
    createDate: "1998-12-17T03:24:00",
    defs: [
      {
        id: 13,
        pos: Pos[PosEnum.NOUN],
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 3,
      },
    ],
  },
  {
    id: 4,
    name: "curry",
    createDate: "1999-12-17T03:24:00",
    defs: [
      {
        id: 14,
        pos: Pos[PosEnum.NOUN],
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 4,
      },
    ],
  },
  {
    id: 5,
    name: "elaborate",
    createDate: "2000-12-17T03:24:00",
    defs: [
      {
        id: 15,
        pos: Pos[PosEnum.NOUN],
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 5,
      },
    ],
  },
  {
    id: 6,
    name: "zap",
    createDate: "2001-12-17T03:24:00",
    defs: [
      {
        id: 16,
        pos: Pos[PosEnum.NOUN],
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 6,
      },
    ],
  },
  {
    id: 7,
    name: "dictation",
    createDate: "2002-12-17T03:24:00",
    defs: [
      {
        id: 17,
        pos: Pos[PosEnum.NOUN],
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 7,
      },
    ],
  },
  {
    id: 8,
    name: "occupation",
    createDate: "2003-12-17T03:24:00",
    defs: [
      {
        id: 18,
        pos: Pos[PosEnum.NOUN],
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 8,
      },
    ],
  },
  {
    id: 9,
    name: "valt",
    createDate: "2004-12-17T03:24:00",
    defs: [
      {
        id: 19,
        pos: Pos[PosEnum.NOUN],
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 9,
      },
    ],
  },
  {
    id: 10,
    name: "biblical",
    createDate: "2005-12-17T03:24:00",
    defs: [
      {
        id: 110,
        pos: Pos[PosEnum.NOUN],
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 10,
      },
    ],
  },
];

export const normalizeWordsArray: (words: State) => INormalizedState = (words) => {

  const normalizedWords = normalize(words, wordListSchema);
  return Object.assign({}, initialNormalizedState, { entities: normalizedWords.entities });
}

export const normalizeWordObject: (word: IWord) => INormalizedState = (word) => {
  const normalizedWord = normalize(word, wordSchema);
  return Object.assign({}, initialNormalizedState, { entities: normalizedWord.entities });
}

export const normalizeDefsArray: (defs: IDef[]) => INormalizedState = (defs) => {

  const normalizedDefs = normalize(defs, defListSchema);
  return Object.assign({}, initialNormalizedState, { entities: normalizedDefs.entities });
}

export const normalizeDefObject: (def: IDef) => INormalizedState = (def) => {
  const normalizedDef = normalize(def, defSchema);
  return Object.assign({}, initialNormalizedState, { entities: normalizedDef.entities });
}

export const normalizedState: INormalizedState = normalizeWordsArray(initialState); 

