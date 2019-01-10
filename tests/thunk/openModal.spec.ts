import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { openModalWrapperThunk } from '../../src/thunk/openModal';
import { initialNormalizedState } from '../../src/state/index';
import { INormalizedState } from '../../src/state/type';
import { AnyAction } from 'redux';
//import * as closeSearchWordModalWrapperThunk from '../../src/thunk/closeSearchWordModal';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon'; 
import { toggleSearchWordModalAction, changeDisplayedWordListAction } from '../../src/actions/index';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('openModal', function() {
  //let store: MockStoreEnhanced;

  it('should call closeSearchWordModalWrapperThunk and dispatch ActionCreator sent as arg with condition where isSearchWordModalOpen is open', () => {
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

    // closeSearchWordModalWrapperThunk spy
    /**
     * WHEN SPY, MOCK, STUB imported function or object, use like below
     * if using ES6, you have to import as default and assign object and its method as default like below and import as object ( like import * as ... )
     **/
    //const closeSearchWordModalWrapperThunkSpy: SinonSpy = sinon.spy(closeSearchWordModalWrapperThunk, 'default');
    
    // dispatch with mock store
    store.dispatch<any>(openModalWrapperThunk(modalActionCreatorDummy));
    // get dispatched actions
    const actions = store.getActions();

    // verify closeSearchWordModalWrapperThunkSpy is called inside SUT
    //sinon.assert.calledOnce(closeSearchWordModalWrapperThunkSpy);

    // should dispatch following actions
    expect(actions[0]).toEqual(toggleSearchWordModalAction(false));
    expect(actions[1]).toEqual(changeDisplayedWordListAction([1,2,3]));
    expect(actions[2]).toEqual({ type: "modal_dummy_type" });

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

