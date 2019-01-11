import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from './helper';
import NewControllerItemCont from '../../src/containers/Controller/NewControllerItemCont';
import { initialNormalizedState } from '../../src/state/index';
import configureMockStore from 'redux-mock-store';
import { addNewWordFormWrapperThunkDummyFunc } from '../storage/thunk/addNewWordForm';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import * as addNewWordFormWrapperThunk from '../../src/thunk/addNewWordForm';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([ thunk ]);

describe('NewControllerItemCont', function() {

  // this mdtp is defined in "WordListItemCont" not "NewControllerItemCont" container component
  it('should invoke toggleSearchWordModalWrapperThunk  (MDTP function) ', function() {
    let store = mockStore(Object.assign({}, initialNormalizedState, { selectedWordList: [] }));
    const ContextHOC = ProviderAndThemeWrapperHOC(NewControllerItemCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    
    const newIconClick: () => void = wrapper.find("NewControllerItem").first().prop('newIconClick');

    //  stub
    /**
     * WHEN SPY, MOCK, STUB imported function or object, use like below
     * if using ES6, you have to import as default and assign object and its method as default like below and import as object ( like import * as ... )
     **/
   let addNewWordFormWrapperThunkStub: SinonSpy = sinon.stub(addNewWordFormWrapperThunk, 'default').callsFake(addNewWordFormWrapperThunkDummyFunc)
;

    // programmarically call dispatch wrapper function since react event is tested in another test
    newIconClick();

    // get dispatched action in mock store
    const actions = store.getActions();

    sinon.assert.called(addNewWordFormWrapperThunkStub);
    
    expect(actions[0]).toEqual({ type: "dummy_thunk_action" }); 
  })

})




