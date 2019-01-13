import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import { DefNode } from '../../src/representationals/business/Form/DefNode';
import { defTestData } from '../storage/domains/def';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import { IDef } from '../../src/domains/def';
import { store } from '../helper/mockStoreConfig';

interface Props {
  className?: string;
  def: IDef;
  isOpen: boolean;
  removeDefClick: ( wordId: string, defId: string ) => void;
}

describe('DefNode', function() {
  /******************************************
   * don't user styled component when you spy, stub, mock, just use component (not wrapped by styled component
   * otherwise, cause error: TypeError: Cannot read property 'handleToggleClick' of undefined
   ******************************************/
  const removeDefClickSpy: SinonSpy = sinon.spy();
  const handleToggleClickSpy: SinonSpy = sinon.spy(DefNode.prototype, 'handleToggleClick');
 

  it('should invoke handleDeleteDefClick event handler is called when word text is change', function() {

    const ContextHOC = ProviderAndThemeWrapperHOC<Props>(DefNode, store);
    const wrapper = mount(
      <ContextHOC def={ defTestData } isOpen={ true } removeDefClick={ removeDefClickSpy } />
    ) 
    // def deletion icon
    wrapper.find("IconSelector").at(1).simulate('click');

    sinon.assert.calledOnce(removeDefClickSpy);
  })

  it('should invoke handleToggleClick event handler is called when def content icon is change', function() {

    const ContextHOC = ProviderAndThemeWrapperHOC<Props>(DefNode, store);
    const wrapper = mount(
      <ContextHOC def={ defTestData } isOpen={ true } removeDefClick={ removeDefClickSpy } />
    ) 
    // dif toggle icon
    wrapper.find("IconSelector").at(0).simulate('click');

    sinon.assert.calledOnce(handleToggleClickSpy);
  })

  it('should change isDefContentOpen when def content icon is change', function() {

    const ContextHOC = ProviderAndThemeWrapperHOC<Props>(DefNode, store);
    const wrapper = mount(
      <ContextHOC def={ defTestData } isOpen={ true } removeDefClick={ removeDefClickSpy } />
    ) 
    // dif toggle icon
    wrapper.find("IconSelector").at(0).simulate('click');

    // can't use state() in enyzme 
    // this is termporary approach to make sure the state change
    expect(wrapper.find("IconSelector").at(0).prop("rotate")).toEqual(false);
  })
})



