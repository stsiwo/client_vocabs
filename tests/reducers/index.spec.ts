import { rootReducer } from '../../src/reducers'; 
import { normalizedState } from '../../src/state';
import { AnyAction } from 'redux';
import { newWord, updateWord } from '../storage/word';
import { newDef, updateDef } from '../storage/def'; 
import { addNewWordAction, removeWordAction, updateWordAction, addNewDefAction, removeDefAction, updateDefAction } from '../../src/actions/type'; 
import { newWordAddedNormState, wordRemovedNormState, wordUpdateNormState, newDefAddedNormState, defRemovedNormState, defUpdateNormState } from '../storage/state';

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
})

