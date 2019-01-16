import { SortedWordListActionType, SearchKeyWordActionType, IChangeSortedWordListActionCreator } from '../../../src/actions/type';
import { IWordListItem } from '../../../src/domains/word';
//import * as fuzzysort from 'fuzzysort';
import { KeysResults } from './fuzzyType';
/**
 * changeSearchKeyWordWrapperThunk test data
 **/
export const changeSortedWordListActionDummy: IChangeSortedWordListActionCreator  = {
  type: SortedWordListActionType.CHANGE_SORTED_WORD_LIST, 
  nextSortedWordList: [],// result of fuzzy matching with initialNormalizedState 
}

export const searchKeyWordActionDummy = {
  type: SearchKeyWordActionType.CHANGE_SEARCH_TEXT,
  nextSearchKey: 'test', // check the value in test file
}


export const fuzzyResult: KeysResults<IWordListItem>  = [
  { 
    target: 'test2',
    _targetLowerCodes: null,
    _nextBeginningIndexes: null,
    score: -1,
    indexes: [ 0, 1, 2, 3 ],
    obj: { id: 2, name: 'test2', isChecked: false } 
  },
  { 
    target: 'test2',
    _targetLowerCodes: null,
    _nextBeginningIndexes: null,
    score: -1,
    indexes: [ 0, 1, 2, 3 ],
    obj: { id: 2, name: 'test2', isChecked: false } 
  },
  { 
    target: 'test2',
    _targetLowerCodes: null,
    _nextBeginningIndexes: null,
    score: -1,
    indexes: [ 0, 1, 2, 3 ],
    obj: { id: 2, name: 'test2', isChecked: false } 
  },
]
