import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import NewControllerItemCont from '../../src/containers/Controller/NewControllerItemCont';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import store from '../../src/storeConfig';

describe('add new word', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  // this mdtp is defined in "WordListItemCont" not "NewControllerItemCont" container component
  it('should add new word and its correspnding def (only one) to entities.words and entities.defs', function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(NewControllerItemCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    
    // find target event handler
    const newIconClick: () => void = wrapper.find("NewControllerItem").first().prop('newIconClick');

    // programmarically call dispatch wrapper function. browser testing is in end-to-end  
    newIconClick();

    // make sure the change of state 
    // expect new word in entities.words 
    // - need to find new word in words: object.keys(words).map(( word ) => word.name === "")
    // - check the new word.name is empty (other words must have its own name) so use this to make sure new item is added 
    const words = store.getState().entities.words;
    const defs = store.getState().entities.defs;
    const newWordId = Object.keys(words).filter(( wordId: string ) => words[wordId].name === "")[0]
    const newDefId = words[newWordId].defs[0];

    expect(words).toEqual(expect.objectContaining({ [newWordId] : words[newWordId] }));

    // expect new def (only one) in entities.defs
    expect(defs).toEqual(expect.objectContaining({ [newDefId] : defs[newDefId] }));

    // connection word and def
    expect(words[newWordId].defs[0]).toEqual(newDefId);
    expect(defs[newDefId]._wordId).toEqual(newWordId);
  })
})


