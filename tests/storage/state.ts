import { normalizedState } from '../../src/state';
import { newWord, removedWord, updateWord } from './word'; 
import { newDef, removedDef, updateDef } from './def'; 
import { normalizeWordObject, normalizeWordsArray, initialState, normalizeDefsArray } from '../../src/state'; 

const normalizedNewWord = normalizeWordObject(newWord);

export const newWordAddedNormState = {
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
}

export const wordRemovedNormState = normalizeWordsArray(removedWord);

export const normalizedUpdateWord = normalizeWordObject(updateWord);

export const wordUpdateNormState = {
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
}

const copy = JSON.parse(JSON.stringify(initialState));
copy[0].defs = copy[0].defs.concat(newDef);
export const newDefAddedNormState = normalizeWordsArray(copy);


export const defRemovedNormState = normalizeWordsArray(removedDef);

export const normalizedUpdateDef = normalizeDefsArray(updateDef);

export const defUpdateNormState = {
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
}
      

