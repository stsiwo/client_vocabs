import * as React from 'react';
import { mount } from 'enzyme';
import ResetButton from '../../src/representationals/business/Button/ResetButton';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';

describe('Sort Component', function() {

  it('should invoke the event handler is called when user click reset button', function() {
     // 1. setup
     // make spy for mdtp props to prove the event handler is called 
     const resetSortFilterClickSpy: SinonSpy = sinon.spy();
     // mount Sort component with mock props
     const wrapper = mount(<ResetButton resetSortFilterClick={ resetSortFilterClickSpy } />) 

     // 2. act
     // simulate onChange event on radio whose id is SORT_ORDER.ALPHA_ASC 
     wrapper.find('ButtonSelector').simulate('click');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(resetSortFilterClickSpy);
  });
});
