import { normalize } from 'normalizr';
import { wordListSchema } from '../../src/state';
import { normalizedState, INormalizedState, initialNormalizedState } from '../../src/state';
import { newWord, removedWord, updateWord } from './word'; 
import { newDef, removedDef, updateDef } from './def'; 
import { normalizeWordObject, normalizeWordsArray, initialState, normalizeDefsArray } from '../../src/state'; 
import { Pos, PosEnum } from '../../src/domains/pos'; 
import { SORT_ORDER } from '../../src/enums';

const normalizedNewWord = normalizeWordObject(newWord);

export const newWordAddedNormState: INormalizedState = Object.assign({}, initialNormalizedState, {
  entities: {
    defs: {
      ...normalizedState.entities.defs,
      ...normalizedNewWord.entities.defs,
    },
    words: {
      ...normalizedState.entities.words,
      ...normalizedNewWord.entities.words,
    },
  },
});

export const wordRemovedNormState = normalizeWordsArray(removedWord);

export const normalizedUpdateWord = normalizeWordObject(updateWord);

export const wordUpdateNormState = Object.assign({}, initialNormalizedState, {
  entities: {
    defs: {
      ...normalizedState.entities.defs,
      ...normalizedUpdateWord.entities.defs,
    },
    words: {
      ...normalizedState.entities.words,
      ...normalizedUpdateWord.entities.words,
    },
  },
});

const copy = JSON.parse(JSON.stringify(initialState));
copy[0].defs = copy[0].defs.concat(newDef);
export const newDefAddedNormState = normalizeWordsArray(copy);


export const defRemovedNormState = normalizeWordsArray(removedDef);

export const normalizedUpdateDef = normalizeDefsArray(updateDef);

export const defUpdateNormState = Object.assign({}, initialNormalizedState, {
  entities: {
    defs: {
      ...normalizedState.entities.defs,
      ...normalizedUpdateDef.entities.defs,
    },
    words: {
      ...normalizedState.entities.words,
      ...normalizedUpdateDef.entities.words,
    },
  },
});
// sort asc test data  
const sortAscTestData = [
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
];
//const normalizedSortAscTestData = normalizeWordsArray(sortAscTestData);
const normalizedSortAscTestData = normalize(sortAscTestData, wordListSchema);
export const normalizedSortAscState = {
  entities: normalizedSortAscTestData.entities,
  sortedWordList: normalizedSortAscTestData.result,
  currentSort: SORT_ORDER.ALPHA_ASC,
}
