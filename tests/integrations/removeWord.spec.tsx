import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordCont from '../../src/containers/WordCont';
import { DeleteControllerItem } from '../../src/representationals/business/Controller/DeleteControllerItem';
import store from '../../src/storeConfig';
const testInitialStateJson = require('../../dist/testInitialState');
/**
 * since initialState is so big, use test data for integration test not real onw
 **/
jest.mock('../../src/thunk/asyncs/initialWordFetch');
/**
 * test data is from dist/testInitialState; NOT FROM storage/state/initialState!!!!!
 **/

/**
 * this is for async function for fetch initial words to fill the entities state
 * i've tried "setTimeout" way to wait async but all test was passed even though they shouldn't have so it did not work for me
 * so use this way:
 *  1. make test case async 
 *  2. use await for completion of initial fetch async function
 *  3. update wrapper 
 *  4. do whatever to make sure your result
 **/
const sleep = (ms: number = 0) =>
  new Promise((resolve) => setTimeout(resolve, ms));

describe('delete word', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  // this mdtp is defined in "WordListItemCont" not "WordCont" container component
  it('should open select word modal since on item is selected and do nothing about remvoing', async function() {

    // mount component
    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    // wait for async function complete
    await sleep(1000);

    // need to udpate wrapper: DON'T FORGET THIS!!!
    wrapper.update(); 

    // simulate delete controller item click
    wrapper.find(DeleteControllerItem).find("ControllerItemSelector").simulate('click');

    // expect select word modal is opened
    expect(store.getState().get('ui').get('isSelectWarningModalOpen')).toEqual(true);

    // simulate close button click in the modal
    wrapper.find("SelectModalSelector").find("CloseButtonSelector").simulate('click');

    // expect sortedWordList does not have values in selectedWordList 
    expect(store.getState().getIn([ 'entities', 'words' ]).size).toEqual(Object.keys(testInitialStateJson).length); 

  })

  it('should remove selected word item', async function() {

    // mount component
    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    // wait for async function complete
    await sleep(1000);

    // need to udpate wrapper: DON'T FORGET THIS!!!
    wrapper.update(); 

    // select word item (id=3,4,5)
    wrapper.find("CheckBoxSelector").find('input[value="3"]').simulate('change');
    wrapper.find("CheckBoxSelector").find('input[value="4"]').simulate('change');
    wrapper.find("CheckBoxSelector").find('input[value="5"]').simulate('change');

    // simulate delete controller item click
    wrapper.find(DeleteControllerItem).find("ControllerItemSelector").simulate('click');

    // expect select word modal is opened
    expect(store.getState().get('ui').get('isDeleteConfirmModalOpen')).toEqual(true);

    // simulate close button click in the modal
    wrapper.find("DeleteModalSelector").find("ConfirmButtonSelector").simulate('click');

    // expect sortedWordList does not have values in selectedWordList 
    expect(wrapper.find("CheckBoxSelector").find('input[value="3"]').exists()).toEqual(false); 
    expect(wrapper.find("CheckBoxSelector").find('input[value="4"]').exists()).toEqual(false); 
    expect(wrapper.find("CheckBoxSelector").find('input[value="5"]').exists()).toEqual(false); 
  })
  
  it('should cancel removing when delete confim modals cancel button is clicked', async function() {

    // mount component
    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    // wait for async function complete
    await sleep(1000);

    // need to udpate wrapper: DON'T FORGET THIS!!!
    wrapper.update(); 

    // select word item (id=3)
    wrapper.find("CheckBoxSelector").find('input[value="3"]').simulate('change');

    // simulate delete controller item click
    wrapper.find(DeleteControllerItem).find("ControllerItemSelector").simulate('click');

    // expect select word modal is opened
    expect(store.getState().get('ui').get('isDeleteConfirmModalOpen')).toEqual(true);

    // simulate close button click in the modal
    wrapper.find("DeleteModalSelector").find("CloseButtonSelector").simulate('click');

    // expect nothing has changed 
    expect(store.getState().getIn([ 'entities', 'words' ]).size).toEqual(Object.keys(testInitialStateJson).length); 
    
  })
})


