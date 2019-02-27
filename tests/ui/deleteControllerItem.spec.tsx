import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import DeleteControllerItem from '../../src/representationals/business/Controller/DeleteControllerItem';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import { store } from '../helper/mockStoreConfig';
//import { MemoryRouter } from 'react-router-dom';

describe('DeleteControllerItem', function() {
  it('should onDeleteClick event handler is called when delete icon is clicked', function() {
    // props spy 
    const deleteWordClickSpy: SinonSpy = sinon.spy();
 
    const ContextHOC = ProviderAndThemeWrapperHOC(DeleteControllerItem, store) 
    const wrapper = mount(
      <ContextHOC deleteWordClick={ deleteWordClickSpy } /> 
    ) 
    
     wrapper.find("ControllerItemSelector").simulate('click');

     sinon.assert.calledOnce(deleteWordClickSpy);
  })

})

