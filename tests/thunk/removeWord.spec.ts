import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import  removeWordWrapperThunk  from '../../src/thunk/removeWord';
import { initialNormalizedState } from '../../src/state/index';
import { INormalizedState } from '../../src/state/type';
import { removeWordActionCreator } from '../../src/actions/index';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('removeWord', function() {

  it('should dispatch removeWordActionCreator as same time as the size of selectedWordList', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState
    store = mockStore(initialNormalizedState);

    // dispatch with mock store
    store.dispatch<any>(removeWordWrapperThunk());
    // get dispatched actions
    const actions = store.getActions();

    //  since initialNormalizedState.selectedWordList contains 4 elements so dispatch the action 4 times
    store.getState().selectedWordList.forEach(( deleteWordId, index ) => {
      expect(actions[index]).toEqual(removeWordActionCreator(deleteWordId));
    });
  });
});



