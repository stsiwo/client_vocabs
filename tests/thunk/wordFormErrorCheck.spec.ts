import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import  wordFormErrorCheckWrapperThunk  from '../../src/thunk/wordFormErrorCheck';
import { initialNormalizedState } from '../../src/state/index';
import { INormalizedState } from '../../src/state/type';
import { toggleDefineWarningModalActionCreator } from '../../src/actions/index';
import { SinonSpy } from 'sinon';
import * as sinon from 'sinon';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('wordFormErrorCheck', function() {

  it('should dispatch toggleDefineWarningModalActionCreator when wordFormError is true', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(Object.assign({}, initialNormalizedState,
      {
        wordFormError: true,
      }
    ));
    // prep callback dummy
    const callbackDummy: () => void = () => {};

    // dispatch with mock store
    store.dispatch<any>(wordFormErrorCheckWrapperThunk(callbackDummy));
    // get dispatched actions
    const actions = store.getActions();

    // check ui.isDefineWarningModalOpen is true 
    expect(actions[0]).toEqual(toggleDefineWarningModalActionCreator(true));

  });

  it('should invoke callback when wordFormError is false', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(Object.assign({}, initialNormalizedState,
      {
        wordFormError: false,
      }
    ));
    // prep callback dummy
    const callbackSpy: SinonSpy = sinon.spy();

    // dispatch with mock store
    store.dispatch<any>(wordFormErrorCheckWrapperThunk(callbackSpy));
    // get dispatched actions
    const actions = store.getActions();

    // check actions is empty  
    expect(actions).toEqual([]);

    // expect callbackSpy is called
    sinon.assert.calledOnce(callbackSpy);

  });

});





