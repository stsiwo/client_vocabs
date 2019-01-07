import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import SortFilterControllerItem from '../../src/representationals/business/Controller/SortFilterControllerItem';
//import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../src/representationals/story/styledComponents';
import { theme } from '../../src/representationals/story/theme';


describe('SortFilterControllerItem', function() {
  it('should dispatch function is called when sort icon is clicked', function() {
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
    
     wrapper.find('input').simulate('click');

     sinon.assert.calledOnce(toggleSortFilterModalClickSpy);
  })
})
