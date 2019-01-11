import { normalize, schema, denormalize } from 'normalizr';
import { IDef } from '../domains/def';
import { PosEnum } from '../domains/pos';
import { IWord } from '../domains/word';
import { INormalizedState, IEntity } from './type';
import { getCurrentTimeStamp } from '../util/index';
const uuidv4 = require('uuid/v4'); 


/**
 * normalized state
 *  - entities
 *    - defs: 
 *    - words: 
 *  - sortedWordList:
 *  - currentSort: 
 *  - searchKeyWord:
 *  - selectedWordList: 
 *  - ui
 *    - isSelectWarningModalOpen:
 *    - isDeleteConfirmModalOpen:
 *    - isSortFilterModalOpen:
 *    - isSearchWordModalOpen:
 *  
 **/


export const initialWordList: IWord[] = [
  {
    id: 2,
    name: "address",
    createDate: "1997-12-17T03:24:00",
    defs: [
      {
        id: 8,
        pos: PosEnum.ADJUCTIVE,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 2,
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
        pos: PosEnum.NOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 10,
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
        pos: PosEnum.PRONOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 4,
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
        pos: PosEnum.INTERJECTION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 7,
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
        pos: PosEnum.PREPOSITION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 5,
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
        pos: PosEnum.VERB,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 1,
      },
      {
        id: 5,
        pos: PosEnum.VERB,
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        _wordId: 1,
      },
      {
        id: 6,
        pos: PosEnum.VERB,
        def: "a formal speech:",
        image: "image1",
        _wordId: 1,
      },
      {
        id: 7,
        pos: PosEnum.VERB,
        def: "to speak or write to someone:",
        image: "image1",
        _wordId: 1,
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
        pos: PosEnum.ADVERB,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 3,
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
        pos: PosEnum.ELSE,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 8,
      },
    ],
  },
  {
    id: 0,
    name: "sport",
    createDate: "1995-12-17T03:24:00",
    defs: [
      {
        id: 0,
        pos: PosEnum.NOUN, 
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 0,
      },
      {
        id: 1,
        pos: PosEnum.NOUN,
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        _wordId: 0,
      },
      {
        id: 2,
        pos: PosEnum.NOUN,
        def: "a formal speech:",
        image: "image1",
        _wordId: 0,
      },
      {
        id: 3,
        pos: PosEnum.NOUN,
        def: "to speak or write to someone:",
        image: "image1",
        _wordId: 0,
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
        pos: PosEnum.IDIOM,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 9,
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
        pos: PosEnum.CONJUNCTION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 6,
      },
    ],
  },
];


/**
 * normalizr schame definition 
 **/
const defSchema = new schema.Entity('defs');
const defListSchema = new schema.Array(defSchema);
export const wordSchema = new schema.Entity('words', { defs: [defSchema] });
export const wordListSchema = new schema.Array(wordSchema);

/**
 * normalized initial State
 **/
const normalizedEntities = normalize(initialWordList, wordListSchema);
export const initialNormalizedState: INormalizedState = {
  entities: {
    defs: normalizedEntities.entities.defs,
    words: normalizedEntities.entities.words,
  },
  currentSort: 1, 
  sortedWordList: [0,1,2,3,4,5,6,7,8,9,10],
  searchedWordList: [],
  selectedWordList: [0,1,2,3],
  displayedWordList: [0,1,2,3,4,5,6,7,8,9,10], 
  searchKeyWord: '',
  currentFilter: [0,1,2,3,4,5,6,7,8,9],
  ui: {
    isSelectWarningModalOpen: false,
    isDeleteConfirmModalOpen: false,
    isSortFilterModalOpen: false,
    isSearchWordModalOpen: false,
  },
}
/**
 * new word 
 **/
export const getNewWord: (id: number) => IWord = (id) => {
  return {
    id: id,
    name: "",
    createDate: getCurrentTimeStamp(),
    defs: [
      {
        id: uuidv4(),
        pos: PosEnum.NOUN,
        def: "",
        image: "",
        _wordId: id,
      },
    ],
  }
}

/**
 * denormalize normalizr helper
 **/
export const denormalizeWordList: (words: number[], entities: IEntity) => IWord[] = ( words, entities ) => {
  return denormalize( words, wordListSchema, entities )
}

/**
 * normalizr helper function 
 **/
export const normalizeWord: ( word: IWord ) => IEntity = ( word ) => normalize(word, wordListSchema).entities; 

export const normalizeWordsArray: (words: IWord[]) => INormalizedState = (words) => {
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

/**
 * normalized initialWordList with words array schema
 **/
export const normalizedState: INormalizedState = normalizeWordsArray(initialWordList); 
