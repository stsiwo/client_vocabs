import { rootReducer } from '../../src/reducers/rootReducer'; 
import { toggleSearchWordModalActionCreator } from '../../src/actions/index';
import { initialStateRecordFactory } from '../storage/state/initialState';

describe('toggleSearchWordModalCaseReducer', () => {

  const initialStateRecord = initialStateRecordFactory();

  it('should change ui.isSearchWordModalOpen to true  ', () => {
    expect(rootReducer(initialStateRecord, toggleSearchWordModalActionCreator(true)).get('ui').get('isSearchWordModalOpen')).toEqual(true)
  })

  it('should change ui.isSearchWordModalOpen to false  ', () => {
    expect(rootReducer(initialStateRecord, toggleSearchWordModalActionCreator(false)).get('ui').get('isSearchWordModalOpen')).toEqual(false)
  })
})



