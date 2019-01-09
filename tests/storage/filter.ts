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
  displayedWordList: [ 0, 10 ],
  currentSort: SORT_ORDER.ALPHA_ASC,
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
  displayedWordList: [ 1 ],
  currentSort: SORT_ORDER.ALPHA_ASC,
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
  displayedWordList: [ 2 ],
  currentSort: SORT_ORDER.ALPHA_ASC,
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
  displayedWordList: [ 3 ],
  currentSort: SORT_ORDER.ALPHA_ASC,
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
  displayedWordList: [ 4 ],
  currentSort: SORT_ORDER.ALPHA_ASC,
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
  displayedWordList: [ 5 ],
  currentSort: SORT_ORDER.ALPHA_ASC,
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
  displayedWordList: [ 6 ],
  currentSort: SORT_ORDER.ALPHA_ASC,
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
  displayedWordList: [ 7 ],
  currentSort: SORT_ORDER.ALPHA_ASC,
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
  displayedWordList: [ 8 ],
  currentSort: SORT_ORDER.ALPHA_ASC,
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
  displayedWordList: [ 9 ],
  currentSort: SORT_ORDER.ALPHA_ASC,
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
  displayedWordList: [ 0, 7, 8, 10 ],
  currentSort: SORT_ORDER.ALPHA_ASC,
  currentFilter: [ PosEnum.NOUN, PosEnum.ELSE, PosEnum.INTERJECTION ], 
});
