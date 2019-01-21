import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import DefNodeCont from '../../src/containers/Def/DefNodeCont';
import { initialNormalizedState } from '../../src/state/index';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { removeDefActionCreator } from '../../src/actions/index';
import { defTestData } from '../storage/domains/def';

const mockStore = configureMockStore([ thunk ]);

describe('DefNodeCont', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  // this mdtp is defined in "WordListItemCont" not "DefNodeCont" container component
  it('should invoke removeDefActionCreator (MDTP function)', function() {
    
    let store: MockStoreEnhanced;
    // change initial currentSort and currentFilter
    store = mockStore(Object.assign({}, initialNormalizedState));

    const ContextHOC = ProviderAndThemeWrapperHOC(DefNodeCont, store);
    const wrapper = mount(
      <ContextHOC def={ defTestData } isOpen={ true } />
    );
    
    const removeDefClick: (wordId: string, defIds: string[]) => void = wrapper.find("DefNode").first().prop('removeDefClick');

    // programmarically call dispatch wrapper function since react event is tested in another test
    removeDefClick("0",[ "0" ]);

    // get dispatched action in mock store
    const actions = store.getActions();

    // check dispatched action is dummy
    expect(actions[0]).toEqual(removeDefActionCreator("0", [ "0" ])); 
  })
})






