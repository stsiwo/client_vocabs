import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import  removeWordWrapperThunk  from '../../src/thunk/removeWord';
import { initialStateRecordFactory } from '../storage/state/initialState';
import { IState } from '../../src/state/type';
import { removeWordActionCreator, toggleDeleteConfirmModalActionCreator } from '../../src/actions/index';
import { Record } from 'immutable';

const mockStore = configureMockStore<Record<IState>>([thunk]);

describe('removeWord', function() {

  it('should dispatch removeWordActionCreator as same time as the size of selectedWordList', () => {
    let store: MockStoreEnhanced<Record<IState>, {}>;

    // mock store with initialNormalizedState
    store = mockStore(initialStateRecordFactory());

    // dispatch with mock store
    store.dispatch<any>(removeWordWrapperThunk());
    // get dispatched actions
    const actions = store.getActions();

    //  since initialNormalizedState.selectedWordList contains 4 elements so dispatch the action 4 times
    store.getState().get('selectedWordList').forEach(( deleteWordId, index ) => {
      expect(actions[index]).toEqual(removeWordActionCreator(deleteWordId));
    });

    expect(actions).toEqual(expect.arrayContaining([ toggleDeleteConfirmModalActionCreator(false) ]));
  });
});



