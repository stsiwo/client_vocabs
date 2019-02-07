import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordDetailCont from '../../src/containers/Word/WordDetailCont';
import { NewControllerItem } from '../../src/representationals/business/Controller/NewControllerItem';
import { BackControllerItem } from '../../src/representationals/business/Controller/BackControllerItem';
import { resetStateActionCreator } from '../../src/actions/index';
import store from '../../src/storeConfig';
import sleep from '../helper/sleep';
//import { RouterProps } from 'react-router';
import { Router } from 'react-router-dom';

describe('add new word', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
    store.dispatch(resetStateActionCreator());
  });

  it('should route to /word page if no undefined word exists', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordDetailCont, store, '/word/detail');
    const wrapper = mount(
      <ContextHOC  />
    );

    // simulate back controller click
    wrapper.find(BackControllerItem).find("ControllerItemSelector").simulate('click');

    await sleep();

    const RouterComp = wrapper.find(Router).instance() as Router;
    // expect routed to /word  
    expect(RouterComp.props.history.location.pathname).toEqual('/word');
    

  });

  it('should open define warning modal if undefined word exists', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordDetailCont, store, '/word/detail');
    const wrapper = mount(
      <ContextHOC  />
    );
    
    expect(wrapper.find('WordFormSelector').exists()).toEqual(false);
    // simulate new word controller click to create undefined word 
    wrapper.find(NewControllerItem).find("ControllerItemSelector").simulate('click');

    /**
     * why do i need to use this? store.state hasn't change without await?
     * this means state change is async? i have no idea lol
     **/
    await sleep();

    expect(store.getState().get('wordFormError')).toEqual(true);

    // simulate back controller click
    wrapper.find(BackControllerItem).find("ControllerItemSelector").simulate('click');

    /**
     * why do i need to use this? store.state hasn't change without await?
     * this means state change is async? i have no idea lol
     **/
    await sleep();


    // state: expect define warning modal is true
    expect(store.getState().getIn([ 'ui', 'isDefineWarningModalOpen' ])).toEqual(true);
    // representationals: expect define warning is opened 
    expect(wrapper.find('WordFormSelector').exists()).toEqual(true);
  })

})



