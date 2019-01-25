import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordCont from '../../src/containers/WordCont';
import EditControllerItem from '../../src/representationals/business/Controller/EditControllerItem';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import store from '../../src/storeConfig';


describe('edit controller item click', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  it('should direct /word/detail when selectedWordList is not empty', function() {

      ////use initial state data
    //const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    //const wrapper = mount(
      //<ContextHOC />
    //);
   
    //****************************************************************************
     //I don't know how to test redirect url when integration testing
     //maybe it is impossible to re-render based on the route change when simulate click
    //***************************************************************************
    
     //simulate edit controller item click
    //wrapper.find(EditControllerItem).find("ControllerItemSelector").simulate('click');

    //console.log(wrapper.debug());

    //expect(wrapper.find("WordDetailSelector").exists()).toEqual(true);
    
  })
})
