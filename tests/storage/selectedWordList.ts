import { normalize } from 'normalizr';
import { wordListSchema, initialNormalizedState, initialWordList } from '../../src/state/index';

const normalizedToggleSelectWordTestData = normalize(initialWordList, wordListSchema);

export const normalizedToggleSelectWordState = Object.assign({}, initialNormalizedState,  {
  entities: normalizedToggleSelectWordTestData.entities,
  selectedWordList: [0,2,3],
});

const normalizedToggleSelectWordRandomTestData = normalize(initialWordList, wordListSchema);

export const normalizedToggleSelectWordRandomState = Object.assign({}, initialNormalizedState,  {
  entities: normalizedToggleSelectWordRandomTestData.entities,
  selectedWordList: [0,2,5,7],
});
