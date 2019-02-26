import { normalize } from 'normalizr';
import { normalizedState, initialNormalizedState, initialWordList, wordListSchema, normalizeWordObject, normalizeWordsArray, normalizeDefsArray } from '../../src/state/index';
import { INormalizedState } from '../../src/state/type'; 
import { newWord, removedWord, updateWord } from './word'; 
import { newDef, removedDef, updateDef } from './def'; 
import { PosEnum } from '../../src/domains/pos'; 
import { SORT_ORDER } from '../../src/enums';
import { IWord } from '../../src/domains/word';

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

export const wordNameUpdateNormState = Object.assign({}, initialNormalizedState, {
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
// construct test data 
// added new def to word id = 0
const copy = JSON.parse(JSON.stringify(initialWordList));
// find word id = 0 from initial word array
const wordId0Index = copy.findIndex(( word: IWord ) => word.id === "0");
copy[wordId0Index].defs = copy[wordId0Index].defs.concat(newDef);
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

export const defPosUpdateNormState = Object.assign({}, initialNormalizedState, { 
  entities: {
    words: {
      ...initialNormalizedState.entities.words,
    },
    defs: {
      ...initialNormalizedState.entities.defs,
      [initialNormalizedState.entities.defs[0].id]: {
        ...initialNormalizedState.entities.defs[0],
        pos: 4,
      }
    },
  }
});

export const defTextUpdateNormState = Object.assign({}, initialNormalizedState, { 
  entities: {
    words: {
      ...initialNormalizedState.entities.words,
    },
    defs: {
      ...initialNormalizedState.entities.defs,
      [initialNormalizedState.entities.defs[0].id]: {
        ...initialNormalizedState.entities.defs[0],
        def: "test",
      }
    },
  }
});

export const defImageUpdateNormState = Object.assign({}, initialNormalizedState, { 
  entities: {
    words: {
      ...initialNormalizedState.entities.words,
    },
    defs: {
      ...initialNormalizedState.entities.defs,
      [initialNormalizedState.entities.defs[0].id]: {
        ...initialNormalizedState.entities.defs[0],
        image: "test",
      }
    },
  }
});
// sort asc test data  
const sortAscTestData = [
  {
    id: "2",
    name: "address",
    createDate: "1997-12-17T03:24:00",
    defs: [
      {
        id: "8",
        pos: PosEnum.ADJUCTIVE,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "2",
      },
    ],
  },
  {
    id: "10",
    name: "biblical",
    createDate: "2005-12-17T03:24:00",
    defs: [
      {
        id: "110",
        pos: PosEnum.NOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "10",
      },
    ],
  },
  {
    id: "4",
    name: "curry",
    createDate: "1999-12-17T03:24:00",
    defs: [
      {
        id: "14",
        pos: PosEnum.PRONOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "4",
      },
    ],
  },
  {
    id: "7",
    name: "dictation",
    createDate: "2002-12-17T03:24:00",
    defs: [
      {
        id: "17",
        pos: PosEnum.INTERJECTION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "7",
      },
    ],
  },
  {
    id: "5",
    name: "elaborate",
    createDate: "2000-12-17T03:24:00",
    defs: [
      {
        id: "15",
        pos: PosEnum.PREPOSITION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "5",
      },
    ],
  },
  {
    id: "1",
    name: "hypothesis",
    createDate: "1996-12-17T03:24:00",
    defs: [
      {
        id: "4",
        pos: PosEnum.VERB,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "1",
      },
      {
        id: "5",
        pos: PosEnum.VERB,
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        wordId: "1",
      },
      {
        id: "6",
        pos: PosEnum.VERB,
        def: "a formal speech:",
        image: "image1",
        wordId: "1",
      },
      {
        id: "7",
        pos: PosEnum.VERB,
        def: "to speak or write to someone:",
        image: "image1",
        wordId: "1",
      },
    ],
  },
  {
    id: "3",
    name: "longevity",
    createDate: "1998-12-17T03:24:00",
    defs: [
      {
        id: "13",
        pos: PosEnum.ADVERB,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "3",
      },
    ],
  },
  {
    id: "8",
    name: "occupation",
    createDate: "2003-12-17T03:24:00",
    defs: [
      {
        id: "18",
        pos: PosEnum.ELSE,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "8",
      },
    ],
  },
  {
    id: "0",
    name: "sport",
    createDate: "1995-12-17T03:24:00",
    defs: [
      {
        id: "0",
        pos: PosEnum.NOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "0",
      },
      {
        id: "1",
        pos: PosEnum.NOUN,
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        wordId: "0",
      },
      {
        id: "2",
        pos: PosEnum.NOUN,
        def: "a formal speech:",
        image: "image1",
        wordId: "0",
      },
      {
        id: "3",
        pos: PosEnum.NOUN,
        def: "to speak or write to someone:",
        image: "image1",
        wordId: "0",
      },
    ],
  },
  {
    id: "9",
    name: "valt",
    createDate: "2004-12-17T03:24:00",
    defs: [
      {
        id: "19",
        pos: PosEnum.IDIOM,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "9",
      },
    ],
  },
  {
    id: "6",
    name: "zap",
    createDate: "2001-12-17T03:24:00",
    defs: [
      {
        id: "16",
        pos: PosEnum.CONJUNCTION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "6",
      },
    ],
  },
];
const normalizedSortAscTestData = normalize(sortAscTestData, wordListSchema);
export const normalizedSortAscState: INormalizedState = Object.assign({}, initialNormalizedState,  {
  entities: normalizedSortAscTestData.entities,
  sortedWordList: normalizedSortAscTestData.result,
  displayedWordList: normalizedSortAscTestData.result,
  currentSort: SORT_ORDER.ALPHA_ASC,
});


// sort desc test data  
const sortDescTestData = [
  {
    id: "6",
    name: "zap",
    createDate: "2001-12-17T03:24:00",
    defs: [
      {
        id: "16",
        pos: PosEnum.CONJUNCTION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "6",
      },
    ],
  },
  {
    id: "9",
    name: "valt",
    createDate: "2004-12-17T03:24:00",
    defs: [
      {
        id: "19",
        pos: PosEnum.IDIOM,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "9",
      },
    ],
  },
  {
    id: "0",
    name: "sport",
    createDate: "1995-12-17T03:24:00",
    defs: [
      {
        id: "0",
        pos: PosEnum.NOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "0",
      },
      {
        id: "1",
        pos: PosEnum.NOUN,
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        wordId: "0",
      },
      {
        id: "2",
        pos: PosEnum.NOUN,
        def: "a formal speech:",
        image: "image1",
        wordId: "0",
      },
      {
        id: "3",
        pos: PosEnum.NOUN,
        def: "to speak or write to someone:",
        image: "image1",
        wordId: "0",
      },
    ],
  },
  {
    id: "8",
    name: "occupation",
    createDate: "2003-12-17T03:24:00",
    defs: [
      {
        id: "18",
        pos: PosEnum.ELSE,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "8",
      },
    ],
  },
  {
    id: "3",
    name: "longevity",
    createDate: "1998-12-17T03:24:00",
    defs: [
      {
        id: "13",
        pos: PosEnum.ADVERB,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "3",
      },
    ],
  },
  {
    id: "1",
    name: "hypothesis",
    createDate: "1996-12-17T03:24:00",
    defs: [
      {
        id: "4",
        pos: PosEnum.VERB,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "1",
      },
      {
        id: "5",
        pos: PosEnum.VERB,
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        wordId: "1",
      },
      {
        id: "6",
        pos: PosEnum.VERB,
        def: "a formal speech:",
        image: "image1",
        wordId: "1",
      },
      {
        id: "7",
        pos: PosEnum.VERB,
        def: "to speak or write to someone:",
        image: "image1",
        wordId: "1",
      },
    ],
  },
  {
    id: "5",
    name: "elaborate",
    createDate: "2000-12-17T03:24:00",
    defs: [
      {
        id: "15",
        pos: PosEnum.PREPOSITION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "5",
      },
    ],
  },
  {
    id: "7",
    name: "dictation",
    createDate: "2002-12-17T03:24:00",
    defs: [
      {
        id: "17",
        pos: PosEnum.INTERJECTION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "7",
      },
    ],
  },
  {
    id: "4",
    name: "curry",
    createDate: "1999-12-17T03:24:00",
    defs: [
      {
        id: "14",
        pos: PosEnum.PRONOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "4",
      },
    ],
  },
  {
    id: "10",
    name: "biblical",
    createDate: "2005-12-17T03:24:00",
    defs: [
      {
        id: "110",
        pos: PosEnum.NOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "10",
      },
    ],
  },
  {
    id: "2",
    name: "address",
    createDate: "1997-12-17T03:24:00",
    defs: [
      {
        id: "8",
        pos: PosEnum.ADJUCTIVE,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "2",
      },
    ],
  },
];
const normalizedSortDescTestData = normalize(sortDescTestData, wordListSchema);
export const normalizedSortDescState: INormalizedState = Object.assign({}, initialNormalizedState,  {
  entities: normalizedSortDescTestData.entities,
  sortedWordList: normalizedSortDescTestData.result,
  displayedWordList: normalizedSortDescTestData.result,
  currentSort: SORT_ORDER.ALPHA_DESC,
});

// sort date newer test data  
const sortDateNewerTestData = [
  {
    id: "10",
    name: "biblical",
    createDate: "2005-12-17T03:24:00",
    defs: [
      {
        id: "110",
        pos: PosEnum.NOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "10",
      },
    ],
  },
  {
    id: "9",
    name: "valt",
    createDate: "2004-12-17T03:24:00",
    defs: [
      {
        id: "19",
        pos: PosEnum.IDIOM,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "9",
      },
    ],
  },
  {
    id: "8",
    name: "occupation",
    createDate: "2003-12-17T03:24:00",
    defs: [
      {
        id: "18",
        pos: PosEnum.ELSE,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "8",
      },
    ],
  },
  {
    id: "7",
    name: "dictation",
    createDate: "2002-12-17T03:24:00",
    defs: [
      {
        id: "17",
        pos: PosEnum.INTERJECTION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "7",
      },
    ],
  },
  {
    id: "6",
    name: "zap",
    createDate: "2001-12-17T03:24:00",
    defs: [
      {
        id: "16",
        pos: PosEnum.CONJUNCTION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "6",
      },
    ],
  },
  {
    id: "5",
    name: "elaborate",
    createDate: "2000-12-17T03:24:00",
    defs: [
      {
        id: "15",
        pos: PosEnum.PREPOSITION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "5",
      },
    ],
  },
  {
    id: "4",
    name: "curry",
    createDate: "1999-12-17T03:24:00",
    defs: [
      {
        id: "14",
        pos: PosEnum.PRONOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "4",
      },
    ],
  },
  {
    id: "3",
    name: "longevity",
    createDate: "1998-12-17T03:24:00",
    defs: [
      {
        id: "13",
        pos: PosEnum.ADVERB,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "3",
      },
    ],
  },
  {
    id: "2",
    name: "address",
    createDate: "1997-12-17T03:24:00",
    defs: [
      {
        id: "8",
        pos: PosEnum.ADJUCTIVE,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "2",
      },
    ],
  },
  {
    id: "1",
    name: "hypothesis",
    createDate: "1996-12-17T03:24:00",
    defs: [
      {
        id: "4",
        pos: PosEnum.VERB,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "1",
      },
      {
        id: "5",
        pos: PosEnum.VERB,
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        wordId: "1",
      },
      {
        id: "6",
        pos: PosEnum.VERB,
        def: "a formal speech:",
        image: "image1",
        wordId: "1",
      },
      {
        id: "7",
        pos: PosEnum.VERB,
        def: "to speak or write to someone:",
        image: "image1",
        wordId: "1",
      },
    ],
  },
  {
    id: "0",
    name: "sport",
    createDate: "1995-12-17T03:24:00",
    defs: [
      {
        id: "0",
        pos: PosEnum.NOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "0",
      },
      {
        id: "1",
        pos: PosEnum.NOUN,
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        wordId: "0",
      },
      {
        id: "2",
        pos: PosEnum.NOUN,
        def: "a formal speech:",
        image: "image1",
        wordId: "0",
      },
      {
        id: "3",
        pos: PosEnum.NOUN,
        def: "to speak or write to someone:",
        image: "image1",
        wordId: "0",
      },
    ],
  },
];
const normalizedSortDateNewerTestData = normalize(sortDateNewerTestData, wordListSchema);
export const normalizedSortDateNewerState: INormalizedState = Object.assign({}, initialNormalizedState, {
  entities: normalizedSortDateNewerTestData.entities,
  sortedWordList: normalizedSortDateNewerTestData.result,
  displayedWordList: normalizedSortDateNewerTestData.result,
  currentSort: SORT_ORDER.DATE_NEWER,
})

// sort date newer test data  
const sortDateOlderTestData = [
  {
    id: "0",
    name: "sport",
    createDate: "1995-12-17T03:24:00",
    defs: [
      {
        id: "0",
        pos: PosEnum.NOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "0",
      },
      {
        id: "1",
        pos: PosEnum.NOUN,
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        wordId: "0",
      },
      {
        id: "2",
        pos: PosEnum.NOUN,
        def: "a formal speech:",
        image: "image1",
        wordId: "0",
      },
      {
        id: "3",
        pos: PosEnum.NOUN,
        def: "to speak or write to someone:",
        image: "image1",
        wordId: "0",
      },
    ],
  },
  {
    id: "1",
    name: "hypothesis",
    createDate: "1996-12-17T03:24:00",
    defs: [
      {
        id: "4",
        pos: PosEnum.VERB,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "1",
      },
      {
        id: "5",
        pos: PosEnum.VERB,
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        wordId: "1",
      },
      {
        id: "6",
        pos: PosEnum.VERB,
        def: "a formal speech:",
        image: "image1",
        wordId: "1",
      },
      {
        id: "7",
        pos: PosEnum.VERB,
        def: "to speak or write to someone:",
        image: "image1",
        wordId: "1",
      },
    ],
  },
  {
    id: "2",
    name: "address",
    createDate: "1997-12-17T03:24:00",
    defs: [
      {
        id: "8",
        pos: PosEnum.ADJUCTIVE,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "2",
      },
    ],
  },
  {
    id: "3",
    name: "longevity",
    createDate: "1998-12-17T03:24:00",
    defs: [
      {
        id: "13",
        pos: PosEnum.ADVERB,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "3",
      },
    ],
  },
  {
    id: "4",
    name: "curry",
    createDate: "1999-12-17T03:24:00",
    defs: [
      {
        id: "14",
        pos: PosEnum.PRONOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "4",
      },
    ],
  },
  {
    id: "5",
    name: "elaborate",
    createDate: "2000-12-17T03:24:00",
    defs: [
      {
        id: "15",
        pos: PosEnum.PREPOSITION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "5",
      },
    ],
  },
  {
    id: "6",
    name: "zap",
    createDate: "2001-12-17T03:24:00",
    defs: [
      {
        id: "16",
        pos: PosEnum.CONJUNCTION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "6",
      },
    ],
  },
  {
    id: "7",
    name: "dictation",
    createDate: "2002-12-17T03:24:00",
    defs: [
      {
        id: "17",
        pos: PosEnum.INTERJECTION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "7",
      },
    ],
  },
  {
    id: "8",
    name: "occupation",
    createDate: "2003-12-17T03:24:00",
    defs: [
      {
        id: "18",
        pos: PosEnum.ELSE,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "8",
      },
    ],
  },
  {
    id: "9",
    name: "valt",
    createDate: "2004-12-17T03:24:00",
    defs: [
      {
        id: "19",
        pos: PosEnum.IDIOM,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "9",
      },
    ],
  },
  {
    id: "10",
    name: "biblical",
    createDate: "2005-12-17T03:24:00",
    defs: [
      {
        id: "110",
        pos: PosEnum.NOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        wordId: "10",
      },
    ],
  },
];
const normalizedSortDateOlderTestData = normalize(sortDateOlderTestData, wordListSchema);
export const normalizedSortDateOlderState: INormalizedState = Object.assign({}, initialNormalizedState, {
  entities: normalizedSortDateOlderTestData.entities,
  sortedWordList: normalizedSortDateOlderTestData.result,
  displayedWordList: normalizedSortDateOlderTestData.result,
  currentSort: SORT_ORDER.DATE_OLDER,
});
