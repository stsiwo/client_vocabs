import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import App from '../../src/representationals/App';
import store from '../../src/storeConfig';
import sleep from '../helper/sleep';
/**
 * since initialState is so big, use test data for integration test not real onw
 **/
jest.mock('../../src/thunk/asyncs/initialWordFetch');
/**
 * test data is from dist/testInitialState; NOT FROM storage/state/initialState!!!!!
 **/

/**********************************************************************************
 * IMPORTANT NOTE: enzyme with react-router-dom
 *  - you need to put second argument of "{ button: 0 }" in simulate function when you want to route your app
 *  - without the second arguments, NEVER route correctlly!!!!!
 **********************************************************************************/

describe('edit controller item click', function() {

  it('should redirect to /dictionary', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(App, store, '/');
    const wrapper = mount(
      <ContextHOC />
    );

    //console.log(wrapper.find("NavBarSelector").debug());

    // open nav side bar
    wrapper.find('div[id="navToggle"]').simulate('click');

    // simulate <a href="/word"> click
    wrapper.find("NavBarSelector").find('a[href="/dictionary"]').simulate('click', { button: 0 });

    await sleep(1000);

    wrapper.update();

    console.log(wrapper.debug());

    expect(wrapper.find("DictionarySelector").exists()).toEqual(true);
    
  })
})

