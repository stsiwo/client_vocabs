import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import DeleteModalCont from '../../src/containers/DeleteModalCont';
import configureMockStore from 'redux-mock-store';
import { initialNormalizedState } from '../../src/state/index';
import { removeWordWrapperThunkDummyFunc } from '../storage/thunk/removeWord';
import { toggleDeleteConfirmModalActionCreator } from '../../src/actions/index';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import * as removeWordWrapperThunk from '../../src/thunk/removeWord';
import thunk from 'redux-thunk';
import { toggleClickType } from '../../src/containers/type';

const mockStore = configureMockStore([ thunk ]);

describe('DeleteModalCont', function() {
      //  stub
    /**
     * WHEN SPY, MOCK, STUB imported function or object, use like below
     * if using ES6, you have to import as default and assign object and its method as default like below and import as object ( like import * as ... )
     **/
   let removeWordWrapperThunkStub: SinonSpy = sinon.stub(removeWordWrapperThunk, 'default').callsFake(removeWordWrapperThunkDummyFunc)
;
  it('should send isDeleteConfirmModalOpen prop with false value (MSTP function) ', function() {
    // set sotore with default initialNormalizedState
    let store = mockStore(initialNormalizedState);
    
    // mount DeleteModalCont component
    const ContextHOC = ProviderAndThemeWrapperHOC(DeleteModalCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    
    // find mdtp function 
    const isDeleteConfirmModalOpen: boolean = wrapper.find("DeleteModal").first().prop('isDeleteConfirmModalOpen');

    // expect this props to be false (default value) 
    expect(isDeleteConfirmModalOpen).toEqual(false);
    
  });

  it('should invoke toggleDeleteConfirmModalActionCreator (MDTP function) ', function() {
    // set sotore with default initialNormalizedState
    let store = mockStore(initialNormalizedState);
    
    // mount DeleteModalCont component
    const ContextHOC = ProviderAndThemeWrapperHOC(DeleteModalCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    
    // find mdtp function 
    const toggleDeleteConfirmModalClick: toggleClickType = wrapper.find("DeleteModal").first().prop('toggleDeleteConfirmModalClick');

    // dummy isOpen input
    const isOpen = true;
    // programmarically call dispatch wrapper function since react event is tested in another test
    toggleDeleteConfirmModalClick(isOpen);

    // get dispatched action in mock store
    const actions = store.getActions();

    expect(actions[0]).toEqual(toggleDeleteConfirmModalActionCreator(isOpen)); 
  })

  it('should invoke removeWordWrapperThunk (MDTP function) ', function() {
    // set sotore with default initialNormalizedState
    let store = mockStore(initialNormalizedState);
    
    // mount DeleteModalCont component
    const ContextHOC = ProviderAndThemeWrapperHOC(DeleteModalCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    
    // find mdtp function 
    const deleteConfirmClick: () => void = wrapper.find("DeleteModal").first().prop('deleteConfirmClick');

    // programmarically call dispatch wrapper function since react event is tested in another test
    deleteConfirmClick();

    // get dispatched action in mock store
    const actions = store.getActions();
    
    sinon.assert.called(removeWordWrapperThunkStub);

    expect(actions[0]).toEqual({ type: "dummy_thunk_action" }); 
  })
})




