import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import PosSelectCont from '../../src/containers/Form/PosSelectCont';
import { initialNormalizedState } from '../../src/state/index';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { updateDefPosAction } from '../../src/actions/index';

const mockStore = configureMockStore([ thunk ]);

describe('PosSelectCont', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  // this mdtp is defined in "WordListItemCont" not "PosSelectCont" container component
  it('should invoke updateDefPosAction (MDTP function)', function() {
    
    let store: MockStoreEnhanced;
    // change initial currentSort and currentFilter
    store = mockStore(Object.assign({}, initialNormalizedState));

    const ContextHOC = ProviderAndThemeWrapperHOC(PosSelectCont, store);
    const wrapper = mount(
      <ContextHOC pos={ 1 } defId={ "0" } />
    );
    
    const updateDefPosChange: (id: string, nextPos: number) => void = wrapper.find("PosSelect").first().prop('updateDefPosChange');

    // programmarically call dispatch wrapper function since react event is tested in another test
    updateDefPosChange("0", 2 );

    // get dispatched action in mock store
    const actions = store.getActions();

    // check dispatched action is dummy
    expect(actions[0]).toEqual(updateDefPosAction("0", 2 )); 
  })
})






