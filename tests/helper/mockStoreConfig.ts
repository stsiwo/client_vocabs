import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialNormalizedState } from '../../src/state/index';


const mockStore = configureMockStore([ thunk ]);

// need to make this class so that can call resetMockStore() after every test

export const store: MockStoreEnhanced = mockStore(Object.assign({}, initialNormalizedState));

export const resetMockStore = () => mockStore(Object.assign({}, initialNormalizedState));

