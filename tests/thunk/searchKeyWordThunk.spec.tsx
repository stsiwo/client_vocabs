import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { changeSearchKeyWordWrapperThunk } from '../../src/reducers/thunk';
import { initialNormalizedState } from '../../src/state/index';
import { changeSearchKeyWordActionCreator, changeDisplayedWordListActionCreator } from '../../src/actions/index';
import { INormalizedState } from '../../src/state/type';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('SearchWordModalCont', function() {
  //let store: MockStoreEnhanced;
  let store: MockStoreEnhanced<INormalizedState, {}>;

  beforeEach(() => {
    store = mockStore(initialNormalizedState);
  });

  it('should dispatch searchKeyWordActionCreator and changeSearchedWordListActionCreator and changeDisplayedWordListAction', () => {
    
    // newSearchKey = 'test' so does not return any matching
    store.dispatch<any>(changeSearchKeyWordWrapperThunk('test'));
    // get dispatched actions
    const actions = store.getActions();
    
    // first, searchKeyWordAction
    expect(actions[0]).toEqual(changeSearchKeyWordActionCreator('test', []));

    // second, changeDisplayedWordListAction
    expect(actions[1]).toEqual(changeDisplayedWordListActionCreator([]));

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
    
    // first, searchKeyWordAction
    expect(actions[0]).toEqual(changeSearchKeyWordActionCreator(initialNormalizedState.entities.words[0].name, [initialNormalizedState.entities.words[0].id]));
    // second, changeDisplayedWordListActionCreator 
    expect(actions[1]).toEqual(changeDisplayedWordListActionCreator([initialNormalizedState.entities.words[0].id]));


  })

  it('should dispatch changeDisplayedWordListActionCreator when nextSearchKey is empty', () => {
    // newSearchKey = 'sport' so return should be 1 match 
    store.dispatch<any>(changeSearchKeyWordWrapperThunk(''));
    // get dispatched actions
    const actions = store.getActions();

    const currentState: INormalizedState = store.getState();
    
    expect(actions[0]).toEqual(changeSearchKeyWordActionCreator('', []));
    expect(actions[1]).toEqual(changeDisplayedWordListActionCreator(currentState.sortedWordList));


  })
});
