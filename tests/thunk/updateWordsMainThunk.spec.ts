import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialNormalizedState } from '../../src/state/index';
import { INormalizedState } from '../../src/state/type';
import applyThunkMiddleware from '../../src/thunk/thunkComponent';
import updateWordsMainThunk from '../../src/thunk/mains/updateWords'; 
import saveWordsThunkMiddleware from '../../src/thunk/middlewares/saveWords';
import { wordsTestData, normalizedWordsTestData } from '../storage/domains/word';
import { addNewWordActionCreator } from '../../src/actions/index';
// don't need to create stub for saveAsync, jest does all for me
jest.mock('../../src/thunk/asyncs/save');

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('updateWordsMainThunk - middlewares: saveWordsThunkMiddleware', function() {

  it('should dispatch addNewWordActionCreator', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(Object.assign({}, initialNormalizedState, {}));

    const thunkWithMiddlewares = applyThunkMiddleware(saveWordsThunkMiddleware)(updateWordsMainThunk);

    /*********************************************************** 
     * when testing async function, chain then function to this store.disatch to make sure the flow controll
     ***********************************************************/
    store.dispatch<any>(thunkWithMiddlewares(wordsTestData)).then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual(addNewWordActionCreator(normalizedWordsTestData.words, normalizedWordsTestData.defs));
    });;
  });

  it('should dispatch addNewWordActionCreator', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(Object.assign({}, initialNormalizedState, {}));

    const thunkWithMiddlewares = applyThunkMiddleware(saveWordsThunkMiddleware)(updateWordsMainThunk);

    /*********************************************************** 
     * when testing async function, chain then function to this store.disatch to make sure the flow controll
     ***********************************************************/
    store.dispatch<any>(thunkWithMiddlewares(wordsTestData)).then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual(addNewWordActionCreator(normalizedWordsTestData.words, normalizedWordsTestData.defs));
    });;
  });
});

