import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import  editWordWrapperThunk  from '../../src/thunk/editWord';
import { initialNormalizedState } from '../../src/state/index';
import { INormalizedState } from '../../src/state/type';
import { toggleSearchWordModalActionCreator, toggleSelectWarningModalActionCreator } from '../../src/actions/index';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import history from '../../src/routeHistory';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('editWord', function() {

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
    store.dispatch<any>(editWordWrapperThunk());
    // get dispatched actions
    const actions = store.getActions();

    // check search word modal action is dispatched 
    expect(actions[0]).toEqual(toggleSearchWordModalActionCreator(false));

    // check toggleSelectWarningModalActionCreator is dispatched
    expect(actions[1]).toEqual(toggleSelectWarningModalActionCreator(true));
  });

  it('should invoke history.push function when selectedWordList is not empty', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(initialNormalizedState);

    /********************************************************
     * don't need to test history.push functionality which is to check successfully redirect to destination
     *  - so just spy and make sure the spy is called
     ********************************************************/
    const historySpy: SinonSpy = sinon.spy(history, 'push');
   
    // dispatch with mock store
    store.dispatch<any>(editWordWrapperThunk());

    // check delete confirm modal action is dispatched
    sinon.assert.calledOnce(historySpy);
  });
});

