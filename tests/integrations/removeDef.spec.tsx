import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordDetailCont from '../../src/containers/Word/WordDetailCont';
import store from '../../src/storeConfig';
import { NewControllerItem } from '../../src/representationals/business/Controller/NewControllerItem';
import { DefNode } from '../../src/representationals/business/Form/DefNode';
import sleep from '../helper/sleep';

/**
 * if this test is failed, check out formik package. it might be the reason.
 *  - there is a bug in remove function FieldArray so modify the source code 
 *  - modified content is also available in README so if you update the package you need to copy and past the change to source code
 *  - the best way is that you can fork formik package and customise or modify the content and then you can import the formik package from your git not from node module!!!!
 **/
describe('remove new def', function() {

  beforeEach(() => {
  });

  it('should remove def and its correspnding def (only one) to entities.defs and entities.defs', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordDetailCont, store, '/word/detail');
    const wrapper = mount(
      <ContextHOC  />
    );
    
    // expect no form since there is no entities.defs
    expect(wrapper.find('WordFormSelector').exists()).toEqual(false);

    // simulate add new word controller click
    wrapper.find(NewControllerItem).find("ControllerItemSelector").simulate('click');

    // representationals: expect new form is rendered 
    expect(wrapper.find('WordFormSelector').exists()).toEqual(true);

    // add new def form
    wrapper.find('div[id="addNewDefForm"]').simulate('click');

    // i don't understand why need to be async 
    await sleep();
    wrapper.update();

    expect(wrapper.find(DefNode).length).toEqual(2);

    // delete newly added def
    wrapper.find(DefNode).last().find('div[id="removeDefForm"]').simulate('click');

    // i don't understand why need to be async 
    await sleep();
    wrapper.update();

    // expect # of def is only 1 (only default and newly added is deleted)
    expect(wrapper.find(DefNode).length).toEqual(1);

  })
})

