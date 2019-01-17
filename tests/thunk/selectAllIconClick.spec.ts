import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import selectAllIconClickWrapperThunk from '../../src/thunk/selectAllIconClick';
import { initialNormalizedState } from '../../src/state/index';
import { INormalizedState } from '../../src/state/type';
import * as toggleSearchWordModalWrapperThunk from '../../src/thunk/toggleSearchWordModal';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon'; 
import { toggleSearchWordModalWrapperThunkDummyFunc } from '../storage/thunk/toggleSearchWordModal';
import { selectAllSelectedWordListActionCreator } from '../../src/actions/index';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('openModal', function() {
  //let store: MockStoreEnhanced;

  it('should call toggleSearchWordModalWrapperThunk and dispatch selectAllSelectedWordListActionCreator sent as arg with condition where isSearchWordModalOpen is open', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // apply the condition
    store = mockStore(Object.assign({}, initialNormalizedState, {
      sortedWordList: ["1","2","3"],
      ui: {
        ...initialNormalizedState.ui,
        isSearchWordModalOpen: true
      }
    }));

    // toggleSearchWordModalWrapperThunk stub
    /**
     * WHEN SPY, MOCK, STUB imported function or object, use like below
     * if using ES6, you have to import as default and assign object and its method as default like below and import as object ( like import * as ... )
     **/
    const toggleSearchWordModalWrapperThunkStub: SinonSpy = sinon.stub(toggleSearchWordModalWrapperThunk, 'default').callsFake(toggleSearchWordModalWrapperThunkDummyFunc)
    
    // dispatch with mock store
    store.dispatch<any>(selectAllIconClickWrapperThunk());
    // get dispatched actions
    const actions = store.getActions();
    const { sortedWordList } = store.getState();

    // verify closeSearchWordModalWrapperThunkSpy is called inside SUT
    sinon.assert.calledOnce(toggleSearchWordModalWrapperThunkStub);

    // should dispatch following actions
    expect(actions[0]).toEqual({ type: "dummy_thunk_action" });
    expect(actions[1]).toEqual(selectAllSelectedWordListActionCreator(sortedWordList));

  });

  it('should dispatch selectAllSelectedWordListActionCreator sent as arg with condition where isSearchWordModalOpen is false', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // apply the condition: isSearchWordModalOpen is false as default
    store = mockStore(initialNormalizedState);
    
    // dispatch with mock store
    store.dispatch<any>(selectAllIconClickWrapperThunk());
    // get dispatched actions
    const actions = store.getActions();
    const { sortedWordList } = store.getState();
    
    // second, mock action of modalActionCreatorDummy
    expect(actions[0]).toEqual(selectAllSelectedWordListActionCreator(sortedWordList));
  });
});


