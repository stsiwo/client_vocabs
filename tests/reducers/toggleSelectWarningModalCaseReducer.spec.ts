import { rootReducer } from '../../src/reducers/rootReducer'; 
import { toggleSelectWarningModalActionCreator } from '../../src/actions/index';
import { initialStateRecordFactory } from '../storage/state/initialState';

describe('toggleSelectWarningModalCaseReducer', () => {

  const initialStateRecord = initialStateRecordFactory();

  it('should change ui.isSelectWarningModalOpen to true  ', () => {
    expect(rootReducer(initialStateRecord, toggleSelectWarningModalActionCreator(true)).get('ui').get('isSelectWarningModalOpen')).toEqual(true)
  })

  it('should change ui.isSelectWarningModalOpen to false  ', () => {
    expect(rootReducer(initialStateRecord, toggleSelectWarningModalActionCreator(false)).get('ui').get('isSelectWarningModalOpen')).toEqual(false)
  })
})


