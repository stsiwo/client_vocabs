import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import ResetButtonCont from '../../src/containers/Button/ResetButtonCont';
import { initialNormalizedState } from '../../src/state/index';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import { resetSortFilterDispatchType } from '../../src/containers/type';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { resetSortFilterWrapperThunkDummyFunc } from '../storage/containers/resetButton'; 
import * as resetSortFilterWrapperThunk from '../../src/thunk/resetSortFilter';

const mockStore = configureMockStore([ thunk ]);

describe('ResetButtonCont', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  // this mdtp is defined in "WordListItemCont" not "ResetButtonCont" container component
  it('should invoke resetSortFilterWrapperThunk (MDTP function)', function() {
    
    let store: MockStoreEnhanced;
    // change initial currentSort and currentFilter
    store = mockStore(Object.assign({}, initialNormalizedState, {
      currentSort: 3,
      currentFilter: [3,9],
    }));

    const ContextHOC = ProviderAndThemeWrapperHOC(ResetButtonCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    
    const resetSortFilterClick: resetSortFilterDispatchType = wrapper.find("ResetButton").first().prop('resetSortFilterClick');

    //  stub for resetSortFilterWrapperThunk
    /**
     * WHEN SPY, MOCK, STUB imported function or object, use like below
     * if using ES6, you have to import as default and assign object and its method as default like below and import as object ( like import * as ... )
     **/
    const resetSortFilterWrapperThunkStub: SinonSpy = sinon.stub(resetSortFilterWrapperThunk, 'default').callsFake(resetSortFilterWrapperThunkDummyFunc)

    // programmarically call dispatch wrapper function since react event is tested in another test
    resetSortFilterClick();

    // get dispatched action in mock store
    const actions = store.getActions();

    // verify spy is calld
    sinon.assert.calledOnce(resetSortFilterWrapperThunkStub);
    
    // check dispatched action is dummy
    expect(actions[0]).toEqual({ type: "dummy_thunk_action", }); 
  })
})


