import { initialWordList, initialNormalizedState } from '../../../src/state/index';
import { IWord } from '../../../src/domains/word';

export const wordsTestData = initialWordList.filter(( word ) => initialNormalizedState.selectedWordList.includes( word.id )).sort(( a: IWord, b: IWord) => {
  if (a.id < b.id)
    return -1;
  if (a.id > b.id)
    return 1;
  return 0;
});
