import { normalize } from 'normalizr';
import { wordListSchema, initialNormalizedState, initialWordList } from '../../src/state/index';

// prepare normalized data 
const normalizedState = normalize(initialWordList, wordListSchema);

// individual word name click 
export const normalizedToggleSelectWordState = Object.assign({}, initialNormalizedState,  {
  entities: normalizedState.entities,
  selectedWordList: ["0","2","3"],
});

// random word name click (is it necessary?)
export const normalizedToggleSelectWordRandomState = Object.assign({}, initialNormalizedState,  {
  entities: normalizedState.entities,
  selectedWordList: ["0","2","5","7"],
});

export const normalizedAddSelectWordState = Object.assign({}, initialNormalizedState,  {
  entities: normalizedState.entities,
  selectedWordList: ["0","1","2","3","10"],
});

// select all icon click (case A: return all values)
export const normalizedSelectAllWordState = Object.assign({}, initialNormalizedState,  {
  entities: normalizedState.entities,
  selectedWordList: ["0","1","2","3","4","5","6","7","8","9","10"],
});

// select all icon click (case B: emptify)
export const normalizedEmptifyWordState = Object.assign({}, initialNormalizedState,  {
  entities: normalizedState.entities,
  selectedWordList: [],
});
