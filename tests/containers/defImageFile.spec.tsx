import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import DefImageFileCont from '../../src/containers/Form/DefImageFileCont';
import { initialNormalizedState } from '../../src/state/index';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { updateDefImageActionCreator } from '../../src/actions/index';
import { formikDummy } from '../storage/Hoc/formik';

const mockStore = configureMockStore([ thunk ]);

describe('DefImageFileCont', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  // this mdtp is defined in "WordListItemCont" not "DefImageFileCont" container component
  it('should invoke updateDefImageActionCreator (MDTP function)', function() {
    
    let store: MockStoreEnhanced;
    // change initial currentSort and currentFilter
    store = mockStore(Object.assign({}, initialNormalizedState));

    const ContextHOC = ProviderAndThemeWrapperHOC(DefImageFileCont, store);
    const wrapper = mount(
      <ContextHOC image={ "test-image" } handleSearchImageToggleClick={ (e: React.MouseEvent<HTMLElement>) => {} } wordIndex={ 0 } defIndex={ 0 } formik={ formikDummy }/>
    );
    
    const updateDefImageClick: (id: string, nextImage: string) => void = wrapper.find("DefImageFile").first().prop('updateDefImageClick');

    // programmarically call dispatch wrapper function since react event is tested in another test
    updateDefImageClick("0", "image test");

    // get dispatched action in mock store
    const actions = store.getActions();

    // check dispatched action is dummy
    expect(actions[0]).toEqual(updateDefImageActionCreator("0", "image test")); 
  })
})




