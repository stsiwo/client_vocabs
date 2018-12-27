import { addNewWordAction } from '../../src/actions';
import { WordsActionType } from '../../src/actions/type'; 
import { newWord } from '../storage/word';

describe('addNewWordAction', () => {
  it('should create an action to add a todo', () => {
    
    const expectedAction = {
      type: WordsActionType.ADD_NEW_WORD,
      input: newWord,
    }
    expect(addNewWordAction(newWord)).toEqual(expectedAction)
  })
})
