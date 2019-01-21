import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import EditControllerItemCont from '../../src/containers/Controller/EditControllerItemCont';
import { initialNormalizedState } from '../../src/state/index';
import configureMockStore from 'redux-mock-store';
import * as editWordWrapperThunk from '../../src/thunk/editWord'; 
import { editWordWrapperThunkDummyFunc } from '../storage/thunk/editWord';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([ thunk ]);

describe('EditControllerItemCont', function() {

    //  stub
    /**
     * WHEN SPY, MOCK, STUB imported function or object, use like below
     * if using ES6, you have to import as default and assign object and its method as default like below and import as object ( like import * as ... )
     **/
    const editWordWrapperThunkStub: SinonSpy = sinon.stub(editWordWrapperThunk, 'default').callsFake(editWordWrapperThunkDummyFunc)


  it('should invoke editWordClick (MDTP function)', function() {
    let store = mockStore(initialNormalizedState);
    const ContextHOC = ProviderAndThemeWrapperHOC(EditControllerItemCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    
    const editWordClick: () => void = wrapper.find("EditControllerItem").first().prop('editWordClick');


    // programmarically call dispatch wrapper function since react event is tested in another test
    editWordClick();

    // get dispatched action in mock store
    const actions = store.getActions();

    sinon.assert.called(editWordWrapperThunkStub);
    
    expect(actions[0]).toEqual({ type: "dummy_thunk_action" }); 
  })
})


