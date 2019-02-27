import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordCont from '../../src/containers/WordCont';
import SaveControllerItem from '../../src/representationals/business/Controller/SaveControllerItem';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import store from '../../src/storeConfig';
import { normalizedWordsTestData } from '../storage/domains/word';

describe('Save words functionality', function() {

  // mount WordCont to demonstrate this test case
  const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store, '/word/detail');
  const wrapper = mount(
    <ContextHOC />
  );

  // use mock fetch because don't implement backend yet
  it('should save updated words and/or updated words in remote and redux state', function() {

    // find target event handler
    wrapper.find(SaveControllerItem).find("ControllerItemSelector").simulate('click');

    /*********************************************************
     * I couldn't find any proper way to test async plus enzyme simulate (like simulate().then(...) ) so that i can make sure state change when using async
     *  - for now, use "setTimeout" to test those kind of stuff but there must be a proper way to do that.
     *********************************************************/
    setTimeout(() => {
      // expect words entities udpated 
      expect(store.getState().entities.words).toEqual(expect.objectContaining(normalizedWordsTestData.words));

      // expect defs entities updated
      expect(store.getState().entities.defs).toEqual(expect.objectContaining(normalizedWordsTestData.defs));
    });


  })

  it('should not save updated words and/or updated words in remote and redux state because there is error in form', function() {

    // first, empty a word name input to demonstrate this test
    wrapper.find('input[id="words.3.name"]').simulate("change", { target: { value: '' }});

    // find target event handler
    wrapper.find(SaveControllerItem).find("ControllerItemSelector").simulate('click');

    /*********************************************************
     * I couldn't find any proper way to test async plus enzyme simulate (like simulate().then(...) ) so that i can make sure state change when using async
     *  - for now, use "setTimeout" to test those kind of stuff but there must be a proper way to do that.
     *********************************************************/
    setTimeout(() => {
      // expect words entities udpated 
      expect(store.getState().wordFormError).toEqual(true);

      // expect defin word warning modal is open 
      expect(store.getState().ui.isDefineWarningModalOpen).toEqual(true);

      // expect the modal on screen
      expect(wrapper.find("DefineWarningModalSelector").exists()).toEqual(true);

      // expect defs entities updated
      expect(store.getState().entities.defs).toEqual(expect.not.objectContaining(normalizedWordsTestData.defs));
    });

  })
})
