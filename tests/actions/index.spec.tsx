import { WordActionType } from '../../src/actions/type'; 
import { addNewWordAction } from '../../src/actions'; 
import { newWord, normalizedNewWord } from '../storage/word';

describe('addNewWordAction', () => {
  it('should create an action to add a todo', () => {

    const expectedAction = {
      type: WordActionType.ADD_NEW_WORD,
      entities: normalizedNewWord.entities,      
    }
    expect(addNewWordAction(newWord)).toEqual(expectedAction)
  })

  // dismiss the rest of action test
})
