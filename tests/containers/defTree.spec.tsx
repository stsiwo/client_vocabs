import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import DefTreeCont from '../../src/containers/Def/DefTreeCont';
import { initialNormalizedState } from '../../src/state/index';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addNewDefActionCreator } from '../../src/actions/index';
import { defTestData } from '../storage/domains/def';
import getNewNormalizedDef from '../../src/state/util/getNewNormalizedDef';

const mockStore = configureMockStore([ thunk ]);

describe('DefTreeCont', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  // this mdtp is defined in "WordListItemCont" not "DefTreeCont" container component
  it('should invoke addNewDefActionCreator (MDTP function)', function() {
    
    let store: MockStoreEnhanced;
    // change initial currentSort and currentFilter
    store = mockStore(Object.assign({}, initialNormalizedState));

    const ContextHOC = ProviderAndThemeWrapperHOC(DefTreeCont, store);
    const wrapper = mount(
      <ContextHOC defs={ [ defTestData ] } />
    );
    
    const addNewDefClick: (id: string) => void = wrapper.find("DefTree").first().prop('addNewDefClick');

    // programmarically call dispatch wrapper function since react event is tested in another test
    addNewDefClick("0");

    // get dispatched action in mock store
    const actions = store.getActions();

    // check dispatched action is dummy
    // only check type of action since this test is to make sure mdtp functionality which means that when addNewDefClick is called addNewDefActionCreator is dispatch. it does not matter of content of the data of action
    expect(actions[0].type).toEqual(addNewDefActionCreator(getNewNormalizedDef("0")).type); 
  })
})






