import { rootReducer } from '../../src/reducers/rootReducer'; 
import { normalizedState } from '../../src/state';
import { AnyAction } from 'redux';
import { newWord, updateWord } from '../storage/word';
import { newDef, updateDef } from '../storage/def'; 
import { 
  addNewWordAction, 
  removeWordAction, 
  updateWordAction, 
  addNewDefAction, 
  removeDefAction, 
  updateDefAction, 
  toggleSelectWarningModalAction, 
  toggleDeleteConfirmModalAction,
  toggleSortFilterModalAction, 
  toggleSearchWordModalAction
} from '../../src/actions'; 
import { SORT_ORDER } from '../../src/enums';
import { 
  newWordAddedNormState, 
  wordRemovedNormState, 
  wordUpdateNormState, 
  newDefAddedNormState, 
  defRemovedNormState, 
  defUpdateNormState, 
  normalizedSortAscState, 
  normalizedSortDescState, 
  normalizedSortDateNewerState, 
  normalizedSortDateOlderState 
} from '../storage/state';
import { 
  normalizedFilterNounState, 
  normalizedFilterVerbState, 
  normalizedFilterAdjuctiveState, 
  normalizedFilterAdverbState, 
  normalizedFilterPronounState, 
  normalizedFilterPrepositionState, 
  normalizedFilterInterjectionState, 
  normalizedFilterConjunctionState, 
  normalizedFilterElseState, 
  normalizedFilterIdiomState, 
  normalizedFilterNounElseInterjectionState 
} from '../storage/filter';
import {
  normalizedToggleSelectWarningModalState,
  normalizedToggleDeleteConfirmModalState,
  normalizedToggleSortFilterModalState,
  normalizedToggleSearchWordModalState
} from '../storage/ui';
import { changeSortWrapperThunk, changeFilterWrapperThunk } from '../../src/reducers/thunk';
import store from '../../src/storeConfig';
import { PosEnum } from '../../src/domains/pos';

//const log = (input: any) => console.log(JSON.stringify(input, null, 2));

