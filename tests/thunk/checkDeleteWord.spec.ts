import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import  checkDeleteWordWrapperThunk  from '../../src/thunk/checkDeleteWord';
import { initialNormalizedState } from '../../src/state/index';
import { INormalizedState } from '../../src/state/type';
import { toggleSearchWordModalActionCreator, toggleSelectWarningModalActionCreator, toggleDeleteConfirmModalActionCreator } from '../../src/actions/index';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('checkDeleteWord', function() {

  it('should dispatch toggleSelectWarningModalActionCreator when selectedWordList is empty and also check seearch word modal is closed when it is opened', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(Object.assign({}, initialNormalizedState,
      {
        selectedWordList: [],
        ui: {
          ...initialNormalizedState.ui,
          isSearchWordModalOpen: true,
        }
      }
    ));

    // dispatch with mock store
    store.dispatch<any>(checkDeleteWordWrapperThunk());
    // get dispatched actions
    const actions = store.getActions();

    // check search word modal action is dispatched 
    expect(actions[0]).toEqual(toggleSearchWordModalActionCreator(false));

    // check toggleSelectWarningModalActionCreator is dispatched
    expect(actions[1]).toEqual(toggleSelectWarningModalActionCreator(true));
  });

  it('should dispatch toggleDeleteConfirmModalActionCreator when selectedWordList is not empty', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(initialNormalizedState),

    // dispatch with mock store
    store.dispatch<any>(checkDeleteWordWrapperThunk());
    // get dispatched actions
    const actions = store.getActions();

    // check delete confirm modal action is dispatched
    expect(actions[0]).toEqual(toggleDeleteConfirmModalActionCreator(true));
  });
});




