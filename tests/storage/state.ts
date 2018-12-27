import { normalizedState } from '../../src/state';
import { newWord, removedWord, updateWord } from './word'; 
import { normalizeWordObject, normalizeWordsArray } from '../../src/state'; 

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

      