describe('rootReducer', () => {
  it('should return initial state', () => {
    const emptyAction: AnyAction = {
      type: "empty_action", 
      input: {},
    } 
    
    expect(rootReducer(undefined, emptyAction)).toEqual(normalizedState)
  })

  it('should return new state (added new word)', () => {
    expect(rootReducer(undefined, addNewWordAction(newWord))).toEqual(newWordAddedNormState)
  })

  it('should return new state (removed a particular word)', () => {
    expect(rootReducer(undefined, removeWordAction(1))).toEqual(wordRemovedNormState)
  })

  it('should return new state (updated a particular word)', () => {
    expect(rootReducer(undefined, updateWordAction(updateWord))).toEqual(wordUpdateNormState)
  })

  it('should return new state (added new def to a particular word)', () => {
    expect(rootReducer(undefined, addNewDefAction(newDef))).toEqual(newDefAddedNormState)
  })

  it('should return new state (removed a particular def)', () => {
    expect(rootReducer(undefined, removeDefAction(1, 0))).toEqual(defRemovedNormState)
  })

  it('should return new state (updated a particular def)', () => {
    expect(rootReducer(undefined, updateDefAction(updateDef))).toEqual(defUpdateNormState)
  })

  // thunk -- sort --- 
  it('should return new state (changed sort of wordlist to alpha asc)', () => {
    // this use thunk to call sort change action 
    // thunk is needed because two split state are needed to update ( words and sortedWordList )
    // to test this, need to test thunk and reducers 
    // 1. call dispatch with thunk
    // 2. then get updated state from stor
    // 3. compared with test data
    store.dispatch<any>(changeSortWrapperThunk(SORT_ORDER.ALPHA_ASC))
    // should work fine without <any> since I defined ThunkAction but does not work, so use as last resort
    expect(store.getState()).toEqual(normalizedSortAscState);
  })

  it('should return new state (changed sort of wordlist to alpha desc)', () => {
    store.dispatch<any>(changeSortWrapperThunk(SORT_ORDER.ALPHA_DESC))
    expect(store.getState()).toEqual(normalizedSortDescState);
  })

  it('should return new state (changed sort of wordlist to date newer)', () => {
    store.dispatch<any>(changeSortWrapperThunk(SORT_ORDER.DATE_NEWER))
    expect(store.getState()).toEqual(normalizedSortDateNewerState);
  })

  it('should return new state (changed sort of wordlist to date older)', () => {
    store.dispatch<any>(changeSortWrapperThunk(SORT_ORDER.DATE_OLDER))
    expect(store.getState()).toEqual(normalizedSortDateOlderState);
  })

  /**
   * thunk -- filter -- 
   * currentSort state come from previous test case so it should be 4 but this does not matter because it shouldn't affect change of sort to change of filter vice versa so just leave it alone
   **/
  it('should return new state (changed filter of wordlist to only noun)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.NOUN ]))
    expect(store.getState()).toEqual(normalizedFilterNounState);
  })
  
  it('should return new state (changed filter of wordlist to only verb)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.VERB ]))
    expect(store.getState()).toEqual(normalizedFilterVerbState);
  })

  it('should return new state (changed filter of wordlist to only adjuctive)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.ADJUCTIVE ]))
    expect(store.getState()).toEqual(normalizedFilterAdjuctiveState);
  })
  
  it('should return new state (changed filter of wordlist to only advrb)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.ADVERB ]))
    expect(store.getState()).toEqual(normalizedFilterAdverbState);
  })

  it('should return new state (changed filter of wordlist to only pronoun)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.PRONOUN ]))
    expect(store.getState()).toEqual(normalizedFilterPronounState);
  })
  
  it('should return new state (changed filter of wordlist to only conjunction)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.CONJUNCTION ]))
    expect(store.getState()).toEqual(normalizedFilterConjunctionState);
  })

  it('should return new state (changed filter of wordlist to only interjection)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.INTERJECTION ]))
    expect(store.getState()).toEqual(normalizedFilterInterjectionState);
  })
  
  it('should return new state (changed filter of wordlist to only preposition)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.PREPOSITION ]))
    expect(store.getState()).toEqual(normalizedFilterPrepositionState);
  })

  it('should return new state (changed filter of wordlist to only else)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.ELSE ]))
    expect(store.getState()).toEqual(normalizedFilterElseState);
  })
  
  it('should return new state (changed filter of wordlist to only idiom)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.IDIOM ]))
    expect(store.getState()).toEqual(normalizedFilterIdiomState);
  })

  // filter some combination (random)
  it('should return new state (changed filter of wordlist to noun, else, interjection)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.NOUN, PosEnum.ELSE, PosEnum.INTERJECTION ]))
    expect(store.getState()).toEqual(normalizedFilterNounElseInterjectionState);
  })

})

describe('rootReducer UI state test', () => {
  // ui toggle modal
  it('should return new state (changed ui.isSelectWarningModalOpen to true', () => {
    expect(rootReducer(undefined, toggleSelectWarningModalAction(true))).toEqual(normalizedToggleSelectWarningModalState)
  })

  it('should return new state (changed ui.isDeleteConfirmModalOpen to true', () => {
    expect(rootReducer(undefined, toggleDeleteConfirmModalAction(true))).toEqual(normalizedToggleDeleteConfirmModalState)
  })

  it('should return new state (changed ui.isSortFilterModalOpen to true', () => {
    expect(rootReducer(undefined, toggleSortFilterModalAction(true))).toEqual(normalizedToggleSortFilterModalState)
  })

  it('should return new state (changed ui.isSearchWordModalOpen to true', () => {
    expect(rootReducer(undefined, toggleSearchWordModalAction(true))).toEqual(normalizedToggleSearchWordModalState)
  })
})

