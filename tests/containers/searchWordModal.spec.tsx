import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from './helper';
import SearchWordModalCont from '../../src/containers/SearchWordModalCont';
import { initialNormalizedState } from '../../src/state/index';
//import { wordListItemModel } from '../storage/containers/wordListCont';
import configureMockStore from 'redux-mock-store';
import { searchKeyWordAction, changeSearchedWordListAction, changeDisplayedWordListAction } from '../../src/actions/index';
import { changeSearchKeyWordDispatchType } from '../../src/containers/type';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('SearchWordModalCont', function() {
  //let store: MockStoreEnhanced;
  let store: MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialNormalizedState);
  });

  it('should include sortedWordList props ( MSTP function )', function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(SearchWordModalCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // initial state's searchKeyWord: ''
    expect(wrapper.find("SearchWordModal").prop('searchKeyWord')).toEqual(''); 
  })

  // this mdtp is defined in "WordListItemCont" not "SearchWordModalCont" container component
  it('should invoke dispatch function with toggleSelectWordAction action (MDTP function)', function() {
    const ContextHOC = ProviderAndThemeWrapperHOC(SearchWordModalCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    
    const changeSearchKeyWord: changeSearchKeyWordDispatchType = wrapper.find("SearchWordModal").first().prop('changeSearchKeyWord');

    // programmarically call dispatch wrapper function since react event is tested in another test
    changeSearchKeyWord('test');

    // get dispatched action in mock store
    const actions = store.getActions();
    
    expect(actions[0]).toEqual(changeSearchedWordListAction([])); 
    expect(actions[1]).toEqual(changeDisplayedWordListAction([])); 
    expect(actions[2]).toEqual(searchKeyWordAction('test')); 
  })
})


