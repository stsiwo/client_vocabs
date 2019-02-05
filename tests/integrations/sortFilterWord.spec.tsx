import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordCont from '../../src/containers/WordCont';
import { SortFilterControllerItem } from '../../src/representationals/business/Controller/SortFilterControllerItem';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import store from '../../src/storeConfig';
import sleep from '../helper/sleep';
/**
 * since initialState is so big, use test data for integration test not real onw
 **/
jest.mock('../../src/thunk/asyncs/initialWordFetch');
/**
 * test data is from dist/testInitialState; NOT FROM storage/state/initialState!!!!!
 **/

describe('sort filter word functionality', function() {

  it('should open s&f word modal ', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // find target event handler
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

    // make sure searchModal is open 
    expect(store.getState().getIn([ 'ui', 'isSortFilterModalOpen' ])).toEqual(true);

    expect(wrapper.find("SortFilterModalSelector").exists()).toEqual(true);
  })

  it('should change state and component when click sort alpha desc icon ', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    wrapper.find('input[id="alphDesc"]').simulate('change');

    expect(store.getState().get('currentSort')).toEqual(2);

    expect(wrapper.find('input[id="alphDesc"]').prop("checked")).toEqual(true);

    // wordlist first item should be 'zap'
    expect(wrapper.find('input[type="checkbox"]').first().prop('id')).toEqual('voyage');

  })

  it('should change state and component when click sort date newer icon ', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    wrapper.find('input[id="dateNewer"]').simulate('change');

    expect(store.getState().get('currentSort')).toEqual(3);

    expect(wrapper.find('input[id="dateNewer"]').prop("checked")).toEqual(true);

    // wordlist first item should be 'sport' (check state/index)
    expect(wrapper.find('input[type="checkbox"]').first().prop('id')).toEqual('scarecrow');

  })

  it('should change state and component when click sort date older icon ', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    wrapper.find('input[id="dateOlder"]').simulate('change');

    expect(store.getState().get('currentSort')).toEqual(4);

    expect(wrapper.find('input[id="dateOlder"]').prop("checked")).toEqual(true);

    // wordlist first item should be 'sport' (check state/index)
    expect(wrapper.find('input[type="checkbox"]').first().prop('id')).toEqual('meat');

  })

  it('should change state and component when click sort alpha asc icon ', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    wrapper.find('input[id="alphAsc"]').simulate('change');

    expect(store.getState().get('currentSort')).toEqual(1);

    expect(wrapper.find('input[id="alphAsc"]').prop("checked")).toEqual(true);

    // wordlist first item should be 'sport' (check state/index)
    expect(wrapper.find('input[type="checkbox"]').first().prop('id')).toEqual('bridge');

  })

  //it('should change state and component when click filter noun uncheck', function() {
    //wrapper.find('input[id="noun"]').simulate('change');

    //expect(store.getState().currentFilter).toEqual(expect.arrayContaining([1,2,3,4,5,6,7,8,9]));

    //expect(wrapper.find('input[id="noun"]').prop("checked")).toEqual(true);

    //// wordlist first item should be 'sport' (check state/index)
    //expect(wrapper.find('input[type="biblical"]').exists()).not.toEqual(true);
  //})

  //it('should change state and component when click filter verb uncheck', function() {
    //wrapper.find('input[id="verb"]').simulate('change');

    //expect(store.getState().currentFilter).toEqual(expect.arrayContaining([0,2,3,4,5,6,7,8,9]));

    //expect(wrapper.find('input[id="verb"]').prop("checked")).toEqual(true);

    //// wordlist first item should be 'sport' (check state/index)
    //expect(wrapper.find('input[type="hypothesis"]').exists()).not.toEqual(true);
  //})

  //it('should change state and component when click filter adjuctive uncheck', function() {
    //wrapper.find('input[id="adjuctive"]').simulate('change');

    //expect(store.getState().currentFilter).toEqual(expect.arrayContaining([0,1,3,4,5,6,7,8,9]));

    //expect(wrapper.find('input[id="adjuctive"]').prop("checked")).toEqual(true);

    //// wordlist first item should be 'sport' (check state/index)
    //expect(wrapper.find('input[type="address"]').exists()).not.toEqual(true);
  //})

  //it('should change state and component when click filter adverb uncheck', function() {
    //wrapper.find('input[id="adverb"]').simulate('change');

    //expect(store.getState().currentFilter).toEqual(expect.arrayContaining([0,1,2,4,5,6,7,8,9]));

    //expect(wrapper.find('input[id="adverb"]').prop("checked")).toEqual(true);

    //// wordlist first item should be 'sport' (check state/index)
    //expect(wrapper.find('input[type="longevity"]').exists()).not.toEqual(true);
  //})

  //it('should change state and component when click filter preposition uncheck', function() {
    //wrapper.find('input[id="preposition"]').simulate('change');

    //expect(store.getState().currentFilter).toEqual(expect.arrayContaining([0,1,2,3,5,6,7,8,9]));

    //expect(wrapper.find('input[id="preposition"]').prop("checked")).toEqual(true);

    //// wordlist first item should be 'sport' (check state/index)
    //expect(wrapper.find('input[type="elaborate"]').exists()).not.toEqual(true);
  //})

  //it('should change state and component when click filter pronoun uncheck', function() {
    //wrapper.find('input[id="pronoun"]').simulate('change');

    //expect(store.getState().currentFilter).toEqual(expect.arrayContaining([0,1,2,3,4,6,7,8,9]));

    //expect(wrapper.find('input[id="pronoun"]').prop("checked")).toEqual(true);

    //// wordlist first item should be 'sport' (check state/index)
    //expect(wrapper.find('input[type="curry"]').exists()).not.toEqual(true);
  //})

  //it('should change state and component when click filter conjunction uncheck', function() {
    //wrapper.find('input[id="conjunction"]').simulate('change');

    //expect(store.getState().currentFilter).toEqual(expect.arrayContaining([0,1,2,3,4,5,7,8,9]));

    //expect(wrapper.find('input[id="conjunction"]').prop("checked")).toEqual(true);

    //// wordlist first item should be 'sport' (check state/index)
    //expect(wrapper.find('input[type="zap"]').exists()).not.toEqual(true);
  //})

  //it('should change state and component when click filter interjection uncheck', function() {
    //wrapper.find('input[id="interjection"]').simulate('change');

    //expect(store.getState().currentFilter).toEqual(expect.arrayContaining([0,1,2,3,4,5,6,8,9]));

    //expect(wrapper.find('input[id="interjection"]').prop("checked")).toEqual(true);

    //// wordlist first item should be 'sport' (check state/index)
    //expect(wrapper.find('input[type="dictation"]').exists()).not.toEqual(true);
  //})

  //it('should change state and component when click filter idiom uncheck', function() {
    //wrapper.find('input[id="idiom"]').simulate('change');

    //expect(store.getState().currentFilter).toEqual(expect.arrayContaining([0,1,2,3,4,5,6,7,9]));

    //expect(wrapper.find('input[id="idiom"]').prop("checked")).toEqual(true);

    //// wordlist first item should be 'sport' (check state/index)
    //expect(wrapper.find('input[type="valt"]').exists()).not.toEqual(true);
  //})

  //it('should change state and component when click filter else uncheck', function() {
    //// id id other not else
    //wrapper.find('input[id="other"]').simulate('change');

    //expect(store.getState().currentFilter).toEqual(expect.arrayContaining([0,1,2,3,4,5,6,7,8]));

    //expect(wrapper.find('input[id="other"]').prop("checked")).toEqual(true);

    //// wordlist first item should be 'sport' (check state/index)
    //expect(wrapper.find('input[type="occupation"]').exists()).not.toEqual(true);
  //})

  //it('should change state and component when click reset button', function() {
    //wrapper.find('button[id="reset"]').simulate('click');

    //expect(store.getState().currentFilter).toEqual(expect.arrayContaining([0,1,2,3,4,5,6,7,8,9]));
    //expect(store.getState().currentSort).toEqual(1);

    //expect(wrapper.find('input[id="alphAsc"]').prop("checked")).toEqual(true);
    //expect(wrapper.find('input[id="noun"]').prop("checked")).toEqual(true);
    //expect(wrapper.find('input[id="verb"]').prop("checked")).toEqual(true);
    //expect(wrapper.find('input[id="adjuctive"]').prop("checked")).toEqual(true);
    //expect(wrapper.find('input[id="adverb"]').prop("checked")).toEqual(true);
    //expect(wrapper.find('input[id="preposition"]').prop("checked")).toEqual(true);
    //expect(wrapper.find('input[id="pronoun"]').prop("checked")).toEqual(true);
    //expect(wrapper.find('input[id="conjunction"]').prop("checked")).toEqual(true);
    //expect(wrapper.find('input[id="interjection"]').prop("checked")).toEqual(true);
    //expect(wrapper.find('input[id="idiom"]').prop("checked")).toEqual(true);
    //expect(wrapper.find('input[id="other"]').prop("checked")).toEqual(true);

  //})

  //it('should change state and component when click close button', function() {
    //wrapper.find('button[id="close"]').simulate('click');

    //expect(store.getState().ui.isSortFilterModalOpen).toEqual(false);

    //expect(wrapper.find("SortFilterModalSelector").exists()).not.toEqual(true);
  //})
})




