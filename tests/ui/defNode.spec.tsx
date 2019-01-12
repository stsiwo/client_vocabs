import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import DefNode from '../../src/representationals/business/Form/DefNode';
import { defTestData } from '../storage/domains/def';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialNormalizedState } from '../../src/state/index';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import { IDef } from '../../src/domains/def';

interface Props {
  className?: string;
  def: IDef;
  isOpen: boolean;
  removeDefClick: ( wordId: string, defId: string ) => void;
}

describe('DefNode', function() {
  const mockStore = configureMockStore([ thunk ]);
  it('should invoke the event handler is called when word text is change', function() {
    let store = mockStore(initialNormalizedState);

    // props spy 
    const removeDefClickSpy: SinonSpy = sinon.spy();
 
    const ContextHOC = ProviderAndThemeWrapperHOC<Props>(DefNode, store);
    const wrapper = mount(
      <ContextHOC def={ defTestData } isOpen={ true } removeDefClick={ removeDefClickSpy } />
    ) 
    wrapper.find("IconSelector").at(1).simulate('click');

    sinon.assert.calledOnce(removeDefClickSpy);
  })
})



