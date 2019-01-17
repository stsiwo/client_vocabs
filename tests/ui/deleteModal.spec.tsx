import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import DeleteModal from '../../src/representationals/business/DeleteModal/DeleteModal';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import { store } from '../helper/mockStoreConfig';
import { toggleClickType } from '../../src/containers/type';
//import { MemoryRouter } from 'react-router-dom';

describe('DeleteModal', function() {
  it('should deleteConfirmClick event handler is called when confirmation button is clicked', function() {
    // props spy and dummy 
    const deleteConfirmClickSpy: SinonSpy = sinon.spy();
    const isDeleteConfirmModalOpenDummy = true;
    const toggleDeleteConfirmModalClickDummy: toggleClickType = ( isOpen ) => {};
 
    // mount DeleteModal component
    const ContextHOC = ProviderAndThemeWrapperHOC(DeleteModal, store) 
    const wrapper = mount(
      <ContextHOC 
        deleteConfirmClick={ deleteConfirmClickSpy } 
        isDeleteConfirmModalOpen={ isDeleteConfirmModalOpenDummy } 
        toggleDeleteConfirmModalClick={ toggleDeleteConfirmModalClickDummy } 
      /> 
    ) 
    
    // simulate confirm button click 
     wrapper.find("ConfirmButtonSelector").simulate('click');

    // expect deleteWordClickSpy is called once
     sinon.assert.calledOnce(deleteConfirmClickSpy);
  })

})


