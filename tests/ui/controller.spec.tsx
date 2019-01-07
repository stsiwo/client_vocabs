import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import SortFilterControllerItem from '../../src/representationals/business/Controller/SortFilterControllerItem';
import SearchWordControllerItem from '../../src/representationals/business/Controller/SearchWordControllerItem';
//import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../src/representationals/story/styledComponents';
import { theme } from '../../src/representationals/story/theme';




describe('ControllerItem', function() {
  it('should dispatch function is called when sort icon is clicked( SortFilterControllerItem )', function() {
    // props dummy
    const isSortFilterModalOpenDummy: boolean = false;

    // props spy 
    const toggleSortFilterModalClickSpy: SinonSpy = sinon.spy();
 
     const wrapper = mount(
       <ThemeProvider theme={ theme }>
         <SortFilterControllerItem
           isSortFilterModalOpen={ isSortFilterModalOpenDummy }
           toggleSortFilterModalClick={ toggleSortFilterModalClickSpy } />
       </ThemeProvider>
     ) 
    
     wrapper.find(SortFilterControllerItem).simulate('click');

     sinon.assert.calledOnce(toggleSortFilterModalClickSpy);
  })

  it('should dispatch function is called when searchword icon is clicked( ', function() {
    // props dummy
    const isSearchWordModalOpenDummy: boolean = false;

    // props spy 
    const toggleSearchWordModalClickSpy: SinonSpy = sinon.spy();
 
     const wrapper = mount(
       <ThemeProvider theme={ theme }>
         <SearchWordControllerItem
           isSearchWordModalOpen={ isSearchWordModalOpenDummy }
           toggleSearchWordModalClick={ toggleSearchWordModalClickSpy } />
       </ThemeProvider>
     ) 
    
     wrapper.find(SearchWordControllerItem).simulate('click');

     sinon.assert.calledOnce(toggleSearchWordModalClickSpy);
  })

})
