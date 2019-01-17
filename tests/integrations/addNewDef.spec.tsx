import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import DefTreeCont from '../../src/containers/Def/DefTreeCont';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import { defTestData } from '../storage/domains/def';
import store from '../../src/storeConfig';


describe('add new def to a particular word functionality', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  // this mdtp is defined in "WordListItemCont" not "DefTreeCont" container component
  it('should add new def of a particular word and update the word defs property', function() {

    const testWordId = defTestData._wordId;
    const testDefId = defTestData.id;
    
    const ContextHOC = ProviderAndThemeWrapperHOC(DefTreeCont, store);
    const wrapper = mount(
      <ContextHOC defs={ [ defTestData ] } />
    );
    
    // find target event handler
    const addNewDefClick: (id: string) => void = wrapper.find("DefTree").first().prop('addNewDefClick');

    // programmarically call dispatch wrapper function. browser testing is in end-to-end  
    addNewDefClick(testWordId);

    // make sure the change of state 
    // words (id=0)'s defs should include new def id (=0) 
    expect(store.getState().entities.words[testWordId].defs).toEqual(expect.arrayContaining([ testDefId ]));

    // defs should include new def 0
    expect(store.getState().entities.defs[testDefId].id).toEqual(testDefId);
  })
})
