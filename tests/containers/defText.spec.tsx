import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import DefTextCont from '../../src/containers/Form/DefTextCont';
import { initialNormalizedState } from '../../src/state/index';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { updateDefTextAction } from '../../src/actions/index';

const mockStore = configureMockStore([ thunk ]);

describe('DefTextCont', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  // this mdtp is defined in "WordListItemCont" not "DefTextCont" container component
  it('should invoke updateDefTextAction (MDTP function)', function() {
    
    let store: MockStoreEnhanced;
    // change initial currentSort and currentFilter
    store = mockStore(Object.assign({}, initialNormalizedState));

    const ContextHOC = ProviderAndThemeWrapperHOC(DefTextCont, store);
    const wrapper = mount(
      <ContextHOC defText={ "test-text" } defId={ "0" } />
    );
    
    const updateDefTextChange: (id: string, nextText: string) => void = wrapper.find("DefText").first().prop('updateDefTextChange');

    // programmarically call dispatch wrapper function since react event is tested in another test
    updateDefTextChange("0", "text test");

    // get dispatched action in mock store
    const actions = store.getActions();

    // check dispatched action is dummy
    expect(actions[0]).toEqual(updateDefTextAction("0", "text test")); 
  })
})





