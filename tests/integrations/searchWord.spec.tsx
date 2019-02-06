import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordCont from '../../src/containers/WordCont';
import { SearchWordControllerItem } from '../../src/representationals/business/Controller/SearchWordControllerItem';
import store from '../../src/storeConfig';
import sleep from '../helper/sleep';
import { OrderedSet } from 'immutable';
/**
 * since initialState is so big, use test data for integration test not real onw
 **/
jest.mock('../../src/thunk/asyncs/initialWordFetch');
/**
 * test data is from dist/testInitialState; NOT FROM storage/state/initialState!!!!!
 **/

describe('search word functionality', function() {

  it('should open search word modal ', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // find target event handler
    wrapper.find(SearchWordControllerItem).find("ControllerItemSelector").simulate('click');

    // make sure searchModal is open 
    expect(store.getState().get('ui').get('isSearchWordModalOpen')).toEqual(true);

    expect(wrapper.find("SearchWordModalSelector").exists()).toEqual(true);
  })

  it('should selectedWordList change when click the wordList', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // test input Dummy
    const testInputDummy = "meat";

    // find target event handler
    wrapper.find("SearchSelector").find("InputSelector").simulate('change', { target: { value: testInputDummy}});

    // simuate wordlist checkbox (for zap) click
    wrapper.find('input[id="meat"]').simulate('change');

    // expect searchKeyWord state change 
    expect(store.getState().get('selectedWordList')).toEqual(OrderedSet<string>(["1"]));
    // react state (searchKeyWord) change check
    expect(wrapper.find('input[id="meat"]').prop("checked")).toEqual(true);


  })
  it('should change state change when search word txt change ', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // test input Dummy
    const testInputDummy = "integration";

    // find target event handler
    wrapper.find("SearchSelector").find("InputSelector").simulate('change', { target: { value: testInputDummy}});

    // expect searchKeyWord state change 
    expect(store.getState().get('searchKeyWord')).toEqual(testInputDummy);
    // react state (searchKeyWord) change check
    expect(wrapper.find("SearchSelector").prop("value")).toEqual(testInputDummy);

    // expect searchedWordList is empty
    expect(store.getState().get('searchedWordList')).toEqual(OrderedSet<string>());

    // expect displayedWordList is searchedWordList
    expect(store.getState().get('displayedWordList')).toEqual(store.getState().get('searchedWordList'));

    // expect WordList (sport: initialNormalizedState) does not exits
    expect(wrapper.find('input[id="meat"]').exists()).not.toEqual(true);

  })

  it('should change state when search word txt is empty', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // test input Dummy
    const testEmptyInputDummy = "";

    // find target event handler
    wrapper.find("SearchSelector").find("InputSelector").simulate('change', { target: { value: testEmptyInputDummy}});

    // expect searchKeyWord state change 
    expect(store.getState().get('searchKeyWord')).toEqual(testEmptyInputDummy);
    // react state (searchKeyWord) change check
    expect(wrapper.find("SearchSelector").prop("value")).toEqual(testEmptyInputDummy);

    // expect displayedWordList is sortedWordList
    expect(store.getState().get('displayedWordList')).toEqual(store.getState().get('sortedWordList'));

    // expect WordList ( zap : initialNormalizedState ) exits 
    expect(wrapper.find('input[id="meat"]').exists()).toEqual(true);
  })
})



