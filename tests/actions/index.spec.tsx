import { addNewWordAction } from '../../src/actions';
import { WordActionType } from '../../src/actions/type'; 
import { newWord } from '../storage/word';

describe('addNewWordAction', () => {
  it('should create an action to add a todo', () => {
    
    const expectedAction = {
      type: WordActionType.ADD_NEW_WORD,
      input: newWord,
    }
    expect(addNewWordAction(newWord)).toEqual(expectedAction)
  })
})
