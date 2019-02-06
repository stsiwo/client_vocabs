import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordCont from '../../src/containers/WordCont';
import { SortFilterControllerItem } from '../../src/representationals/business/Controller/SortFilterControllerItem';
import { resetStateActionCreator } from '../../src/actions/index';
import store from '../../src/storeConfig';
import sleep from '../helper/sleep';
import { Set } from 'immutable';
/**
 * since initialState is so big, use test data for integration test not real onw
 **/
jest.mock('../../src/thunk/asyncs/initialWordFetch');
/**
 * test data is from dist/testInitialState; NOT FROM storage/state/initialState!!!!!
 **/

describe('sort filter word functionality', function() {

  beforeEach(() => {
    store.dispatch(resetStateActionCreator());
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

    // find target event handler
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

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

    // find target event handler
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

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

    // find target event handler
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

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

    // find target event handler
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

    wrapper.find('input[id="alphAsc"]').simulate('change');

    expect(store.getState().get('currentSort')).toEqual(1);

    expect(wrapper.find('input[id="alphAsc"]').prop("checked")).toEqual(true);

    // wordlist first item should be 'sport' (check state/index)
    expect(wrapper.find('input[type="checkbox"]').first().prop('id')).toEqual('bridge');

  })

  it('should change state and component when click filter noun uncheck', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // simulate sort & filter controller icon click 
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

    // simulate filter noun icon change
    wrapper.find('input[id="noun"]').simulate('change');


    expect(store.getState().get('currentFilter')).toEqual(Set<number>([ 1,2,3,4,5,6,7,8,9 ]));

    expect(wrapper.find('input[id="noun"]').prop("checked")).toEqual(false);

    // make sure any noun word does not exist in word list 
    expect(wrapper.find("WordListSelector").find('input[id="meat"]').exists()).toEqual(false);
    
  })

  it('should change state and component when click filter verb uncheck', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // simulate sort & filter controller icon click 
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

    wrapper.find('input[id="verb"]').simulate('change');

    expect(store.getState().get('currentFilter')).toEqual(Set<number>([ 0,2,3,4,5,6,7,8,9 ]));

    expect(wrapper.find('input[id="verb"]').prop("checked")).toEqual(false);

    // make sure any verb word does not exist in word list 
    expect(wrapper.find("WordListSelector").find('input[id="voyage"]').exists()).toEqual(false);
  })

  it('should change state and component when click filter adjuctive uncheck', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // simulate sort & filter controller icon click 
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

    wrapper.find('input[id="adjuctive"]').simulate('change');

    expect(store.getState().get('currentFilter')).toEqual(Set<number>([0,1,3,4,5,6,7,8,9]));

    expect(wrapper.find('input[id="adjuctive"]').prop("checked")).toEqual(false);

    // make sure any adjuctive word does not exist in word list 
    expect(wrapper.find("WordListSelector").find('input[id="net"]').exists()).toEqual(false);
  })

  it('should change state and component when click filter adverb uncheck', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // simulate sort & filter controller icon click 
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

    wrapper.find('input[id="adverb"]').simulate('change');

    expect(store.getState().get('currentFilter')).toEqual(Set<number>([0,1,2,4,5,6,7,8,9]));

    expect(wrapper.find('input[id="adverb"]').prop("checked")).toEqual(false);

    // make sure any adverb word does not exist in word list 
    expect(wrapper.find("WordListSelector").find('input[id="humor"]').exists()).toEqual(false);
  })

  it('should change state and component when click filter preposition uncheck', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // simulate sort & filter controller icon click 
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

    wrapper.find('input[id="preposition"]').simulate('change');

    expect(store.getState().get('currentFilter')).toEqual(Set<number>([0,1,2,3,5,6,7,8,9]));

    expect(wrapper.find('input[id="preposition"]').prop("checked")).toEqual(false);

    // make sure any preposition word does not exist in word list 
    expect(wrapper.find("WordListSelector").find('input[id="bridge"]').exists()).toEqual(false);
  })

  it('should change state and component when click filter pronoun uncheck', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // simulate sort & filter controller icon click 
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

    wrapper.find('input[id="pronoun"]').simulate('change');

    expect(store.getState().get('currentFilter')).toEqual(Set<number>([0,1,2,3,4,6,7,8,9]));

    expect(wrapper.find('input[id="pronoun"]').prop("checked")).toEqual(false);

    // make sure any pronoun word does not exist in word list 
    expect(wrapper.find("WordListSelector").find('input[id="distance"]').exists()).toEqual(false);

  })

  it('should change state and component when click filter conjunction uncheck', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // simulate sort & filter controller icon click 
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

    wrapper.find('input[id="conjunction"]').simulate('change');

    expect(store.getState().get('currentFilter')).toEqual(Set<number>([0,1,2,3,4,5,7,8,9]));

    expect(wrapper.find('input[id="conjunction"]').prop("checked")).toEqual(false);

    // make sure any conjunction word does not exist in word list 
    expect(wrapper.find("WordListSelector").find('input[id="news"]').exists()).toEqual(false);
  })

  it('should change state and component when click filter interjection uncheck', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // simulate sort & filter controller icon click 
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

    wrapper.find('input[id="interjection"]').simulate('change');

    expect(store.getState().get('currentFilter')).toEqual(Set<number>([0,1,2,3,4,5,6,8,9]));

    expect(wrapper.find('input[id="interjection"]').prop("checked")).toEqual(false);

    // make sure any interjection word does not exist in word list 
    expect(wrapper.find("WordListSelector").find('input[id="goose"]').exists()).toEqual(false);
  })

  it('should change state and component when click filter idiom uncheck', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // simulate sort & filter controller icon click 
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

    wrapper.find('input[id="idiom"]').simulate('change');

    expect(store.getState().get('currentFilter')).toEqual(Set<number>([0,1,2,3,4,5,6,7,9]));

    expect(wrapper.find('input[id="idiom"]').prop("checked")).toEqual(false);

    // make sure any idiom word does not exist in word list 
    expect(wrapper.find("WordListSelector").find('input[id="muscle"]').exists()).toEqual(false);
  })

  it('should change state and component when click filter else uncheck', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // simulate sort & filter controller icon click 
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

    // id id other not else
    wrapper.find('input[id="other"]').simulate('change');

    expect(store.getState().get('currentFilter')).toEqual(Set<number>([0,1,2,3,4,5,6,7,8]));

    expect(wrapper.find('input[id="other"]').prop("checked")).toEqual(false);

    // make sure any other word does not exist in word list 
    expect(wrapper.find("WordListSelector").find('input[id="scarecrow"]').exists()).toEqual(false);
  })

  it('should change state and component when click reset button', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // simulate sort & filter controller icon click 
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');
    wrapper.find('input[id="dateNewer"]').simulate('change');

    wrapper.find('input[id="noun"]').simulate('change');
    wrapper.find('input[id="verb"]').simulate('change');
    wrapper.find('input[id="adjuctive"]').simulate('change');
    wrapper.find('input[id="adverb"]').simulate('change');
    wrapper.find('input[id="preposition"]').simulate('change');
    wrapper.find('input[id="pronoun"]').simulate('change');
    wrapper.find('input[id="conjunction"]').simulate('change');
    wrapper.find('input[id="interjection"]').simulate('change');
    wrapper.find('input[id="idiom"]').simulate('change');
    wrapper.find('input[id="other"]').simulate('change');
    
    // 
    expect(wrapper.find("WordListSelector").find('input[id="meat"]').exists()).toEqual(false);
    expect(wrapper.find("WordListSelector").find('input[id="voyage"]').exists()).toEqual(false);
    expect(wrapper.find("WordListSelector").find('input[id="net"]').exists()).toEqual(false);
    expect(wrapper.find("WordListSelector").find('input[id="humor"]').exists()).toEqual(false);
    expect(wrapper.find("WordListSelector").find('input[id="bridge"]').exists()).toEqual(false);
    expect(wrapper.find("WordListSelector").find('input[id="distance"]').exists()).toEqual(false);
    expect(wrapper.find("WordListSelector").find('input[id="news"]').exists()).toEqual(false);
    expect(wrapper.find("WordListSelector").find('input[id="goose"]').exists()).toEqual(false);
    expect(wrapper.find("WordListSelector").find('input[id="muscle"]').exists()).toEqual(false);
    expect(wrapper.find("WordListSelector").find('input[id="scarecrow"]').exists()).toEqual(false);

    // simulate reset button click
    wrapper.find('button[id="reset"]').simulate('click');

    // default state
    expect(store.getState().get('currentFilter')).toEqual(Set<number>([0,1,2,3,4,5,6,7,8,9]));
    expect(store.getState().get('currentSort')).toEqual(1);

    // default 
    expect(wrapper.find('input[id="alphAsc"]').prop("checked")).toEqual(true);
    expect(wrapper.find('input[id="noun"]').prop("checked")).toEqual(true);
    expect(wrapper.find('input[id="verb"]').prop("checked")).toEqual(true);
    expect(wrapper.find('input[id="adjuctive"]').prop("checked")).toEqual(true);
    expect(wrapper.find('input[id="adverb"]').prop("checked")).toEqual(true);
    expect(wrapper.find('input[id="preposition"]').prop("checked")).toEqual(true);
    expect(wrapper.find('input[id="pronoun"]').prop("checked")).toEqual(true);
    expect(wrapper.find('input[id="conjunction"]').prop("checked")).toEqual(true);
    expect(wrapper.find('input[id="interjection"]').prop("checked")).toEqual(true);
    expect(wrapper.find('input[id="idiom"]').prop("checked")).toEqual(true);
    expect(wrapper.find('input[id="other"]').prop("checked")).toEqual(true);

    // make sure any other word does not exist in word list 
    expect(wrapper.find("WordListSelector").find('input[id="meat"]').exists()).toEqual(true);
    expect(wrapper.find("WordListSelector").find('input[id="voyage"]').exists()).toEqual(true);
    expect(wrapper.find("WordListSelector").find('input[id="net"]').exists()).toEqual(true);
    expect(wrapper.find("WordListSelector").find('input[id="humor"]').exists()).toEqual(true);
    expect(wrapper.find("WordListSelector").find('input[id="bridge"]').exists()).toEqual(true);
    expect(wrapper.find("WordListSelector").find('input[id="distance"]').exists()).toEqual(true);
    expect(wrapper.find("WordListSelector").find('input[id="news"]').exists()).toEqual(true);
    expect(wrapper.find("WordListSelector").find('input[id="goose"]').exists()).toEqual(true);
    expect(wrapper.find("WordListSelector").find('input[id="muscle"]').exists()).toEqual(true);
    expect(wrapper.find("WordListSelector").find('input[id="scarecrow"]').exists()).toEqual(true);
  })

  it('should change state and component when click close button', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait initial fetch word
    await sleep(1000);

    // update 
    wrapper.update();

    // simulate sort & filter controller icon click 
    wrapper.find(SortFilterControllerItem).find("ControllerItemSelector").simulate('click');

    wrapper.find('button[id="close"]').simulate('click');

    expect(store.getState().get('ui').get('isSortFilterModalOpen')).toEqual(false);

    expect(wrapper.find("SortFilterModalSelector").exists()).not.toEqual(true);
  })
})




