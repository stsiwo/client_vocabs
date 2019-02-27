import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordDetailCont from '../../src/containers/Word/WordDetailCont';
import store from '../../src/storeConfig';
import { NewControllerItem } from '../../src/representationals/business/Controller/NewControllerItem';
import { SaveControllerItem } from '../../src/representationals/business/Controller/SaveControllerItem';
import { resetStateActionCreator } from '../../src/actions/index';
import sleep from '../helper/sleep';
import { IWordImm } from '../../src/domains/word';

describe('save words ( save controller item click )', function() {

  beforeEach(() => {
    store.dispatch(resetStateActionCreator());
  })

  it('should open the define warning modal if there is error on form', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordDetailCont, store, '/word/detail');
    const wrapper = mount(
      <ContextHOC  />
    );
    
    // expect no form since there is no entities.defs
    expect(wrapper.find('WordFormSelector').exists()).toEqual(false);

    // simulate add new word controller click
    wrapper.find(NewControllerItem).find("ControllerItemSelector").simulate('click');

    // wait setState async finish 
    await sleep();
    wrapper.update();

    // state: expect wordFormError = true (new word is empty)
    expect(store.getState().get('wordFormError')).toEqual(true);


    // simulate save controller click
    wrapper.find(SaveControllerItem).find("ControllerItemSelector").simulate('click');

    // state: expect ui.isDefineWarningModalOpen is true
    expect(store.getState().getIn([ 'ui', 'isDefineWarningModalOpen' ])).toEqual(true);

    // representationals: expect define warning modal open
    expect(wrapper.find("DefineWarningModalSelector").exists()).toEqual(true);

  })

  it('should update redux state when no error on form', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordDetailCont, store, '/word/detail');
    const wrapper = mount(
      <ContextHOC  />
    );
    
    // expect no form since there is no entities.defs
    expect(wrapper.find('WordFormSelector').exists()).toEqual(false);

    // simulate add new word controller click
    wrapper.find(NewControllerItem).find("ControllerItemSelector").simulate('click');

    // make random input to remove form error
    wrapper.find('input[id="words.0.name"]').simulate("change", { target: { value: "test word", name: "words.0.name" }});
    wrapper.find('input[id="words.0.defs.0.def"]').first().simulate("change", { target: { value: "integration def text", name: "words.0.defs.0.def" }});

    // i still don't understand why need this async stuff
    // maybe this is because setState? esp after simulate and make sure the state in redux, it always fails so
    // setState is async so go to callback queue first, then wait for the stack is empty; therefore, if there is no code like below,
    // all code is executed before setSTate's callback is executed, which means state change.
    // finally does make a sense!!!!
    await sleep();
    wrapper.update();


    // expect there is no error on form
    expect(store.getState().get('wordFormError')).toEqual(false);

    // simulate save controller click
    wrapper.find(SaveControllerItem).find("ControllerItemSelector").simulate('click');

    // wait state update
    await sleep();
    wrapper.update();

    // expect state.entities.words contains the new word
    expect(store.getState().getIn([ 'entities', 'words' ]).find(( word: IWordImm ) => word.get('name') === "test word").isEmpty()).toEqual(false);

  })

  it('should send PUT request to update those words: need to be later when implementing server side', async function() {
  })

})


