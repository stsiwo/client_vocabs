import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordNameTextCont from '../../src/containers/Word/WordNameTextCont';
import { initialNormalizedState } from '../../src/state/index';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { updateWordNameAction } from '../../src/actions/index';

const mockStore = configureMockStore([ thunk ]);

describe('WordNameTextCont', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  // this mdtp is defined in "WordListItemCont" not "WordNameTextCont" container component
  it('should invoke updateWordNameAction (MDTP function)', function() {
    
    let store: MockStoreEnhanced;
    // change initial currentSort and currentFilter
    store = mockStore(Object.assign({}, initialNormalizedState));

    const ContextHOC = ProviderAndThemeWrapperHOC(WordNameTextCont, store);
    const wrapper = mount(
      <ContextHOC wordId={ "0" } name={ "test-name" } />
    );
    
    const changeWordNameText: (id: string, nextText: string) => void = wrapper.find("WordNameText").first().prop('changeWordNameText');

    // programmarically call dispatch wrapper function since react event is tested in another test
    changeWordNameText("0", "text test");

    // get dispatched action in mock store
    const actions = store.getActions();

    // check dispatched action is dummy
    expect(actions[0]).toEqual(updateWordNameAction("0", "text test")); 
  })
})






