import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import resetSortFilterWrapperThunk from '../../src/thunk/resetSortFilter';
import { initialNormalizedState } from '../../src/state/index';
import { INormalizedState } from '../../src/state/type';
import { AnyAction } from 'redux';
import { changeSortAction, changeFilterAction } from '../../src/actions/index';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('resetSortFilterWrapperThunk ', function() {

  it('should dispatch changeSortAction and changeFilterAction', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // apply the condition: isSearchWordModalOpen is false as default
    store = mockStore(initialNormalizedState);
    
    // dispatch with mock store
    store.dispatch<any>(resetSortFilterWrapperThunk());
    // get dispatched actions
    const actions = store.getActions();
    const { currentSort, currentFilter } = store.getState();
    
    expect(actions[0]).toEqual(changeSortAction(currentSort));
    expect(actions[1]).toEqual(changeFilterAction(currentFilter));

  });
});
