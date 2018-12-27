import { normalizedState } from '../../src/state';
import { newWord } from './word'; 
import { normalizeWordObject } from '../../src/state'; 

const normalizedNewWord = normalizeWordObject(newWord);

export const newWordAddedState = {
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


      

