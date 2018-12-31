import { PosEnum } from '../../src/domains/pos';
import { normalize } from 'normalizr';
import { wordListSchema } from '../../src/state/index';
import { SORT_ORDER } from '../../src/enums';
import { initialWordList } from '../../src/state/index'; 
// filter noun

const normalizedFilterNounTestData = normalize(initialWordList, wordListSchema);
export const normalizedFilterNounState = {
  entities: normalizedFilterNounTestData.entities,
  sortedWordList: [ 0, 10 ],
  // current Sort value comes from previous test but does not matter because filter change should not affect sort change
  currentSort: SORT_ORDER.DATE_OLDER,
  currentFilter: [ PosEnum.NOUN ], 
}
