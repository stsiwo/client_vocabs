import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import  openModalWrapperThunk  from '../../src/thunk/openModal';
import { initialNormalizedState } from '../../src/state/index';
import { INormalizedState } from '../../src/state/type';
import { AnyAction } from 'redux';
import * as toggleSearchWordModalWrapperThunk from '../../src/thunk/toggleSearchWordModal';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon'; 
import { toggleSearchWordModalWrapperThunkDummyFunc } from '../storage/thunk/toggleSearchWordModal';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('openModal', function() {
  //let store: MockStoreEnhanced;

  it('should call toggleSearchWordModalWrapperThunk and dispatch ActionCreator sent as arg with condition where isSearchWordModalOpen is open', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // apply the condition
    store = mockStore(Object.assign({}, initialNormalizedState, {
      sortedWordList: [1,2,3],
      ui: {
        ...initialNormalizedState.ui,
        isSearchWordModalOpen: true
      }
    }));
    // actionCreatorDummy
    const modalActionCreatorDummy: (isOpen: boolean) => AnyAction = (isOpen) => ({
      type: "modal_dummy_type"
    })

    // toggleSearchWordModalWrapperThunk stub
    /**
     * WHEN SPY, MOCK, STUB imported function or object, use like below
     * if using ES6, you have to import as default and assign object and its method as default like below and import as object ( like import * as ... )
     **/
    const toggleSearchWordModalWrapperThunkStub: SinonSpy = sinon.stub(toggleSearchWordModalWrapperThunk, 'default').callsFake(toggleSearchWordModalWrapperThunkDummyFunc)
    
    // dispatch with mock store
    store.dispatch<any>(openModalWrapperThunk(modalActionCreatorDummy));
    // get dispatched actions
    const actions = store.getActions();

    // verify closeSearchWordModalWrapperThunkSpy is called inside SUT
    sinon.assert.calledOnce(toggleSearchWordModalWrapperThunkStub);

    // should dispatch following actions
    expect(actions[0]).toEqual({ type: "dummy_thunk_action" });
    expect(actions[1]).toEqual({ type: "modal_dummy_type" });

  });

  it('should dispatch ActionCreator sent as arg with condition where isSearchWordModalOpen is false', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // apply the condition: isSearchWordModalOpen is false as default
    store = mockStore(initialNormalizedState);
    // actionCreatorDummy
    const modalActionCreatorDummy: (isOpen: boolean) => AnyAction = (isOpen) => ({
      type: "modal_dummy_type"
    })
    
    // dispatch with mock store
    store.dispatch<any>(openModalWrapperThunk(modalActionCreatorDummy));
    // get dispatched actions
    const actions = store.getActions();
    
    // second, mock action of modalActionCreatorDummy
    expect(actions[0]).toEqual({ type: "modal_dummy_type" });

  });
});

