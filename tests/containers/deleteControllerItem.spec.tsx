import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from './helper';
import DeleteControllerItemCont from '../../src/containers/Controller/DeleteControllerItemCont';
import { initialNormalizedState } from '../../src/state/index';
import configureMockStore from 'redux-mock-store';
import { toggleClickType } from '../../src/containers/type';
import { toggleSelectWarningModalAction, toggleDeleteConfirmModalAction } from '../../src/actions/index';

const mockStore = configureMockStore();

describe('DeleteControllerItemCont', function() {

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
  it('should invoke dispatch function with toggleSelectWarningModalAction action (MDTP function) ', function() {
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
    
    expect(actions[0]).toEqual(toggleSelectWarningModalAction(true)); 
  })

  it('should invoke dispatch function with toggleDeleteConfirmModalClick action (MDTP function) ', function() {
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
    
    expect(actions[0]).toEqual(toggleDeleteConfirmModalAction(true)); 
  })
})



