import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from './helper';
import SelectAllControllerItemCont from '../../src/containers/Controller/SelectAllControllerItemCont';
import { initialNormalizedState } from '../../src/state/index';
//import { wordListItemModel } from '../storage/containers/wordListCont';
import configureMockStore from 'redux-mock-store';
import { toggleSelectWordAction } from '../../src/actions/index';
import { toggleSelectWordDispatchType } from '../../src/containers/type';
import { MockStoreEnhanced } from 'redux-mock-store';

const mockStore = configureMockStore();

describe('SelectAllControllerItemCont', function() {
  //let store: MockStoreEnhanced;
  let store: MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialNormalizedState);
  });

  it('should include sortedWordList props ( MSTP function )', function() {
    /**
     * sortedWordList: [0,1,2,3,4,5,6,7,8,9,10],
     * selectedWordList: [0,1,2,3],
     **/
    const ContextHOC = ProviderAndThemeWrapperHOC(SelectAllControllerItemCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    // model date: storage/containers/wordListCont.ts
    expect(wrapper.find("SelectAllControllerItem").prop('sortedWordList')).toEqual([0,1,2,3,4,5,6,7,8,9,10]); 
  })

  // this mdtp is defined in "WordListItemCont" not "SelectAllControllerItemCont" container component
  it('should invoke dispatch function with toggleSelectWordAction action (MDTP function)', function() {
    const ContextHOC = ProviderAndThemeWrapperHOC(SelectAllControllerItemCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    
    const toggleSelectWordChange: toggleSelectWordDispatchType = wrapper.find("SelectAllControllerItem").first().prop('selectAllWordClick');

    // programmarically call dispatch wrapper function since react event is tested in another test
    toggleSelectWordChange([0,1,2,3,4,5,6,7,8,9,10]);

    // get dispatched action in mock store
    const actions = store.getActions();
    
    expect(actions[0]).toEqual(toggleSelectWordAction([0,1,2,3,4,5,6,7,8,9,10])); 
  })
})

