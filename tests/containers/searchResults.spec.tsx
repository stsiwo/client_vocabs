import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import SearchResultsCont from '../../src/containers/SearchResultsCont';
import { initialNormalizedState } from '../../src/state/index';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { updateDefImageActionCreator } from '../../src/actions/index';
import { imageItemDummy } from '../storage/domains/image';

const mockStore = configureMockStore([ thunk ]);

describe('SearchResultsCont', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  // this mdtp is defined in "WordListItemCont" not "SearchResultsCont" container component
  it('should invoke updateDefImageActionCreator (MDTP function)', function() {
    
    let store: MockStoreEnhanced;
    // change initial currentSort and currentFilter
    store = mockStore(Object.assign({}, initialNormalizedState));

    const ContextHOC = ProviderAndThemeWrapperHOC(SearchResultsCont, store);
    const wrapper = mount(
      <ContextHOC items={ [ imageItemDummy ] } defId={ "0" }/>
    );
    
    const updateDefImageClick: (id: string, nextImage: string) => void = wrapper.find("SearchResults").first().prop('updateDefImageClick');

    // programmarically call dispatch wrapper function since react event is tested in another test
    updateDefImageClick("0", "image test");

    // get dispatched action in mock store
    const actions = store.getActions();

    // check dispatched action is dummy
    expect(actions[0]).toEqual(updateDefImageActionCreator("0", "image test")); 
  })
})



