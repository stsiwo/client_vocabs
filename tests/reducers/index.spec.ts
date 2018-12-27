import { rootReducer } from '../../src/reducers'; 
import { normalizedState } from '../../src/state';
import { AnyAction } from 'redux';
import { newWord } from '../storage/word';
import { addNewWordAction } from '../../src/actions/type'; 
import { newWordAddedState } from '../storage/state';


describe('rootReducer', () => {
  it('should return initial state', () => {
    const emptyAction: AnyAction = {
      type: "empty_action", 
      input: {},
    } 
    
    expect(rootReducer(undefined, emptyAction)).toEqual(normalizedState)
  })

  it('should return new state (added new word)', () => {
    expect(rootReducer(undefined, addNewWordAction(newWord))).toEqual(newWordAddedState)
  })


})

