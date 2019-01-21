import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import DefineWarningModalCont from '../../src/containers/DefineWarningModalCont';
import { initialNormalizedState } from '../../src/state/index';
import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import { toggleClickType } from '../../src/containers/type';
import { toggleDefineWarningModalActionCreator } from '../../src/actions/index';

const mockStore = configureMockStore();

describe('DefineWarningModalCont', function() {
  //let store: MockStoreEnhanced;
  let store: MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialNormalizedState);
  });

  it('should include isDefineWarningModalOpen props ( MSTP function )', function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(DefineWarningModalCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // initial isDefineWarningModalOpen is false (whether false or true does not matter since this is to check functionality of MSTP function 
    expect(wrapper.find("DefineWarningModalSelector").prop('isDefineWarningModalOpen')).toEqual(false); 
  })

  it('should dispach toggleDefineWarningModalActionCreator props ( MSTP function )', function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(DefineWarningModalCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // access to toggleDefineWarningModalClick in DefineWarningModal 
    const toggleDefineWarningModalClick: toggleClickType  = wrapper.find("DefineWarningModalSelector").prop('toggleDefineWarningModalClick') 

    // prep dummy input
    const inputDummy: boolean = true;

    // call the prop
    toggleDefineWarningModalClick(inputDummy); 

    // get actions which is called 
    const actions = store.getActions();

    // expect toggleDefineWarningModalActionCreator is dispatched in mock store
    expect(actions[0]).toEqual(toggleDefineWarningModalActionCreator(inputDummy));
  })
});

