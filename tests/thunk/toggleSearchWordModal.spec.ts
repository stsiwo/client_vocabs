import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import toggleSearchWordModalWrapperThunk from '../../src/thunk/toggleSearchWordModal';
import { initialNormalizedState } from '../../src/state/index';
import { toggleSearchWordModalAction, changeDisplayedWordListAction } from '../../src/actions/index';
import { INormalizedState } from '../../src/state/type';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('clsoeSearchWordModal', function() {
  //let store: MockStoreEnhanced;

  it('should dispatch toggleSearchWordModalAction and changeDisplayedWordListAction: condition where isSearchWordModalOpen is true', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // apply the condition
    store = mockStore(Object.assign({}, initialNormalizedState, {
      sortedWordList: ["1","2","3","4","5"],
      ui: {
        ...initialNormalizedState.ui,
        isSearchWordModalOpen: true
      }
    }));

    // dispatch with mock store
    store.dispatch<any>(toggleSearchWordModalWrapperThunk());
    // get dispatched actions
    const actions = store.getActions();
    
    // second, changeDisplayedWordListAction
    expect(actions[0]).toEqual(changeDisplayedWordListAction(["1","2","3","4","5"]));
    // first, toggleSearchWordModalAction
    expect(actions[1]).toEqual(toggleSearchWordModalAction(false));
  });
});


