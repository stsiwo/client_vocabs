import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import SearchImageModalContent from '../../src/representationals/business/SearchImageModal/SearchImageModalContent';
import Search from '../../src/representationals/base/Input/Search';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import { store } from '../helper/mockStoreConfig';

interface Props {
  className?: string;
  wordName: string;
  defId: string;
  wordId: string;
}

describe('SearchImageModalContent', function() {

    // spy
    const handleSearchBtnClickSpy: SinonSpy = sinon.spy(SearchImageModalContent.prototype, 'handleSearchBtnClick');
    const handleSearchInputChangeSpy: SinonSpy = sinon.spy(SearchImageModalContent.prototype, 'handleSearchInputChange');

  // might need to reset mock store every time after test

  it('should invoke handleSearchBtnClick event handler is called when search icon is clicked', function() {

     const ContextHOC = ProviderAndThemeWrapperHOC<Props>(SearchImageModalContent, store);
     const wrapper = mount(
        <ContextHOC wordName="test-word-name" defId="0" wordId="0" />
     ) 
     wrapper.find("IconSelector").simulate('click');

     sinon.assert.calledOnce(handleSearchBtnClickSpy);
  })

  it('should invoke handleSearchInputChange event handler is called when search text is changed', function() {

    // props spy 
     const ContextHOC = ProviderAndThemeWrapperHOC<Props>(SearchImageModalContent, store);
     const wrapper = mount(
        <ContextHOC wordName="test-word-name" defId="0" wordId="0" />
     ) 
    
     wrapper.find("InputSelector").simulate('change');

     sinon.assert.calledOnce(handleSearchInputChangeSpy);
  })

  it('should display proper value ( searchInput ) when search text is changed', function() {

     const ContextHOC = ProviderAndThemeWrapperHOC<Props>(SearchImageModalContent, store);
     const wrapper = mount(
        <ContextHOC wordName="test-word-name" defId="0" wordId="0" />
     ) 
    
     wrapper.find("InputSelector").simulate('change', { target: { value: "changed-input" }});

     // check state change
    //  better approach is to find SearchImageModalContent component then check its state by state() but it cause error. might something related with Consumer.Context so temporarly use another approach like below. just find any component ( in this case, Search ) whose prop has the state. then check the change.
     expect(wrapper.find(Search).prop('value')).toEqual("changed-input");
       
     // also check the state is displayed correctly 
     expect(wrapper.find("InputSelector").prop('value')).toEqual("changed-input");
       

  })

  it('should display proper value ( items ) when search icon is clicked', function() {

     const ContextHOC = ProviderAndThemeWrapperHOC<Props>(SearchImageModalContent, store);
     const wrapper = mount(
        <ContextHOC wordName="test-word-name" defId="0" wordId="0" />
     ) 
    
     wrapper.find("IconSelector").simulate('click');

     // check state change
    //  better approach is to find SearchImageModalContent component then check its state by state() but it cause error. might something related with Consumer.Context so temporarly use another approach like below. just find any component ( in this case, Search ) whose prop has the state. then check the change.
     const itemsPropArray: any[] = wrapper.find("SearchResults").first().prop('items')
    expect(itemsPropArray.length).toEqual(1);
  })
})



