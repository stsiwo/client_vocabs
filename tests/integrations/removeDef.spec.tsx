import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import DefNodeCont from '../../src/containers/Def/DefNodeCont';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import { defTestData } from '../storage/domains/def';
import store from '../../src/storeConfig';


describe('remove def in a particular word', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  // this mdtp is defined in "WordListItemCont" not "DefNodeCont" container component
  it('should remove def from entities.defs and entities.words', function() {

    const testWordId = defTestData._wordId; 
    const testDefId = defTestData.id; 
    
    const ContextHOC = ProviderAndThemeWrapperHOC(DefNodeCont, store);
    const wrapper = mount(
      <ContextHOC def={ defTestData } isOpen={ true }/>
    );
    
    // find target event handler
    const removeDefClick: (wordId: string, defIds: string[]) => void = wrapper.find("DefNode").first().prop('removeDefClick');

    // programmarically call dispatch wrapper function. browser testing is in end-to-end  
    removeDefClick(testWordId, [ testDefId ]);

    // make sure the change of state 
    // entities.words (id = wordId)'s defs should not have defId
    expect(store.getState().entities.words[testWordId].defs).not.toEqual(expect.arrayContaining([ testDefId ]));

    // entities.defs (id = defId) should be removed 
    expect(store.getState().entities.defs).not.toEqual(expect.objectContaining(defTestData));
  })
})

