import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import  tc1ThunkComponentWrapper  from '../../src/thunk/tc1';
import  tc2ThunkComponentWrapper  from '../../src/thunk/tc2';
import  tc3ThunkComponentWrapper  from '../../src/thunk/tc3';
import mainThunkComponentWrapper from '../../src/thunk/mainThunkComponent';
import applyThunkConditions from '../../src/thunk/thunkComponent';
import { initialNormalizedState } from '../../src/state/index';
import { INormalizedState } from '../../src/state/type';
import { toggleWordFormErrorActionCreator, changeSearchKeyWordActionCreator } from '../../src/actions/index';
import searchKeyWordChangeMainThunkComponentWrapper from '../../src/thunk/searchKeyWordChangeMainThunk';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('applyThunkConditions', function() {

  it('single condition and change the action in main thunk', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(Object.assign({}, initialNormalizedState,
      {
      }
    ));

    const thunkWithConditions = applyThunkConditions(
      tc1ThunkComponentWrapper, 
    )(mainThunkComponentWrapper);

    store.dispatch<any>(thunkWithConditions("satoshi"));
    // dispatch with mock store
    //store.dispatch<any>(thunkComponents(t1WrapperThunk, t2WrapperThunk, t3WrapperThunk)("satoshi"));
    // get dispatched actions
    const actions = store.getActions();

    expect(actions[0]).toEqual(toggleWordFormErrorActionCreator(true));

  });

  it('single condition and do nothing about main thunk because condition is not met', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(Object.assign({}, initialNormalizedState,
      {
        ui: {
          ...initialNormalizedState.ui,
          isSearchWordModalOpen: true,
        }
      }
    ));

    const thunkWithConditions = applyThunkConditions(
      tc1ThunkComponentWrapper, 
    )(mainThunkComponentWrapper);

    store.dispatch<any>(thunkWithConditions("satoshi"));
    // dispatch with mock store
    //store.dispatch<any>(thunkComponents(t1WrapperThunk, t2WrapperThunk, t3WrapperThunk)("satoshi"));
    // get dispatched actions
    const actions = store.getActions();

    expect(actions).toEqual([]);

  });

  it('multiple conditions and dispatch action in main thunk because all conditions are met', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(Object.assign({}, initialNormalizedState,
      {
      }
    ));

    const thunkWithConditions = applyThunkConditions(
      tc1ThunkComponentWrapper, 
      tc2ThunkComponentWrapper, 
      tc3ThunkComponentWrapper, 
    )(mainThunkComponentWrapper);

    store.dispatch<any>(thunkWithConditions("satoshi"));
    // dispatch with mock store
    //store.dispatch<any>(thunkComponents(t1WrapperThunk, t2WrapperThunk, t3WrapperThunk)("satoshi"));
    // get dispatched actions
    const actions = store.getActions();

    expect(actions[0]).toEqual(toggleWordFormErrorActionCreator(true));

  });

  it('multiple conditions and do nothing about main thunk because condition is not met', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(Object.assign({}, initialNormalizedState,
      {
        
      }
    ));

    const thunkWithConditions = applyThunkConditions(
      tc1ThunkComponentWrapper, 
      tc2ThunkComponentWrapper, 
      tc3ThunkComponentWrapper, 
    )(mainThunkComponentWrapper);

    store.dispatch<any>(thunkWithConditions("satoshi"));
    // dispatch with mock store
    //store.dispatch<any>(thunkComponents(t1WrapperThunk, t2WrapperThunk, t3WrapperThunk)("satoshi"));
    // get dispatched actions
    const actions = store.getActions();

    expect(actions[0]).toEqual(toggleWordFormErrorActionCreator(true));

  });

  it('multiple conditions and dispatch action in main thunk because all conditions are met', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(Object.assign({}, initialNormalizedState,
      {
        ui: {
          ...initialNormalizedState.ui,
          isSelectWarningModalOpen: true,
        }
      }
    ));

    const thunkWithConditions = applyThunkConditions(
      tc1ThunkComponentWrapper, 
      tc2ThunkComponentWrapper, 
      tc3ThunkComponentWrapper, 
    )(mainThunkComponentWrapper);

    store.dispatch<any>(thunkWithConditions("satoshi"));
    // dispatch with mock store
    //store.dispatch<any>(thunkComponents(t1WrapperThunk, t2WrapperThunk, t3WrapperThunk)("satoshi"));
    // get dispatched actions
    const actions = store.getActions();

    expect(actions).toEqual([]);
  });

  it('argument: string is pass through all conditions and reach to main thunk and dispatch action with the arg', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // mock store with initialNormalizedState which is adjusted to suit this test
    store = mockStore(Object.assign({}, initialNormalizedState,
      {
      }
    ));

    const thunkWithConditions = applyThunkConditions(
      tc1ThunkComponentWrapper, 
      tc2ThunkComponentWrapper, 
      tc3ThunkComponentWrapper, 
    )(searchKeyWordChangeMainThunkComponentWrapper);

    store.dispatch<any>(thunkWithConditions("satoshi"));
    // dispatch with mock store
    //store.dispatch<any>(thunkComponents(t1WrapperThunk, t2WrapperThunk, t3WrapperThunk)("satoshi"));
    // get dispatched actions
    const actions = store.getActions();

    expect(actions[0]).toEqual(changeSearchKeyWordActionCreator("satoshi", []));
  });
});


