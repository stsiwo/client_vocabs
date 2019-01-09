import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { changeSearchKeyWordWrapperThunk } from '../../src/reducers/thunk';
import { initialNormalizedState } from '../../src/state/index';
import { searchKeyWordAction, changeSortedWordListAction } from '../../src/actions/index';

const mockStore = configureMockStore([thunk]);

describe('SearchWordModalCont', function() {
  //let store: MockStoreEnhanced;
  let store: MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialNormalizedState);
  });

  it('should dispatch searchKeyWordAction and changeSortedWordListAction', () => {
    
    // newSearchKey = 'test' so does not return any matching
    store.dispatch<any>(changeSearchKeyWordWrapperThunk('test'));
    // get dispatched actions
    const actions = store.getActions();
    
    // first, changeSortedWordListAction
    expect(actions[0]).toEqual(changeSortedWordListAction([]));

    // second, searchKeyWordAction
    expect(actions[1]).toEqual(searchKeyWordAction('test'));
  });

  it('should send proper data with changeSortedWordListAction', () => {
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
    
    // first, changeSortedWordListAction 
    expect(actions[0]).toEqual(changeSortedWordListAction([initialNormalizedState.entities.words[0].id]));

    // second, searchKeyWordAction
    expect(actions[1]).toEqual(searchKeyWordAction('sport'));

  })
});
