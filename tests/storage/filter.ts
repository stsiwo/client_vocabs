import { PosEnum } from '../../src/domains/pos';
import { normalize } from 'normalizr';
import { wordListSchema, initialNormalizedState } from '../../src/state/index';
import { SORT_ORDER } from '../../src/enums';
import { initialWordList } from '../../src/state/index'; 

/**
 * filter test data 
 * noun
 **/
const normalizedFilterNounTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterNounState = Object.assign({}, initialNormalizedState , {
  entities: normalizedFilterNounTestData.entities,
  sortedWordList: [ 0, 10 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.NOUN ], 
});

/**
 * filter test data 
 * verb
 **/
const normalizedFilterVerbTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterVerbState = Object.assign({}, initialNormalizedState, {
  entities: normalizedFilterVerbTestData.entities,
  sortedWordList: [ 1 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.VERB ], 
});

/**
 * filter test data 
 * adjuctive
 **/
const normalizedFilterAdjuctiveTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterAdjuctiveState = Object.assign({}, initialNormalizedState, {
  entities: normalizedFilterAdjuctiveTestData.entities,
  sortedWordList: [ 2 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.ADJUCTIVE ], 
});

/**
 * filter test data 
 * adverb
 **/
const normalizedFilterAdverbTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterAdverbState = Object.assign({}, initialNormalizedState, {
  entities: normalizedFilterAdverbTestData.entities,
  sortedWordList: [ 3 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.ADVERB ], 
});

/**
 * filter test data 
 * pronoun
 **/
const normalizedFilterPronounTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterPronounState = Object.assign({}, initialNormalizedState, {
  entities: normalizedFilterPronounTestData.entities,
  sortedWordList: [ 4 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.PRONOUN ], 
});

/**
 * filter test data 
 * preposition
 **/
const normalizedFilterPrepositionTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterPrepositionState = Object.assign({}, initialNormalizedState, {
  entities: normalizedFilterPrepositionTestData.entities,
  sortedWordList: [ 5 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.PREPOSITION ], 
});

/**
 * filter test data 
 * conjunction
 **/
const normalizedFilterConjunctionTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterConjunctionState = Object.assign({}, initialNormalizedState, {
  entities: normalizedFilterConjunctionTestData.entities,
  sortedWordList: [ 6 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.CONJUNCTION ], 
});

/**
 * filter test data 
 * interjection
 **/
const normalizedFilterInterjectionTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterInterjectionState = Object.assign({}, initialNormalizedState, {
  entities: normalizedFilterInterjectionTestData.entities,
  sortedWordList: [ 7 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.INTERJECTION ], 
});

/**
 * filter test data 
 * else
 **/
const normalizedFilterElseTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterElseState = Object.assign({}, initialNormalizedState, {
  entities: normalizedFilterElseTestData.entities,
  sortedWordList: [ 8 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.ELSE ], 
});

/**
 * filter test data 
 * idiom
 **/
const normalizedFilterIdiomTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterIdiomState = Object.assign({}, initialNormalizedState, {
  entities: normalizedFilterIdiomTestData.entities,
  sortedWordList: [ 9 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.IDIOM ], 
});

/**
 * filter test data 
 * idiom
 **/
const normalizedFilterNounElseInterjectionTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterNounElseInterjectionState = Object.assign({}, initialNormalizedState, {
  entities: normalizedFilterNounElseInterjectionTestData.entities,
  sortedWordList: [ 0, 7, 8, 10 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.NOUN, PosEnum.ELSE, PosEnum.INTERJECTION ], 
});
