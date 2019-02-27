import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import EditControllerItem from '../../src/representationals/business/Controller/EditControllerItem';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import { store } from '../helper/mockStoreConfig';
//import { MemoryRouter } from 'react-router-dom';

describe('EditControllerItem', function() {
  it('should onEditClick event handler is called when edit icon is clicked', function() {
    // props spy 
    const editWordClickSpy: SinonSpy = sinon.spy();
 
    const ContextHOC = ProviderAndThemeWrapperHOC(EditControllerItem, store) 
    const wrapper = mount(
      <ContextHOC editWordClick={ editWordClickSpy } /> 
    ) 
    
     wrapper.find("ControllerItemSelector").simulate('click');

     sinon.assert.calledOnce(editWordClickSpy);
  })

})


