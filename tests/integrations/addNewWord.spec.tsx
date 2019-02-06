import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordDetailCont from '../../src/containers/Word/WordDetailCont';
import { NewControllerItem } from '../../src/representationals/business/Controller/NewControllerItem';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import store from '../../src/storeConfig';

describe('add new word', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  // this mdtp is defined in "WordListItemCont" not "NewControllerItemCont" container component
  it('should add new word and its correspnding def (only one) to entities.words and entities.defs', function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordDetailCont, store, '/word/detail');
    const wrapper = mount(
      <ContextHOC  />
    );
    
    // expect no form since there is no entities.words
    expect(wrapper.find('WordFormSelector').exists()).toEqual(false);
    // find target event handler
    wrapper.find(NewControllerItem).find("ControllerItemSelector").simulate('click');


    // representationals: expect new form is rendered 
    expect(wrapper.find('WordFormSelector').exists()).toEqual(true);
  })
})


