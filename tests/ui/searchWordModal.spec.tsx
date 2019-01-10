import * as React from 'react';
import { mount } from 'enzyme';
import SearchWordModal from '../../src/representationals/business/SearchWordModal/SearchWordModal';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';

describe('SearchWordModal component', function() {

  it('should invoke handleChangeSearchKeyWord handler is called when search keyword text is changed', function() {
     // 1. setup
     // check SORT_ORDER.ALPHA_DESC for testing SORT_ORDER.ALPHA_ASC
     const searchKeyWordDummy: string = 'test';
     const changeSearchKeyWordSpy: SinonSpy = sinon.spy();
     // mount Sort component with mock props
     const wrapper = mount(<SearchWordModal searchKeyWord={ searchKeyWordDummy } changeSearchKeyWord={ changeSearchKeyWordSpy }/>) 

     // 2. act
     // simulate onChange event on radio whose id is SORT_ORDER.ALPHA_ASC 
     wrapper.find('InputSelector').simulate('change');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(changeSearchKeyWordSpy);
  });

});


