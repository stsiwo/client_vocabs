import { initialWordList, wordListSchema, initialNormalizedState } from '../../src/state/index';
import { normalize } from 'normalizr';

const normalizedToggleSelectWarningModalTestData = normalize(initialWordList, wordListSchema);

export const normalizedToggleSelectWarningModalState = Object.assign({}, initialNormalizedState,  {
  entities: normalizedToggleSelectWarningModalTestData.entities,
  ui: {
    ...initialNormalizedState.ui,
    isSelectWarningModalOpen: true,
  },
});

