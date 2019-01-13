import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import SelectAllControllerItemCont from '../../src/containers/Controller/SelectAllControllerItemCont';
import { initialNormalizedState } from '../../src/state/index';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import { selectAllWordDispatchType } from '../../src/containers/type';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { selectAllIconClickWrapperThunkDummyFunc } from '../storage/containers/selectAllControllerItem'; 
import * as selectAllIconClickWrapperThunk from '../../src/thunk/selectAllIconClick';

const mockStore = configureMockStore([ thunk ]);

describe('SelectAllControllerItemCont', function() {
  //let store: MockStoreEnhanced;
  let store: MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialNormalizedState);
  });

  // this mdtp is defined in "WordListItemCont" not "SelectAllControllerItemCont" container component
  it('should invoke dispatch thunk (MDTP function)', function() {
    const ContextHOC = ProviderAndThemeWrapperHOC(SelectAllControllerItemCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    
    const toggleSelectWordChange: selectAllWordDispatchType = wrapper.find("SelectAllControllerItem").first().prop('selectAllWordClick');

    //  stub
    /**
     * WHEN SPY, MOCK, STUB imported function or object, use like below
     * if using ES6, you have to import as default and assign object and its method as default like below and import as object ( like import * as ... )
     **/
    const selectAllIconClickWrapperThunkStub: SinonSpy = sinon.stub(selectAllIconClickWrapperThunk, 'default').callsFake(selectAllIconClickWrapperThunkDummyFunc)

    // programmarically call dispatch wrapper function since react event is tested in another test
    toggleSelectWordChange();

    // get dispatched action in mock store
    const actions = store.getActions();

    // verify spy is calld
    sinon.assert.calledOnce(selectAllIconClickWrapperThunkStub);
    
    expect(actions[0]).toEqual({ type: "dummy_thunk_action", }); 
  })
})

