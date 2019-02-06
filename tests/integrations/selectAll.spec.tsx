import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import SelectAllControllerItem from '../../src/representationals/business/Controller/SelectAllControllerItem';
import WordCont from '../../src/containers/WordCont';
import store from '../../src/storeConfig';
import sleep from '../helper/sleep';
/**
 * since initialState is so big, use test data for integration test not real onw
 **/
jest.mock('../../src/thunk/asyncs/initialWordFetch');
/**
 * test data is from dist/testInitialState; NOT FROM storage/state/initialState!!!!!
 **/

describe('add new word', function() {

  it('should open s&f word modal ', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // click select all controller 
    wrapper.find(SelectAllControllerItem).find("ControllerItemSelector").simulate('click');

    expect(store.getState().get('selectedWordList')).toEqual(store.getState().get('displayedWordList'));
  })

  it('should open s&f word modal ', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // click select all controller (second time)
    wrapper.find(SelectAllControllerItem).find("ControllerItemSelector").simulate('click');

    expect(store.getState().get('selectedWordList').size).toEqual(0);
  })
})


