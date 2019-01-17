import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import DeleteControllerItemCont from '../../src/containers/Controller/DeleteControllerItemCont';
import configureMockStore from 'redux-mock-store';
import { initialNormalizedState } from '../../src/state/index';
import { checkDeleteWordWrapperThunkDummyFunc } from '../storage/thunk/checkDeleteWord';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import * as checkDeleteWordWrapperThunk from '../../src/thunk/checkDeleteWord';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([ thunk ]);

describe('DeleteControllerItemCont', function() {
      //  stub
    /**
     * WHEN SPY, MOCK, STUB imported function or object, use like below
     * if using ES6, you have to import as default and assign object and its method as default like below and import as object ( like import * as ... )
     **/
   let checkDeleteWordWrapperThunkStub: SinonSpy = sinon.stub(checkDeleteWordWrapperThunk, 'default').callsFake(checkDeleteWordWrapperThunkDummyFunc)
;


  it('should invoke checkDeleteWordWrapperThunk (MDTP function) ', function() {
    // set sotore with default initialNormalizedState
    let store = mockStore(initialNormalizedState);
    
    // mount DeleteControllerItemCont component
    const ContextHOC = ProviderAndThemeWrapperHOC(DeleteControllerItemCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    
    // find mdtp function 
    const deleteWordClick: () => void = wrapper.find("DeleteControllerItem").first().prop('deleteWordClick');

    // programmarically call dispatch wrapper function since react event is tested in another test
    deleteWordClick();

    // get dispatched action in mock store
    const actions = store.getActions();
    
    sinon.assert.called(checkDeleteWordWrapperThunkStub);

    expect(actions[0]).toEqual({ type: "dummy_thunk_action" }); 
  })
})



