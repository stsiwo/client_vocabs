import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordDetailCont from '../../src/containers/Word/WordDetailCont';
import store from '../../src/storeConfig';
import { NewControllerItem } from '../../src/representationals/business/Controller/NewControllerItem';
import { DefContent } from '../../src/representationals/business/Form/DefContent';

describe('add new def', function() {

  beforeEach(() => {
  });

  it('should add new def and its correspnding def (only one) to entities.defs and entities.defs', function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordDetailCont, store, '/word/detail');
    const wrapper = mount(
      <ContextHOC  />
    );
    
    // expect no form since there is no entities.defs
    expect(wrapper.find('WordFormSelector').exists()).toEqual(false);

    // find target event handler
    wrapper.find(NewControllerItem).find("ControllerItemSelector").simulate('click');

    // representationals: expect new form is rendered 
    expect(wrapper.find('WordFormSelector').exists()).toEqual(true);

    // add new def form
    wrapper.find('div[id="addNewDefForm"]').simulate('click');

    console.log(wrapper.find(DefContent));
  })
})

