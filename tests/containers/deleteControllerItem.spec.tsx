import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from './helper';
import DeleteControllerItemCont from '../../src/containers/Controller/DeleteControllerItemCont';
import { initialNormalizedState } from '../../src/state/index';
import configureMockStore from 'redux-mock-store';
import { toggleClickType } from '../../src/containers/type';
import { openModalWrapperThunkDummyFunc } from '../storage/thunk/openModal';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import * as openModalWrapperThunk from '../../src/thunk/openModal';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([ thunk ]);

describe('DeleteControllerItemCont', function() {
      //  stub
    /**
     * WHEN SPY, MOCK, STUB imported function or object, use like below
     * if using ES6, you have to import as default and assign object and its method as default like below and import as object ( like import * as ... )
     **/
   let openModalWrapperThunkStub: SinonSpy = sinon.stub(openModalWrapperThunk, 'default').callsFake(openModalWrapperThunkDummyFunc)
;

  it('should send isSelectedWordListEmpty props with false value ( MSTP function )', function() {
    let store = mockStore(initialNormalizedState);
    /**
     * sortedWordList: [0,1,2,3,4,5,6,7,8,9,10],
     * selectedWordList: [0,1,2,3],
     **/
    const ContextHOC = ProviderAndThemeWrapperHOC(DeleteControllerItemCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    // since initial selectedWordList is not empty, it returns false
    expect(wrapper.find("DeleteControllerItem").prop('isSelectedWordListEmpty')).toEqual(false); 
  })

  it('should send isSelectedWordListEmpty props with true value ( MSTP function )', function() {
    // change initialNormalizedState's selectedWordList to empty
    let store = mockStore(Object.assign({}, initialNormalizedState, { selectedWordList: [] }));
    /**
     * sortedWordList: [0,1,2,3,4,5,6,7,8,9,10],
     * selectedWordList: [0,1,2,3],
     **/
    const ContextHOC = ProviderAndThemeWrapperHOC(DeleteControllerItemCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    // since initial selectedWordList is not empty, it returns false
    expect(wrapper.find("DeleteControllerItem").prop('isSelectedWordListEmpty')).toEqual(true); 
  })

  // this mdtp is defined in "WordListItemCont" not "DeleteControllerItemCont" container component
  it('should invoke openModalWrapperThunk  (MDTP function) ', function() {
    let store = mockStore(Object.assign({}, initialNormalizedState, { selectedWordList: [] }));
    const ContextHOC = ProviderAndThemeWrapperHOC(DeleteControllerItemCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    
    const toggleSelectWarningModalClick: toggleClickType = wrapper.find("DeleteControllerItem").first().prop('toggleSelectWarningModalClick');

    // programmarically call dispatch wrapper function since react event is tested in another test
    toggleSelectWarningModalClick(true);

    // get dispatched action in mock store
    const actions = store.getActions();

    sinon.assert.called(openModalWrapperThunkStub);
    
    expect(actions[0]).toEqual({ type: "dummy_thunk_action" }); 
  })

  it('should invoke openModalWrapperThunk (MDTP function) ', function() {
    let store = mockStore(initialNormalizedState);
    const ContextHOC = ProviderAndThemeWrapperHOC(DeleteControllerItemCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    
    const toggleDeleteConfirmModalClick: toggleClickType = wrapper.find("DeleteControllerItem").first().prop('toggleDeleteConfirmModalClick');

    // programmarically call dispatch wrapper function since react event is tested in another test
    toggleDeleteConfirmModalClick(true);

    // get dispatched action in mock store
    const actions = store.getActions();
    
    sinon.assert.called(openModalWrapperThunkStub);

    expect(actions[0]).toEqual({ type: "dummy_thunk_action" }); 
  })
})



