import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import DefTree from '../../src/representationals/business/Form/DefTree';
import { defTestData } from '../storage/domains/def';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialNormalizedState } from '../../src/state/index';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import { IDef } from '../../src/domains/def';

interface Props {
  className?: string;
  defs: IDef[]; 
  addNewDefClick: ( wordId: string ) => void;
}

describe('DefTree', function() {
  const mockStore = configureMockStore([ thunk ]);
  it('should invoke the event handler is called when word text is change', function() {

    let store = mockStore(initialNormalizedState);
    // props spy 
    const addNewDefClickSpy: SinonSpy = sinon.spy();
 
    const ContextHOC = ProviderAndThemeWrapperHOC<Props>(DefTree, store);
     const wrapper = mount(
        <ContextHOC defs={ [ defTestData ] } addNewDefClick={ addNewDefClickSpy } />
     ) 
    
     wrapper.find("IconSelector").at(1).simulate('click');

     sinon.assert.calledOnce(addNewDefClickSpy);
  })
})


