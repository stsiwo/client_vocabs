import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import  t1WrapperThunk  from '../../src/thunk/tc1';
import  t2WrapperThunk  from '../../src/thunk/tc2';
import  t3WrapperThunk  from '../../src/thunk/tc3';
import thunkComponents from '../../src/thunk/thunkComponent';
import { initialNormalizedState } from '../../src/state/index';
import { INormalizedState } from '../../src/state/type';
import { toggleSearchWordModalActionCreator, toggleSelectWarningModalActionCreator, toggleDefineWarningModalActionCreator } from '../../src/actions/index';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('thunkComponent (tc1, tc2, tc3)', function() {

  it('should dispatch toggleSelectWarningModalActionCreator, toggleSearchWordModalActionCreator, toggleDefineWarningModalActionCreator ', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(Object.assign({}, initialNormalizedState,
      {
      }
    ));

    console.log(thunkComponents(t1WrapperThunk, t2WrapperThunk, t3WrapperThunk).toString());

    // dispatch with mock store
    //store.dispatch<any>(thunkComponents(t1WrapperThunk, t2WrapperThunk, t3WrapperThunk)("satoshi"));
    store.dispatch<any>(toggleSearchWordModalActionCreator(true));
    // get dispatched actions
    const actions = store.getActions();

    expect(actions[0]).toEqual(toggleSearchWordModalActionCreator(true));

    expect(actions[1]).toEqual(toggleSelectWarningModalActionCreator(true));

    expect(actions[2]).toEqual(toggleDefineWarningModalActionCreator(true));
  });

});


