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

const normalizedToggleDeleteConfirmModalTestData = normalize(initialWordList, wordListSchema);

export const normalizedToggleDeleteConfirmModalState = Object.assign({}, initialNormalizedState,  {
  entities: normalizedToggleDeleteConfirmModalTestData.entities,
  ui: {
    ...initialNormalizedState.ui,
    isDeleteConfirmModalOpen: true,
  },
});

const normalizedToggleSortFilterModalTestData = normalize(initialWordList, wordListSchema);

export const normalizedToggleSortFilterModalState = Object.assign({}, initialNormalizedState,  {
  entities: normalizedToggleSortFilterModalTestData.entities,
  ui: {
    ...initialNormalizedState.ui,
    isSortFilterModalOpen: true,
  },
});

const normalizedToggleSearchWordModalTestData = normalize(initialWordList, wordListSchema);

export const normalizedToggleSearchWordModalState = Object.assign({}, initialNormalizedState,  {
  entities: normalizedToggleSearchWordModalTestData.entities,
  ui: {
    ...initialNormalizedState.ui,
    isSearchWordModalOpen: true,
  },
});
