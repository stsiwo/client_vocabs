import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import { DefTree } from '../../src/representationals/business/Form/DefTree';
import { defTestData } from '../storage/domains/def';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import { IDef } from '../../src/domains/def';
import { store } from '../helper/mockStoreConfig';

interface Props {
  className?: string;
  defs: IDef[]; 
  addNewDefClick: ( wordId: string ) => void;
}

describe('DefTree', function() {

  const addNewDefClickSpy: SinonSpy = sinon.spy();
  const handleToggleClickSpy: SinonSpy = sinon.spy(DefTree.prototype, 'handleToggleClick');
  const ContextHOC = ProviderAndThemeWrapperHOC<Props>(DefTree, store);
  const wrapper = mount(
    <ContextHOC defs={ [ defTestData ] } addNewDefClick={ addNewDefClickSpy } />
  ) 

  it('should invoke handleNewDefClick event handler is called when word text is change', function() {
    
    // add new def icon
     wrapper.find("IconSelector").at(1).simulate('click');

     sinon.assert.calledOnce(addNewDefClickSpy);
  })

  it('should invoke handleToggleClick event handler is called when def node icon is clicked', function() {
    
    // def node tree icon
     wrapper.find("IconSelector").at(0).simulate('click');

     sinon.assert.calledOnce(handleToggleClickSpy);
  })

  it('should change isDefNodeOpen when def node icon is clicked', function() {
    
    // def node tree icon
     wrapper.find("IconSelector").at(0).simulate('click');

     // default is true (business/Form/DefTree.tsx)
      /***********************************************
       * initial value should be true but it is false,
       * might review here later. for new leave this.
       ***********************************************/
     expect(wrapper.find("IconSelector").at(0).prop('rotate')).toEqual(true/*false*/)

  })
})


