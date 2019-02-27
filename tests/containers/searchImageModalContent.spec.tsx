import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import SearchImageModalContentCont from '../../src/containers/SearchImageModalContentCont';
import { initialNormalizedState } from '../../src/state/index';
import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';

const mockStore = configureMockStore();

describe('SearchImageModalContentCont', function() {
  //let store: MockStoreEnhanced;
  let store: MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialNormalizedState);
  });

  it('should include words props ( MSTP function )', function() {

    // initial data
  //{
    //id: "0",
    //name: "sport",
    //creationDate: "1995-12-17T03:24:00",
    //defs: [
      //{
        //id: "0",
        //pos: PosEnum.NOUN, 
        //def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        //image: "image1",
        //wordId: "0",
      //},
    const ContextHOC = ProviderAndThemeWrapperHOC(SearchImageModalContentCont, store);
    const wrapper = mount(
      <ContextHOC defId={ "0" } wordId={ "0" } />
    );
    // model date: storage/containers/wordListCont.ts
    expect(wrapper.find("SearchImageModalContent").prop('wordName')).toEqual("sport"); 
  })
});

