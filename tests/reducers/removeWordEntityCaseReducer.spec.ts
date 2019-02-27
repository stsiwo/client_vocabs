import { rootReducer } from '../../src/reducers/rootReducer'; 
import { removeWordActionCreator } from '../../src/actions/index';
import { initialStateRecordFactory } from '../storage/state/initialState';
import { IWord } from '../../src/domains/word';

describe('removeWordEntityCaseReducer', () => {

  const initialStateRecord = initialStateRecordFactory();

  it('should change ui.isDeleteConfirmModalOpen to true  ', () => {
    
    const targetWordIdDummy = "1";

    expect(rootReducer(initialStateRecord, removeWordActionCreator(targetWordIdDummy)).get('entities').get('words').find(( word: IWord, wordId: string ) => wordId === targetWordIdDummy)).toEqual(undefined)
  })
})


