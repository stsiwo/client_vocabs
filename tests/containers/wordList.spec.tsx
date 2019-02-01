import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordListCont from '../../src/containers/Word/WordListCont';
import { wordItemListOutputDataJS } from '../storage/domains/word';
import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import { initialStateRecordFactory } from '../storage/state/initialState';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([ thunk ]);

describe('WordListCont', function() {
  //let store: MockStoreEnhanced;
  let store: MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialStateRecordFactory());
  });

  it('should include IWordListItem[] and isInitialWordsFetching props ( MSTP function )', function() {
    /**
     * sortedWordList: [0,1,2,3,4,5,6,7,8,9,10],
     * selectedWordList: [0,1,2,3],
     **/
    const ContextHOC = ProviderAndThemeWrapperHOC(WordListCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    // model date: storage/containers/wordListCont.ts
    expect(wrapper.find("WordList").prop('wordListItem')).toEqual(wordItemListOutputDataJS); 
  })

  // this mdtp is defined in "WordListItemCont" not "WordListCont" container component
  //it('should invoke dispatch function with initialWordsFetch action (MDTP function)', function() {
    //const ContextHOC = ProviderAndThemeWrapperHOC(WordListCont, store);
    //const wrapper = mount(
      //<ContextHOC />
    //);
    
    //const toggleSelectWordChange: toggleSelectWordDispatchType = wrapper.find("WordListItem").first().prop('toggleSelectWordChange');

    //// programmarically call dispatch wrapper function since react event is tested in another test
    //toggleSelectWordChange("1");

    //// get dispatched action in mock store
    //const actions = store.getActions();
    
    //expect(actions[0]).toEqual(toggleSelectedWordListActionCreator("1")); 
  //})
})
