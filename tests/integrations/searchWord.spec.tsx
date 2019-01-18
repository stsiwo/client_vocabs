import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordCont from '../../src/containers/WordCont';
import { SearchWordControllerItem } from '../../src/representationals/business/Controller/SearchWordControllerItem';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import store from '../../src/storeConfig';

describe('search word functionality', function() {
  //let store: MockStoreEnhanced;

  const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
  const wrapper = mount(
    <ContextHOC />
  );

  it('should open search word modal ', function() {

    // find target event handler
    wrapper.find(SearchWordControllerItem).find("ControllerItemSelector").simulate('click');

    // make sure searchModal is open 
    expect(store.getState().ui.isSearchWordModalOpen).toEqual(true);

    expect(wrapper.find("SearchWordModalSelector").exists()).toEqual(true);
  })

  it('should selectedWordList change when click the wordList', function() {
    // test input Dummy
    const testInputDummy = "zap";

    // find target event handler
    wrapper.find("SearchSelector").find("InputSelector").simulate('change', { target: { value: testInputDummy}});

    // simuate wordlist checkbox (for zap) click
    wrapper.find('input[id="zap"]').simulate('change');

    // expect searchKeyWord state change 
    expect(store.getState().selectedWordList).toEqual(expect.arrayContaining(["6"]));
    // react state (searchKeyWord) change check
    expect(wrapper.find('input[id="zap"]').prop("checked")).toEqual(true);


  })
  it('should change state change when search word txt change ', function() {
    // test input Dummy
    const testInputDummy = "integration";

    // find target event handler
    wrapper.find("SearchSelector").find("InputSelector").simulate('change', { target: { value: testInputDummy}});

    // expect searchKeyWord state change 
    expect(store.getState().searchKeyWord).toEqual(testInputDummy);
    // react state (searchKeyWord) change check
    expect(wrapper.find("SearchSelector").prop("value")).toEqual(testInputDummy);

    // expect searchedWordList is empty
    expect(store.getState().searchedWordList).toEqual([]);

    // expect displayedWordList is searchedWordList
    expect(store.getState().displayedWordList).toEqual(store.getState().searchedWordList);

    // expect WordList (sport: initialNormalizedState) does not exits
    expect(wrapper.find('input[id="sport"]').exists()).not.toEqual(true);

  })

  it('should change state when search word txt is empty', function() {
    // test input Dummy
    const testEmptyInputDummy = "";

    // find target event handler
    wrapper.find("SearchSelector").find("InputSelector").simulate('change', { target: { value: testEmptyInputDummy}});

    // expect searchKeyWord state change 
    expect(store.getState().searchKeyWord).toEqual(testEmptyInputDummy);
    // react state (searchKeyWord) change check
    expect(wrapper.find("SearchSelector").prop("value")).toEqual(testEmptyInputDummy);

    // expect displayedWordList is sortedWordList
    expect(store.getState().displayedWordList).toEqual(store.getState().sortedWordList);

    // expect WordList ( zap : initialNormalizedState ) exits 
    expect(wrapper.find('input[id="sport"]').exists()).toEqual(true);
  })
})



