import { rootReducer } from '../../src/reducers/rootReducer'; 
import { toggleDeleteConfirmModalActionCreator } from '../../src/actions/index';
import { initialStateRecordFactory } from '../storage/state/initialState';

describe('toggleDeleteConfirmModalCaseReducer', () => {

  const initialStateRecord = initialStateRecordFactory();

  it('should change ui.isDeleteConfirmModalOpen to true  ', () => {
    expect(rootReducer(initialStateRecord, toggleDeleteConfirmModalActionCreator(true)).get('ui').get('isDeleteConfirmModalOpen')).toEqual(true)
  })

  it('should change ui.isDeleteConfirmModalOpen to false  ', () => {
    expect(rootReducer(initialStateRecord, toggleDeleteConfirmModalActionCreator(false)).get('ui').get('isDeleteConfirmModalOpen')).toEqual(false)
  })
})

