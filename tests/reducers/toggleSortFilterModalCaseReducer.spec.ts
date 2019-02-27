import { rootReducer } from '../../src/reducers/rootReducer'; 
import { toggleSortFilterModalActionCreator } from '../../src/actions/index';
import { initialStateRecordFactory } from '../storage/state/initialState';

describe('toggleSortFilterModalCaseReducer', () => {

  const initialStateRecord = initialStateRecordFactory();

  it('should change ui.isSortFilterModalOpen to true  ', () => {
    expect(rootReducer(initialStateRecord, toggleSortFilterModalActionCreator(true)).get('ui').get('isSortFilterModalOpen')).toEqual(true)
  })

  it('should change ui.isSortFilterModalOpen to false  ', () => {
    expect(rootReducer(initialStateRecord, toggleSortFilterModalActionCreator(false)).get('ui').get('isSortFilterModalOpen')).toEqual(false)
  })
})



