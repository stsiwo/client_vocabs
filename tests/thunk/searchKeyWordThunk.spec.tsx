import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { changeSearchKeyWordWrapperThunk } from '../../src/reducers/thunk';
import { initialNormalizedState } from '../../src/state/index';
import { searchKeyWordAction, changeSearchedWordListAction, changeDisplayedWordListAction } from '../../src/actions/index';
import { INormalizedState } from '../../src/state/type';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('SearchWordModalCont', function() {
  //let store: MockStoreEnhanced;
  let store: MockStoreEnhanced<INormalizedState, {}>;

  beforeEach(() => {
    store = mockStore(initialNormalizedState);
  });

  it('should dispatch searchKeyWordAction and changeSearchedWordListAction and changeDisplayedWordListAction', () => {
    
    // newSearchKey = 'test' so does not return any matching
    store.dispatch<any>(changeSearchKeyWordWrapperThunk('test'));
    // get dispatched actions
    const actions = store.getActions();
    
    // first, changeSearchedWordListAction
    expect(actions[0]).toEqual(changeSearchedWordListAction([]));

    // second, changeDisplayedWordListAction
    expect(actions[1]).toEqual(changeDisplayedWordListAction([]));

    // third, searchKeyWordAction
    expect(actions[2]).toEqual(searchKeyWordAction('test'));
  });

  it('should send proper data with changeSearchedWordListAction', () => {
    /**
     * newSearchKey test data:
     *  word
     *    id: 0
     *    name: sport
     **/
    // newSearchKey = 'sport' so return should be 1 match 
    store.dispatch<any>(changeSearchKeyWordWrapperThunk(initialNormalizedState.entities.words[0].name));
    // get dispatched actions
    const actions = store.getActions();
    
    // first, changeSearchedWordListAction 
    expect(actions[0]).toEqual(changeSearchedWordListAction([initialNormalizedState.entities.words[0].id]));

    // second, changeDisplayedWordListAction 
    expect(actions[1]).toEqual(changeDisplayedWordListAction([initialNormalizedState.entities.words[0].id]));

    // second, searchKeyWordAction
    expect(actions[2]).toEqual(searchKeyWordAction(initialNormalizedState.entities.words[0].name));

  })

  it('should dispatch changeDisplayedWordListAction when nextSearchKey is empty', () => {
    // newSearchKey = 'sport' so return should be 1 match 
    store.dispatch<any>(changeSearchKeyWordWrapperThunk(''));
    // get dispatched actions
    const actions = store.getActions();

    const currentState: INormalizedState = store.getState();
    
    expect(actions[0]).toEqual(changeDisplayedWordListAction(currentState.sortedWordList));

    expect(actions[1]).toEqual(searchKeyWordAction(''));

  })
});
