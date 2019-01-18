import * as React from 'react';
import { mount } from 'enzyme';
import DefineWarningModal from '../../src/representationals/business/DefineWarningModal/DefineWarningModal';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';

describe('DefineWarningModal component', function() {

  it('should invoke toggleDefineWarningModalClick prop is called when close button is clicked on this modal', function() {
     // 1. setup
     const isDefineWarningModalOpenDummy: boolean = true;
     const toggleDefineWarningModalClickSpy: SinonSpy = sinon.spy();
     // mount Sort component with mock props
     const wrapper = mount(<DefineWarningModal isDefineWarningModalOpen={ isDefineWarningModalOpenDummy } toggleDefineWarningModalClick={ toggleDefineWarningModalClickSpy } />) 

     // 2. act
     // simulate onChange event on radio whose id is SORT_ORDER.ALPHA_ASC 
     wrapper.find('button[id="close"]').simulate('click');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(toggleDefineWarningModalClickSpy);
  });

});



