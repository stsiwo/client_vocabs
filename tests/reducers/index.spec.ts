import { rootReducer } from '../../src/reducers'; 
import { normalizedState } from '../../src/state';
import { AnyAction } from 'redux';
import { newWord, updateWord } from '../storage/word';
import { newDef, updateDef } from '../storage/def'; 
import { addNewWordAction, removeWordAction, updateWordAction, addNewDefAction, removeDefAction, updateDefAction } from '../../src/actions/type'; 
import { SORT_ORDER } from '../../src/enums';
import { newWordAddedNormState, wordRemovedNormState, wordUpdateNormState, newDefAddedNormState, defRemovedNormState, defUpdateNormState, normalizedSortAscState } from '../storage/state';
import { changeSortWrapperThunk } from '../../src/reducers/thunk';
import store from '../../src/storeConfig';

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

  it('should return new state (changed sort of wordlist to alpha asc)', () => {
    // this use thunk to call sort change action 
    // thunk is needed because two split state are needed to update ( words and sortedWordList )
    // to test this, need to test thunk and reducers 
    // 1. call dispatch with thunk
    // 2. then get updated state from stor
    // 3. compared with test data
    store.dispatch<any>(changeSortWrapperThunk(SORT_ORDER.ALPHA_ASC))
 //console.log(JSON.stringify(store.getState(),null,2));   
    // should work fine without <any> since I defined ThunkAction but does not work, so use as last resort
    expect(store.getState()).toEqual(normalizedSortAscState);
  })
})

