import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import saveMainThunk from '../../src/thunk/mains/save';
import { initialNormalizedState } from '../../src/state/index';
import { INormalizedState } from '../../src/state/type';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('saveMainThunk', function() {

  it('single condition and change the action in main thunk', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(Object.assign({}, initialNormalizedState,
      {
      }
    ));


    store.dispatch<any>(saveMainThunk("satoshi"));
    // dispatch with mock store
    //store.dispatch<any>(thunkComponents(t1WrapperThunk, t2WrapperThunk, t3WrapperThunk)("satoshi"));
    // get dispatched actions
    //const actions = store.getActions();

    //expect(actions[0]).toEqual(toggleWordFormErrorActionCreator(true));

  });

});

