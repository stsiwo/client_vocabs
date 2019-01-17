import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import SelectAllControllerItemCont from '../../src/containers/Controller/SelectAllControllerItemCont';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import store from '../../src/storeConfig';
import { selectAllWordDispatchType } from '../../src/containers/type';

describe('add new word', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  // this mdtp is defined in "WordListItemCont" not "SelectAllControllerItemCont" container component
  it('should add new word and its correspnding def (only one) to entities.words and entities.defs', function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(SelectAllControllerItemCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    
    // find target event handler
    const toggleSelectWordChange: selectAllWordDispatchType = wrapper.find("SelectAllControllerItem").first().prop('selectAllWordClick');
    // programmarically call dispatch wrapper function. browser testing is in end-to-end  
    toggleSelectWordChange();

    // make sure selectedWordList == sortedWordList
    expect(store.getState().selectedWordList).toEqual(store.getState().sortedWordList);
  })
})


