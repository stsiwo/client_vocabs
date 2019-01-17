import { normalize } from 'normalizr';
import { wordListSchema, initialWordList, initialNormalizedState } from '../../../src/state/index';
import { IWord } from '../../../src/domains/word';

export const removeWordActionInputTestData = "1";

const removedWordList: IWord[] = initialWordList.filter(( word: IWord ) => word.id !== removeWordActionInputTestData );

// normalize it
const normalizedRemovedWordList = normalize(removedWordList, wordListSchema);

// assign it to initialNormalizedState
//  - remove word action involve other state chagne (see reducers/handler.ts to see which state is involved in detail 
//  - displayedWordList
//  - selectedWordList
//  - sortedWordList
export const removeWordActionOutputTestData = Object.assign({}, initialNormalizedState, {
  entities: normalizedRemovedWordList.entities,
  selectedWordList: initialNormalizedState.selectedWordList.filter(( wordId: string ) => wordId !== removeWordActionInputTestData),
  sortedWordList: initialNormalizedState.sortedWordList.filter(( wordId: string ) => wordId !== removeWordActionInputTestData),
  displayedWordList: initialNormalizedState.displayedWordList.filter(( wordId: string ) => wordId !== removeWordActionInputTestData),
})
    



