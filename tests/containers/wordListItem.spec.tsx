import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordListItemCont from '../../src/containers/Word/WordListItemCont';
import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import { initialStateRecordFactory } from '../storage/state/initialState';
import thunk from 'redux-thunk';
import { toggleSelectWordDispatchType } from '../../src/containers/type';
import { wordItemListOutputDataJS } from '../storage/domains/word'; 
import { toggleSelectedWordListActionCreator } from '../../src/actions/index';

const mockStore = configureMockStore([ thunk ]);

describe('WordListItemCont', function() {
  //let store: MockStoreEnhanced;
  let store: MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialStateRecordFactory());
  });

  it('should invoke dispatch function with toggleSelectedWordListActionCreator action (MDTP function)', function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordListItemCont, store);
    const wrapper = mount(
      <ContextHOC word={ wordItemListOutputDataJS[0] }/>
    );
    
    const toggleSelectWordChange: toggleSelectWordDispatchType = wrapper.find("WordListItem").first().prop('toggleSelectWordChange');

    // programmarically call dispatch wrapper function since react event is tested in another test
    toggleSelectWordChange("1");

    // get dispatched action in mock store
    const actions = store.getActions();
    
    expect(actions[0]).toEqual(toggleSelectedWordListActionCreator("1")); 
  })
})

