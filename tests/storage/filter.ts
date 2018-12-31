import { PosEnum } from '../../src/domains/pos';
import { normalize } from 'normalizr';
import { wordListSchema } from '../../src/state/index';
import { SORT_ORDER } from '../../src/enums';
import { initialWordList } from '../../src/state/index'; 

/**
 * filter test data 
 * noun
 **/
const normalizedFilterNounTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterNounState = {
  entities: normalizedFilterNounTestData.entities,
  sortedWordList: [ 0, 10 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.NOUN ], 
}

/**
 * filter test data 
 * verb
 **/
const normalizedFilterVerbTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterVerbState = {
  entities: normalizedFilterVerbTestData.entities,
  sortedWordList: [ 1 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.VERB ], 
}

/**
 * filter test data 
 * adjuctive
 **/
const normalizedFilterAdjuctiveTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterAdjuctiveState = {
  entities: normalizedFilterAdjuctiveTestData.entities,
  sortedWordList: [ 2 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.ADJUCTIVE ], 
}

/**
 * filter test data 
 * adverb
 **/
const normalizedFilterAdverbTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterAdverbState = {
  entities: normalizedFilterAdverbTestData.entities,
  sortedWordList: [ 3 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.ADVERB ], 
}

/**
 * filter test data 
 * pronoun
 **/
const normalizedFilterPronounTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterPronounState = {
  entities: normalizedFilterPronounTestData.entities,
  sortedWordList: [ 4 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.PRONOUN ], 
}

/**
 * filter test data 
 * preposition
 **/
const normalizedFilterPrepositionTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterPrepositionState = {
  entities: normalizedFilterPrepositionTestData.entities,
  sortedWordList: [ 5 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.PREPOSITION ], 
}

/**
 * filter test data 
 * conjunction
 **/
const normalizedFilterConjunctionTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterConjunctionState = {
  entities: normalizedFilterConjunctionTestData.entities,
  sortedWordList: [ 6 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.CONJUNCTION ], 
}

/**
 * filter test data 
 * interjection
 **/
const normalizedFilterInterjectionTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterInterjectionState = {
  entities: normalizedFilterInterjectionTestData.entities,
  sortedWordList: [ 7 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.INTERJECTION ], 
}

/**
 * filter test data 
 * else
 **/
const normalizedFilterElseTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterElseState = {
  entities: normalizedFilterElseTestData.entities,
  sortedWordList: [ 8 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.ELSE ], 
}

/**
 * filter test data 
 * idiom
 **/
const normalizedFilterIdiomTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterIdiomState = {
  entities: normalizedFilterIdiomTestData.entities,
  sortedWordList: [ 9 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.IDIOM ], 
}

