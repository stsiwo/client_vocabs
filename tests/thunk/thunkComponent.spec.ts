import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import  tc1ThunkComponentWrapper  from '../../src/thunk/tc1';
import  tc2ThunkComponentWrapper  from '../../src/thunk/tc2';
import  tc3ThunkComponentWrapper  from '../../src/thunk/tc3';
import mainThunkComponentWrapper from '../../src/thunk/mainThunkComponent';
import applyThunkConditions from '../../src/thunk/thunkComponent';
import { initialNormalizedState } from '../../src/state/index';
import { INormalizedState } from '../../src/state/type';
import { toggleSearchWordModalActionCreator, toggleSelectWarningModalActionCreator, toggleDefineWarningModalActionCreator } from '../../src/actions/index';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('applyThunkConditions', function() {

  it('should dispatch toggleSelectWarningModalActionCreator, toggleSearchWordModalActionCreator, toggleDefineWarningModalActionCreator ', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(Object.assign({}, initialNormalizedState,
      {
      }
    ));

    const thunkWithConditions = applyThunkConditions(
      tc1ThunkComponentWrapper, 
      tc2ThunkComponentWrapper, 
      tc3ThunkComponentWrapper
    )(mainThunkComponentWrapper);

    store.dispatch<any>(thunkWithConditions("satoshi"));
    // dispatch with mock store
    //store.dispatch<any>(thunkComponents(t1WrapperThunk, t2WrapperThunk, t3WrapperThunk)("satoshi"));
    // get dispatched actions
    const actions = store.getActions();

    expect(actions[0]).toEqual(toggleSearchWordModalActionCreator(true));

    expect(actions[1]).toEqual(toggleSelectWarningModalActionCreator(true));

    expect(actions[2]).toEqual(toggleDefineWarningModalActionCreator(true));
  });

});


